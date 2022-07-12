package io.github.barbosavinicius.morpheusUsers.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.validator.constraints.UniqueElements;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @NotEmpty(message = "O campo 'Nome' é obrigatório")
    private String name;

    @Column(nullable = false, length = 11, unique = true)
    @NotNull(message = "O campo 'CPF' é obrigatório")
    @CPF(message = "O 'CPF' informado não é válido")
    private String cpf;

    @Column(name = "registration_date", updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate registrationDate;

    @PrePersist
    public void prePersist(){
        setRegistrationDate(LocalDate.now());
    }
}
