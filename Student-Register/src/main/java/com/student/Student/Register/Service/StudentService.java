package com.student.Student.Register.Service;


import com.student.Student.Register.Model.StudentModel;
import com.student.Student.Register.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<StudentModel> getStudents() {
        List<StudentModel> studentEntities = studentRepository.findAll();
        return studentEntities;

    }

    public boolean createStudent(StudentModel studentEntity) {
        try {
            studentRepository.save(studentEntity);
            return true;
        } catch (DataAccessException e) {
            // Handle data access exception here (e.g., log the error)
            return false;
        }
    }

    public boolean deleteStudent(Long id) {
        Optional<StudentModel> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            studentRepository.deleteById(id);
            return true;
        } else {
            return false; // or throw exception
        }
    }


    public boolean updateStudent(Long ID,StudentModel studentEntity) {

        Optional<StudentModel> studentOptional = studentRepository.findById(ID);
        if (studentOptional.isPresent()) {
            System.out.println(studentOptional.get().getName());
            studentOptional.get().setName(studentEntity.getName());
            studentOptional.get().setAddress(studentEntity.getAddress());
            studentOptional.get().setEmail(studentEntity.getEmail());
            studentOptional.get().setPhone(studentEntity.getPhone());
            studentRepository.saveAndFlush(studentOptional.get());
            return true;
        }
        else
            return false;

    }

}
