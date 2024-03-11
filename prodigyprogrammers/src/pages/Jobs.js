import React from 'react';
import "./Jobs.css";

function Jobs(){
    return(
        <div className='jobs'> 
            <div className='Jobs'>
                <h1 className='jobHeader'>Part-Time Instructor Jobs</h1>
                <div className='jobList'> 
                    <div className='jobListItem'>
                        <h2>Computer Science Instructor Requirements:</h2>
                        <ul>
                            <li>Completed or pursuing Undergraduate Computer Science degree</li>
                            <li>Web development skills: HTML5, CSS3, JavaScript</li>
                            <li>Python</li>
                            <li>Scratch</li>
                        </ul>
                    </div>
                    <div className='jobListItem'>
                        <h2>Business and Finance Instructor Requirements:</h2>
                        <ul>
                            <li>Completed or pursuing Undergraduate Business degree</li>
                            <li>Knowledge of Accounting Software: QuickBooks, Sage, or Excel</li>
                            <li>Excellent MS Office skills: Word, Outlook, Excel and PowerPoint</li>
                        </ul>
                    </div>
                    <div className='jobListItem'>
                        <h2>Math Instructor Requirements:</h2>
                        <ul>
                            <li>Completed or pursuing Undergraduate Math related degree</li>
                            <li>Proficiency in various mathematical concepts: algebra, calculus, geometry, trigonometry.</li>
                            <li>Strong problem-solving skills to assist students in understanding math problems.</li>
                        </ul>
                    </div>
                    <div className='jobListItem'>
                        <h2>English Instructor Requirements:</h2>
                        <ul>
                            <li>Completed or pursuing Undergraduate English related degree</li>
                            <li>Strong Language Proficiency: including grammar, punctuation, spelling, and vocabulary.</li>
                            <li>Proficiency in writing various forms of essays.</li>
                            <li>Ability to teach effective writing techniques.</li>
                        </ul>
                    </div>
                    <h3 className='emailDesc'>To apply, email your resume to: <a href="mailto:prodigyprogrammerstoronto@gmail.com">prodigyprogrammerstoronto@gmail.com</a></h3>
                </div>  
            </div>
            
        </div>
    )
}
export default Jobs;