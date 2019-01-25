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
        <b>5.2018</b>
        <br />Computer Science: ...
        <br />Web Development Fundamentals: ...
       </p>
      </Timeline.Item>
      <Timeline.Item>
       <p>
        <b>11.2017</b>
        <br />Computer Science: ..
        <br />Toidicodedao...
       </p>
      </Timeline.Item>
     </Timeline>
    </div>
   );
  }
}
