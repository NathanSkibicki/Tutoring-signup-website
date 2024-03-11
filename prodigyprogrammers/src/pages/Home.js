import React from "react";
import './Home.css'

import TutorImage1 from '../Tutor-Image1.png';
import { Link } from 'react-router-dom';

function Home() {
  
  return (

    <div className='Home'>
        <h1 className="CompanyHeader">Prodigy Programmers</h1>
        <div className='gridbox1'>
          <div className='left-aligned'>
            <h2 className='leftsideh2'>Unleash Potential, Be the Future</h2>
            <p className='leftsidep'>
              Ignite your child's creativity as they explore their passions! 
              Embark on a journey of discovery with our personalized tutoring program, offering 
              one-on-one mentorship with professionals as kids explore Math, Business & Finance, Computer Science, and 
              English, uncovering their true passions along the way!
              </p>
          </div>
          <div className='right-aligned'>
            <img className = 'TutoringImage1' src={TutorImage1} alt = ""/>
          </div>
        </div>
        <div>
          <h2>Inspire. Explore. Evolve</h2>
          <p className="gameBasedDesc">Our innovative approach features a game-based 
            curriculum and system that keeps children engaged in the learning process, cultivating 
            essential skills for the future, such as coding, problem-solving, critical thinking, creativity, and teamwork.</p>
        </div>
        <div className="bannerList">
          <div className="bannerGrid">
            <h4>We're not your typical after-school program.</h4>
            <ul className="firstUl">
              <li>Innovative curriculum</li>
              <li>Comprehensive program</li>
              <li>One on one mentorship</li>
              <li>Future-focused</li>
            </ul>
            <ul className="secondUl">
              <li>Fun and engaging</li>
              <li>Expert instructors</li>
              <li>Hands-on learning</li>
              <li>Personalized assessments</li>
            </ul>
          </div>
        </div>
        
        <div className="bottomHeading">
          <h1>Year-Round Programs</h1>
          <h3>Unlocking Potential, Every Season, Every Age.</h3>
        </div>
    </div>
  );
}

export default Home;
