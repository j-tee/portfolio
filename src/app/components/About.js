import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navbar from './Navbar';

function About() {
    return (
        <>
            <Navbar />
            <Container fluid className='about-me'>
                <Row className="justify-content-center">
                    <Col xs={12} sm={4} className="text-center">
                        <Image src={require('../../assets/imgs/teejay1.png')} roundedCircle />
                        <h3>Julius Tetteh</h3>
                        <p>Full Stack Web Developer</p>
                    </Col>
                    <Col xs={12} sm={8}>
                        <h2>About Me</h2>
                        <p>Welcome to my personal website! My name is Julius Tetteh, and I am a Full Stack Web Developer with experience in building web and mobile applications using various languages, frameworks, and technologies. With a working knowledge of multiple languages, frameworks, and technologies, I am always ready to ramp up quickly and efficiently to meet project requirements. My expertise in Front-End technologies includes JavaScript, React, Redux, jQuery, HTML5, CSS3, Angular, and TypeScript. In Back-End technologies, I am proficient in Ruby, Rails, MySQL, MSSQL, DotNetCore WebAPI, C#, EntityFramework, and URF. Additionally, I have professional experience in remote pair programming, teamwork, and mentoring.</p>

                        <p>Throughout my career, I have worked on various projects, including personal projects such as SDMS, a centralized platform for managing students' records for pre-tertiary schools nationwide, Math Magician, a fun tool for performing basic mathematical calculations, and Todo App, a tool for tracking a list of tasks to be performed. I am currently a mentor at Microverse, where I provide technical support to junior web developers through code reviews. I also collaborate with clients and stakeholders to define project requirements and create project plans as a freelance web developer.</p>

                        <p>Before transitioning to web development, I worked as an Investment Officer/DBA at Lords and Duchess Investment Ltd and gained hands-on experience in data access strategies and report generation that facilitated day-to-day business transactions. I also worked as a Developer/Instructor at Solarays Update, where I developed a database management system that helped track students' academic and other records, resulting in a spike in students' interest in computing. I mentored students and helped them handle challenges in their projects.</p>

                        <p>I hold a degree in Computer Science from Regent University College of Science and Technology, where I majored in software development, database management, and computer networks. Thank you for taking the time to visit my website. Feel free to explore my portfolio and contact me if you have any questions or would like to discuss potential projects.</p>

                        <h2>Skills</h2>
                        <p>Front-End: JavaScript, React, Redux, jQuery, HTML5, CSS3, Angular, TypeScript.</p>
                        <p>Back-End: Ruby, Rails, MySQL, MSSQL, DotNetCore WebAPI, C#, EntityFramework, URF.</p>
                        <p>Tools & Methods: Git, GitHub, Heroku, Netlify, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools.</p>
                        <p>Professional: Remote Pair-Programming, Teamwork, Mentoring.</p>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default About;
