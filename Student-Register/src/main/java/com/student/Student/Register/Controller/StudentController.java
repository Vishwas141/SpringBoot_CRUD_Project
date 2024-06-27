package com.student.Student.Register.Controller;


import com.student.Student.Register.Model.StudentModel;
import com.student.Student.Register.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/all")
    public List<StudentModel> getAllStudents() {
        return studentService.getStudents();
    }

    @PostMapping("/add")
    public boolean addStudent(@RequestBody StudentModel studentEntity) {
        return studentService.createStudent(studentEntity);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteStudent(@PathVariable Long id) {
        return studentService.deleteStudent(id);
    }

    @PutMapping("/update/{id}")
    public boolean updateStudent(@PathVariable Long id, @RequestBody StudentModel studentEntity) {

        return studentService.updateStudent(id, studentEntity);
    }

}
