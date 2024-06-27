
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Homepage = () => {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        address: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        
        try {
          const response = await axios.post('http://localhost:8080/api/student/add', formData);
          console.log('Response:', response.data);
          navigate("/home");
          
        } catch (error) {
          console.error('Error submitting form:', error);
        }
    
        
    
      };
    
      return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </header>
          
        </div>
      );
}

export default Homepage
