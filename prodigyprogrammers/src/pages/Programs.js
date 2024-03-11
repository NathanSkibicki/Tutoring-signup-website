import React from "react";
import './Programs.css'
import MathLogo from '../MathLogo.jpg';
import CSLogo from '../CSLogo.png'
import EnglishLogo from '../EnglishLogo.png'
import BusinessLogo from '../BusinessLogo.png'

function Program(){
    return (
        <div className="programs">
            <div className="programPage">
                <div className="programHeaderBox">
                    <h1 className="programHeader">Our Programs</h1>
                </div>
                <div className="programList">
                    <div className="listElement">
                        <div className="listGrid">
                            <h3>Computer Science</h3>
                            <p className="empGrade"><em>Grades 5-12</em></p>
                            <p>
                            Our computer science course, spanning grades 1 to 12, covers computational thinking, 
                            coding, and digital literacy. Students progress from basic problem-solving to 
                            advanced topics like programming languages and algorithms, fostering essential skills 
                            for success in the digital age.
                            </p>
                            <img src={CSLogo} alt = ''/>
                        </div> 
                    </div>
                    <div className="listElement">
                        <div className="listGrid">
                            <h3>Math</h3>
                            <p className="empGrade"><em>Grades 1-12</em></p>
                            <p>
                                Our math course spans grades 1 through 12, offering a structured progression from 
                                foundational arithmetic to advanced topics like calculus and statistics. Through 
                                hands-on activities and real-world applications, students develop mathematical fluency,
                                 problem-solving skills, and critical thinking abilities essential for success in academics and beyond.
                            </p>
                            <img src={MathLogo} alt = ''/>
                        </div> 
                    </div>
                    <div className="listElement">
                        <div className="listGrid">
                            <h3>English</h3>
                            <p className="empGrade"><em>Grades 1-12</em></p>
                            <p>
                            Our English curriculum provides a comprehensive journey from foundational literacy skills in early 
                            grades to advanced literary analysis and writing proficiency in high school. Through engaging literature, 
                            writing exercises, and language studies, students develop communication skills, critical thinking, and appreciation 
                            for diverse texts and cultures. The course fosters creativity, analytical thinking, and effective 
                            communication, empowering students to excel in academics and beyond.
                            </p>
                            <img src={EnglishLogo} alt = ''/>
                        </div> 
                    </div>
                    <div className="listElement">
                        <div className="listGrid">
                            <h3>Business and Finance</h3>
                            <p className="empGrade"><em>Grades 9-12</em></p>
                            <p>
                            Our business, finance, and accounting curriculum offers students a practical and theoretical 
                            understanding of key concepts from grades 1 to 12. Beginning with basic financial literacy, 
                            students progress to explore topics such as budgeting, entrepreneurship, investment strategies, 
                            and financial reporting. Through hands-on simulations and real-world case studies, students 
                            develop essential skills for managing personal finances and understanding the dynamics of the business world.
                            </p>
                            <img src={BusinessLogo} alt = ''/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program