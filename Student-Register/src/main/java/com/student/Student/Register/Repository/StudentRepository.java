package com.student.Student.Register.Repository;

import com.student.Student.Register.Model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<StudentModel, Long>
{

}
