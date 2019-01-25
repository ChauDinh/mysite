import React, { Component } from 'react';
import { Card } from "antd";

import "../css/Projects.css";

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
    </div>
   )
  }
}

