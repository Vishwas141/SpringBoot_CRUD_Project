import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/student/all');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/student/delete/${id}`);
      fetchStudents(); // Refresh the list of students after deleting one
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = (student) => {
    // Implement the edit functionality as needed
  };

  return (
    <div className="Dashboard">
      <h1>Student Dashboard</h1>
      <div className="students-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Phone: {student.phone}</p>
            <p>Email: {student.email}</p>
            <p>Address: {student.address}</p>
            <button onClick={() => handleEdit(student)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(student.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
