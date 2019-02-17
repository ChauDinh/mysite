import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home">
        {this.renderHello()}
        {this.renderContact()}
      </div>
    )
  }

  renderHello() {
   return (
    <div>
     <h2>Hello, world!</h2>
     <hr />
     <ul>
       <li>
        <p>
          Hello, I'm Chau. I would say I'm not a computer science student at University. However, with a ... 

          I'm interested in computation, language, math and education.
        </p>
       </li>
     </ul>

     <h2>Personal Details</h2>
     <hr />
     <ul>
       <li>
        <h3>
          <span>Fullname</span>: Dinh Vo Bao Chau
        </h3>
       </li>
       <li>
        <h3>
          <span>Level</span>: Fresher
        </h3>
       </li>
       <li>
        <h3>
          <span>Language Proficiency</span>: English
        </h3>
        </li>
       <li>
        <h3>
          <span>Status</span>: Fresher Front End Web Developer
        </h3>
       </li>
       <li>
        <h3>
          <span>Fields</span>: HTML5, CSS3, Bootstrap4, JavaScript, ReactJS
        </h3>
       </li>
       <li>
        <h3>
          <span>Prefers</span>: Java, Go, Algorithms, <span class="latex">L<sup>a</sup>T<sub>e</sub>X</span>
        </h3>
       </li>
     </ul>
     <h2>Professional Summary</h2>
     <hr />
     <ul>
      <li>
       <h3><span>Fluent</span> in HTML, CSS, JavaScript backbones, DOM Manipulation</h3>
      </li>
      <li>
        <h3><span>Have experience</span> in working with Version control (Git, GitHub), ReactJS (components, props, state, routes, build personal app), Convert PSD to HTML</h3>
      </li>
     </ul>

     <h2>Beyond Technique</h2>
     <hr />
     <ul>
       <li>
         <h3>Good communication skills, sensitive and supportive</h3>
       </li>
       <li>
         <h3>Positive attitude towards learning and working</h3>
       </li>
       <li>
         <h3>Critical thinking, and problem solving</h3>
       </li>
       <li>
         <h3>Can work under pressure, adapt to new environment, new technologies</h3>
       </li>
     </ul>
    </div>
   )
  }

  renderContact() {
   return (
    <div>
     <h3>Contact Me</h3>
     <ul>
      <li>For general communication, contact <a href="mailto:chaudvb95uc@gmail.com">chaudvb95uc@gmail.com</a></li>
      <li>For Linkedin-related communication, contact <a href="https://www.linkedin.com/in/chaudinh95/" target="__blank">Linkedin/chaudinh95</a></li>
     </ul>
    </div>
   );
  }
}

export default Home
