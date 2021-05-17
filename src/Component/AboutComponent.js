import React from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Progress } from 'antd';
import Profile from "../Assets/img/Profile.JPG";
import { CaretRightOutlined,
         SmileTwoTone,
         ProjectTwoTone,
         CustomerServiceTwoTone,
         CrownTwoTone
 } from "@ant-design/icons";
const AboutComponent = () => {
  return (
    <div className="about-container" id="about">
      <h1> About Me</h1>
      <div>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <img className="about-pic" src={Profile} />
        <div className="about-right-text">
          <h2>UI/UX Designer & Web Developer.</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="about-status">
            <p>
              {" "}
              <CaretRightOutlined />
              Birthday: 1 May 1995
            </p>
            <p>
              <CaretRightOutlined />
              Age: 30
            </p>
            <p>
              <CaretRightOutlined />
              Website: www.example.com
            </p>
            <p>
              <CaretRightOutlined />
              Degree: Master
            </p>
            <p>
              <CaretRightOutlined />
              Phone: +123 456 7890
            </p>
            <p>
              <CaretRightOutlined />
              PhEmailone: email@example.com
            </p>
            <p>
              <CaretRightOutlined />
              City: New York, USA
            </p>
            <p>
              <CaretRightOutlined />
              Freelance: Available
            </p>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus
          </p>
        </div>
      </div>
      <div className="about-fact">
        <h2> Facts</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas
        </p>
        <div  >
        <SmileTwoTone  className="fact-button"/>
        <ProjectTwoTone className="fact-button"/>
        <CustomerServiceTwoTone  className="fact-button"/>
        <CrownTwoTone  className="fact-button"/>
        
        </div>
      </div>
      <div className="about-skill">
        <h2>Skills</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="about-course">
        <h4>HTML</h4>
        
  <>
    <Progress strokeLinecap="square" status='active' percent={75} />
   
  </>

        <h4>CSS</h4>
        <>
    <Progress strokeLinecap="square" status='active' percent={80} />
   
  </>
        <h4>JAVASCRIPT</h4>
        <>
    <Progress strokeLinecap="square" status='active' percent={75} />
   
  </>
        <h4>REACT</h4>
        <>
    <Progress strokeLinecap="square" status='active' percent={75} />
   
  </>
  <h4>JAVA</h4>
        <>
    <Progress strokeLinecap="square" status='active' percent={50} />
   
  </>
        <h4>NODE</h4>
        <>
    <Progress strokeLinecap="square" status='active' percent={75} />
   
  </>
        <h4>MONGODB</h4>
        <>
    <Progress strokeLinecap="square" status='active' percent={75} />
   
  </>
        <h4>FIGMA</h4>
         <>
    <Progress strokeLinecap="square" status='active' percent={75} />
   
  </>
      </div>
      </div>
    </div>
  );
}
export default AboutComponent;