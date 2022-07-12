package io.github.barbosavinicius.morpheusUsers.rest;

import io.github.barbosavinicius.morpheusUsers.rest.exception.ApiErrors;
import javax.validation.ConstraintViolationException;

import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ApplicationControllerAdvice {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErrors handleValidationErrors(MethodArgumentNotValidException ex ){

        BindingResult bindingResult = ex.getBindingResult();

        List<String> messages = bindingResult.getAllErrors()
                .stream()
                .map( objectError -> objectError.getDefaultMessage() )
                .collect( Collectors.toList() );

        return new ApiErrors(messages);
    }
    /*TODO
        Descobrir por que as exceções não estão sendo capturadas:
            - Erro de Nome somente com espaços, tratado e lançado pelo MUserController;
            - Erro de CPF já existente na base de dados lançado pelo BD;
                -- CPF já existente: 23505
                -- Tamanho máximo atingido: 22001
     */
    //Erro de Integridade de Dados (Duplicidade de CPF)
//    @ExceptionHandler(DataIntegrityViolationException.class)
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    public void handleDataIntegrityErrors(DataIntegrityViolationException ex ){
//        String errorMessage = ex.getMessage();
//        System.out.println("\n\n*** Error Message: ***\n"+errorMessage);
//        System.out.println("\n\n*** Exception data: ***\n"+ex);
////        if (errorMessage.contains("CPF NULLS FIRST")) {
////            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Esse CPF já existe na base de dados.");
////        } else {
////            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Erro ao inserir. Gentileza verificar os dados informados.");
////        }
//    }

    @ExceptionHandler(SQLException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErrors handleSQLException(SQLException ex){
        String errorMessage = ex.getMessage();
        Integer errorCode = ex.getErrorCode();
        ApiErrors errors;

        switch (errorCode) {
            case 23505: //CPF já existente
                errors = new ApiErrors("Esse CPF já existe na base de dados.");
                return errors;
            case 22001:
                if (errorMessage.contains("CPF CHARACTER VARYING")){
                    errors = new ApiErrors("CPF incorreto: informe apenas 11 números.");
                    return errors;
                } else if (errorMessage.contains("NAME CHARACTER VARYING")) {
                    errors = new ApiErrors("Nome possui um tamanho não permitido!");
                    return errors;
                } else {
                    errors = new ApiErrors("O tamanho dos dados informados não é permitido.");
                    return errors;
                }
            default:
                errors = new ApiErrors("Erro ao inserir. Gentileza verificar os dados informados.");
                return errors;
        }
//        System.out.println("\n\n*** Error Message: ***\n"+errorMessage);
//        System.out.println("\n\n*** Exception data: ***\n"+ex);
//        System.out.println("\n\n*** Exception Error Code: ***\n"+ex.getErrorCode());
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity handleResponseStatusException(ResponseStatusException ex){
        String errorMessage = ex.getReason();
        HttpStatus statusCode = ex.getStatus();
        ApiErrors apiErrors = new ApiErrors(errorMessage);
        return new ResponseEntity(apiErrors, statusCode);
    }
}
