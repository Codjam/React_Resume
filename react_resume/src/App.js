import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';


class App extends Component {

  renderExperiences() {
    let resultsArray = [];
    resume.experiences.map((item, i) => {
    resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }

  renderProjects(){
    let resultsArray = [];
    resume.projects.map((item, i) => {
    resultsArray.push(<Project item={item} key={i} />);
    });
    return resultsArray;
  }

  renderSkills() {
    let resultsArray = [];
    resume.skills.map((item, i) => {
    resultsArray.push(<Skill item={item} key={i} />);
    });
    return resultsArray;
  }

  renderEducations() {
    let resultsArray = [];
    resume.education.map((item, i) => {
    resultsArray.push(<Education item={item} key={i} />);
    });
    return resultsArray;
  }

  renderLanguages() {
    let resultsArray = [];
    resume.languages.map((item, i) => {
    resultsArray.push(<Language item={item} key={i} />);
    });
    return resultsArray;
  }

  renderInterests() {
    let resultsArray = [];
    resume.interests.map((item, i) => {
        resultsArray.push(<li key={i}>{item}</li>);
    });
    return resultsArray;
  }

  render() {
    console.log(resume);
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={resume.image} alt="" />
                  <h1 className="name">{resume.name}</h1>
                  <h3 className="tagline">Full Stack Developer</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                      <li className="phone"><i className="fa fa-phone"></i><a href="tel:(202 744-7379)">{resume.phone}</a></li>
                      <li className="github"><i className="fa fa-github"></i><a href="https://github.com/Codjam" target="_blank">{resume.website}</a></li>
                      <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedinURL} target="_blank">{resume.linkedin}</a></li>
                      <li className="github"><i className="fa fa-instagram"></i><a href="https://www.instagram.com/j_and_his_amazing_friends/" target="_blank">www.instagram.com</a></li>
                      <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
                  </ul>
              </div>
              <div className="education-container container-block">
                  <h2 className="container-block-title">Education</h2>
                  {this.renderEducations()}
              </div>

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Languages</h2>
                  <ul className="list-unstyled interests-list">
                    {this.renderLanguages()}
                  </ul>
              </div>

              <div className="interests-container container-block">
                  <h2 className="container-block-title">Interests</h2>
                  <ul className="list-unstyled interests-list">
                    {this.renderInterests()}
                  </ul>
              </div>

          </div>

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                  <div className="summary">
                      <p>I've been a chef (all of my life) for over 20 years, working mostly in Washington DC. Teamwork and organization has been a major factor for the success throughout my culinary career. Some of the establishments that I have been apart of are: "Citronelle,” "Olives," "B. Smith's," "St. Regis" (hotel) and a mom & pop kosher restaurant "The Kosher Pastry Oven." </p>

                      <p>Since 2010, I have changed careers to becoming a physical education teacher at Lowell School. By pure luck, the school needed a cooking instructor for a cooking class that became an elective upon my arrival. Since then, I've taught cooking skills to an array of kids grades K-8th. While working as a PE teacher, I have been pursuing an associates degree in Physical Education.</p>

                      <p>Recently, I have been enjoying the many conversations with friends that have been showing me how different languages through the computer can produce specific things on the computer. Also, I finished a 24 week bootcamp at GW.I have posted some of my work on GitHub (Link on the sidebar).  </p>

                  </div>
              </section>

              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Experience</h2>

                  {this.renderExperiences()}

              </section>

              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                  <div className="intro">
                      <p>Below are a list of list of projects that I have done.</p>
                  </div>

                  {this.renderProjects()}

              </section>

              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                  <div className="skillset">

                    {this.renderSkills()}

                  </div>
              </section>

          </div>
      </div>
    );
  }
}

export default App;
