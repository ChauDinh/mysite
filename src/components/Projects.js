import React, { Component } from 'react';
import { Card } from "antd";

import "../css/Projects.css";
import project01 from "../assets/project-1.png";
import project02 from "../assets/project-2.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        {this.renderProjects()}
      </div>
    )
  }

  renderProjects() {
   return (
    <div>
     <h2>Personal Projects</h2>

     <Card className="card" title="Fmail" extra={<a href="https://github.com/ChauDinh/fmail">GitHub</a>}>
      <p>
       Fmail is an application I built for something...
      </p>
     </Card>
     <Card className="card" title="Pixabay Image Finder" extra={<a href="https://github.com/ChauDinh/pixabay_image_finder">GitHub</a>}>
      <p>
        <img src={project01} alt="project-1" style={{ maxWidth: "100px", paddingRight: "10px", float: "left" }}/>
        Pixbay Image Finder is an application using ReactJS along with MaterialUI. I use the Pixabay API to fetch images based on a query string. 
      </p>
      <p>In addition, I also implement a Dialog box to view the large image.</p>
     </Card>
     <Card className="card" title="Weather Finder" extra={<a href="https://github.com/ChauDinh/weather_search">GitHub</a>}>
      <p>
        <img src={project02} alt="project-2" style={{ maxWidth: "100px", paddingRight: "10px", float: "left" }}/>
        This is a React app built by using standard cli - create-react-app and fetching data from an opensource wether api. The initial React app of mine.
      </p>
     </Card>
     <Card className="card" title="JavaScript Cardio" extra={<a href="https://github.com/ChauDinh/javascript_cardio_3">GitHub</a>}>
      <p>
        I'm quite interested in algorithms and competitive programming challenges, though I'm not  good at. 
      </p>
      <p>
        Here are few problems I selected from many sources on the internet, and then try to solve them by regular javascript. The questions I used in this session are from <a href="https://www.udemy.com/100-algorithms-challenge/">100 Algorithms Challenge</a>.
      </p>
      <ul>
        <li>Session 1: <a href="https://github.com/ChauDinh/basic_algorithms_01">https://github.com/ChauDinh/basic_algorithms_01</a></li>
        <li>Session 2: <a href="https://github.com/ChauDinh/basic_algorithms_02">https://github.com/ChauDinh/basic_algorithms_02</a></li>
      </ul>
     </Card>
    </div>
   )
  }
}

