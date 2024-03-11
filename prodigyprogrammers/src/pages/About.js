import React from 'react';
import "./About.css";
import teacherimg from '../teacherimg.png'
import certificateimg from '../certificateimg.png'
import calender from '../calender.png'
import instrimg from '../instrimg.png'

function About() {
  return (
    <div className="about">
      <div className='About'>
        <div className='AboutUsHeader'>
          <h1>About Us</h1>
          <h2>Who we are and what we stand for</h2>
        </div>
        <div className='aboutBox'>
          <p className='aboutText'>
            Prodigy Programmers is dedicated to helping students unlock their full potential
            by providing personalized tutoring and mentorship in various subjects.
            Our team of experienced professionals is committed to guiding students on a journey
            of discovery, exploration, and growth.
            At Prodigy Programmers, we believe in fostering a love for learning and empowering
            students to pursue their passions. Through one-on-one sessions and tailored curriculum,
            we strive to inspire creativity, critical thinking, and problem-solving skills in
            every student we work with.
          </p>
        </div>
        <div className='aboutGridList'>
          <div className='gridItem'>
            <img src={teacherimg} alt = ""/>
            <p className='headerDesc'>One on One Mentorship</p>
            <p className='desc'>Our program offers one on one mentorship. Unmatched personalized care and instruction.</p>
          </div>
          <div className='gridItem'>
            <img src={certificateimg} alt = ""/>
            <p className='headerDesc'>Study Plans</p>
            <p className='desc'>Tailored learning schedules, customized to suit your child's pace and preferences.</p>
          </div>
          <div className='gridItem'>
            <img src={calender} alt = ""/>
            <p className='headerDesc'>Year-round Classes</p>
            <p className='desc'>Consistent, weekly after-school sessions year-round, fostering continuous learning and enjoyment!</p>
          </div>
          <div className='gridItem'>
            <img src={instrimg} alt = ""/>
            <p className='headerDesc'>Certified Instructors</p>
            <p className='desc'>
Our instructors are university students or graduates who undergo a comprehensive two-week training program.</p>
          </div>
        </div>
          
      </div>
      
    </div>
  );
}

export default About;
