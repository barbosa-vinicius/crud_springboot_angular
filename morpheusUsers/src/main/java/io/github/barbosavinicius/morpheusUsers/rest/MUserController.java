package io.github.barbosavinicius.morpheusUsers.rest;

import io.github.barbosavinicius.morpheusUsers.model.entity.MUser;
import io.github.barbosavinicius.morpheusUsers.model.repository.MUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/musers")
@CrossOrigin("http://localhost:4200")
public class MUserController {

    private final MUserRepository repository;

    @Autowired
    public MUserController(MUserRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MUser create( @RequestBody @Valid MUser mUser ) {
        mUser.setName(mUser.getName().trim());
        if (!mUser.getName().isEmpty()) {
            return this.repository.save(mUser);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "O campo 'Nome' é obrigatório");
        }
    }

    @GetMapping
    public List<MUser> getAll() {
        return repository.findAll();
    }
}
