import React, { Component } from 'react';
import { Timeline } from "antd";

export default class Courses extends Component {
  render() {
    return (
      <div className="courses">
        {this.renderCoursesTaken()}
      </div>
    )
  }

  renderCoursesTaken() {
   return (
    <div>
     <h2>Courses I've Taken</h2>

     <Timeline>
      <Timeline.Item>
       <p>
        <b>11.2018</b>
        <br />Front End Libraries Certification (freecodecamp.org). Incuding:
        <ul>
         <li>Redux</li>
         <li>React</li>
         <li>Bootstrap Challenges - Finished</li>
         <li>jQuery - Finished</li>
         <li>Sass - Finised</li>
        </ul>
       </p>
      </Timeline.Item>
      <Timeline.Item>
       <p>
        <b>10.2018</b>
        <br />Responsive Web Design Certification (freecodecamp.org). 
        <br /><a href="https://www.freecodecamp.org/certification/fcc6794fe82-267f-4598-bf37-907a37905e78/responsive-web-design" target="__blank">View Certificate</a>
        <br />Timeline at freecodecamp: <a href="https://www.freecodecamp.org/fcc6794fe82-267f-4598-bf37-907a37905e78" target="__blank">FreeCodeCamp</a>
       </p>
      </Timeline.Item>
      <Timeline.Item>
       <p>
        <b>10.2018</b>
        <br />Web Design for Web Developers (udemy.com)
        <br /><a href="https://www.udemy.com/certificate/UC-0RURE2FF/" target="__blank">View Certificate</a>
       </p>
      </Timeline.Item>
     </Timeline>
    </div>
   );
  }
}
