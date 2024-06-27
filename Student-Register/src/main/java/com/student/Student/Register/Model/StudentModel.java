package com.student.Student.Register.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
@Entity
public class StudentModel {
    @Id
    private Long id; // Changed from int to Long for consistency with Entity
    private String name;
    private String address;
    private String phone;
    private String email;

}
