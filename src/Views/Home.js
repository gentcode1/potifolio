import  React from 'react';
import MainLayout from '../Component/MainLayout'
import HomeComponent from '../Component/HomeComponent'
import AboutComponent from '../Component/AboutComponent';
import ResumeComponent from '../Component/ResumeComponent';
import PortfolioComponent from '../Component/PortfolioComponent';

const Home=()=>{
    return(
        <MainLayout>
            <div className="container">
           <HomeComponent></HomeComponent>
           <AboutComponent></AboutComponent>
          <ResumeComponent></ResumeComponent>
          <PortfolioComponent></PortfolioComponent>
          </div>
      </MainLayout>
        
    )
}
export default Home; 