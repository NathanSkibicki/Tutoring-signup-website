import React, { useState } from 'react';
import "./Contact.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://tutoring-signup-website.vercel.app/register', { name, email, program })
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err));
    
  };

  return (
    <div className='ContactStar'>
    <div className='ContactBody'>
    <div className="container">
      <h2 className='text'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className="input-data">
            <input
              type="text"
 
              name="name"
              className='inputField'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className='underline'></div>
            <label htmlFor='name'>
              <strong>Name</strong>
            </label>
          </div>
        </div>

        <div className='form-row'>
          <div className="input-data">
            <input
              type="email"

              className="inputField"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className='underline'></div>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
          </div>
        </div>

        <div className='form-row'>
          <div className="input-data">
            <input
              type="text"
             
              className="inputField"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
            />
            <div className='underline'></div>
            <label htmlFor='program'>
              <strong>Program and Grade Level</strong>
            </label>
          </div>
        </div>

        <div className='submitBox'>
          <div className='submit-btn'>
            <div className='input-data'>
              <div className='inner'></div>
              <input type="submit" value="submit" placeholder='Submit'/>
            </div>
          </div>
        </div>
      </form>
      <div className='programListButton'>
        <Link to = "/programs">Programs</Link>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
