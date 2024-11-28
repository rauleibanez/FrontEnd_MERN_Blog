import React from 'react';
import foto from '../img/profile.png';
import '../perfil.css';

const About = () => {
  return (
    <section className="section">
      <h1 className="title has-text-white has-text-centered">About Me</h1>
      <div className="container is-widescreen content box block has-background-dark">    
      <article className="profile">
            <div className="profile-img">
                <img src={foto} alt="" />
            </div>    
            <div className="profile-info has-text-dark">
                <h2>Hi, my name is Raúl</h2>
                <p>Professional with more than 5 years of experience as Technical Support, Network Administrator and Developer. I collaborated on web projects in which I developed modules with JavaScript technologies (Express.js), Python (Flask and Django) and SQL databases such as Oracle and Sql Server. Additionally, I have intermediate knowledge in cybersecurity and data analysis with Excel, Python, R and Power BI.</p>
            </div>           
        </article>
        <article className="project-container">
            <h3>Projects</h3>
            <div className="project">
                <h4>Exploratory Data Analysis With Python and Pandas</h4>
                <p>ETL project on a supermarket sales dataset with univariate, bivariate, correlation analysis and data visualization in a Jupyter Notebook.</p>
            </div>

            <div className="project">
                <h4>Django + React Js Integration Project</h4>
                <p>React Application to Manage Activities, version using React and Django Rest Framework.</p>
            </div>

            <div className="project">
                <h4>Blog App JavaScript + EJS Render</h4>
                <p>JavaScript Application using Endpoints in Express-Js Routes, validation user,  MongoDB data Repository and EJS Render Engine</p>
            </div>
        </article>
      </div>
    </section>
  );
};

export default About;

