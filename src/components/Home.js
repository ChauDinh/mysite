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
     <p>
      I'm Chau, a fresher front-end web developer in HCM city. I usually work with HTML, CSS, Vanilla JavaScript, and ReactJS - a JS's library for rendering user interfaces. 

      I'm interested in computation, language, math and education.
     </p>
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
