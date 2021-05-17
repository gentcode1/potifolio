import React from "react";
import "./index.css";
import { Divider } from 'antd';
const ResumeComponent = () => {
  return (
    <div className="resume" id="resume">
        {/* <>
      <Steps progressDot current={1} direction="vertical">  */}
      <h1>MY RESUME</h1>
      <div className="my-resume">
          
     
      <div >
     
        <h2>PERSONAL PROJECTS</h2>
        <h4>ForexBureaux.com</h4>
        <p>
          web project developed in React.js, Node.js and MongoDB which enable
          Rwandan to be able to exchange their currencies either Rwandan Francs
          to USD or From USD to Rwandan Francs and was final year research
          project in University of eager to renovate it and take out
          implementation .
        </p>
      </div>
      <Divider />
      <div className="personal-project">
        <h2>PERSONAL PROJECTS</h2>
        <h4>ForexBureaux.com</h4>
        <p>
          web project developed in React.js, Node.js and MongoDB which enable
          Rwandan to be able to exchange their currencies either Rwandan Francs
          to USD or From USD to Rwandan Francs and was final year research
          project in University of eager to renovate it and take out
          implementation .
        </p>

        <h4>SchoolManagementSystem</h4>
        <p>
          SchoolManagementSystem is a Web Based application enable primary and
          secondary schools to be able to keep their student's report info , i
          created it using techologies : React.js, Node.js and MongoDB.
        </p>

        <h4>Fetch USA</h4>
        <p>
          created search engine which is made in CSS , HTML and JavaScript and
          is able to fetch in API the state and cities in USA and display their
          population latitude, longitude ,etc.
        </p>
        <h4>blogPost</h4>
        <p>
          created back end Blogpost which enable users to create blogs and
          enables anyone to add comment in Node.js and MongoDb.
        </p>
      </div>
      <Divider />
      <div className="resume-organization">
        <h2>ORGANIZATION</h2>
        <h4>JRYC/ Japan Rwanda Youth Coorporation</h4>
        <p>
          Assists in mutual understanding conference of 2017 and 2019 held in
          Rwanda done through cultural exchange, community outreaches and study
          tours between Rwandan and Japanese.
        </p>
      </div>
      <Divider />

      <div className="resume-certification">
        <h2>CERTIFICATION</h2>
        <h4>Bitdefender Certificate</h4>
        <p>Bit Bitdefender Certified Technical Specialist </p>
        <p> Bitdefender Certified</p>
        <p>MSP Specialist and Bitdefender Sales Technical Specialist</p>
      </div>
      <Divider />
      <div className="resume-languages">
        <h2>LANGUAGES</h2>
        <h4>English</h4>
        <h4>Francais </h4>
        <h4>Kinyarwanda </h4>
      </div>
      <Divider />
      <div className="resume-education">
        <h2>EDUCATION</h2>
        <h4>Bacheror's Degree</h4>
        <h5>
          University of Rwanda/college of Science and Technolog/Department of
          Computer Science
        </h5>
        <h6>courses</h6>
        <p>
          · data mining and data warehousing, data structure and algorithm,
          python , software project management, java programing , ubiquitous and
          pervasive computing, parallel and distributed system, cryptography and
          network security, data and information security ,e- commerce, computer
          networking, java programming.
        </p>
      </div>
      <Divider />
      <div className="resume-experience">
       <step title="WORK EXPERIENCE" ></step>
        <h3>She Can Code/ Igire Rwanda Organisation</h3>
        <h4>Trainee/Full-stack Developer</h4>
        <h5>Achievements/Task</h5>

        <p>develop project School Management System, Fetch USA, Blogpost.</p>
        <h3>Alpha Computer Ltd</h3>
        <h4>Intern/IT Support</h4>
        <h5>Achievements/Task</h5>

        <p>
          Co-ordinated and assisted in cyber security project(SOC) which looks
          for SIEM for capturing data logs that trends on system or network in
          prevention and detection of unauthorized access
        </p> 
      </div>
      </div>
    
    </div>
  );
};
export default ResumeComponent;