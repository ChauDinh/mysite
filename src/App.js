import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import { Button, Dropdown, Icon, Menu } from "antd";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Courses from "./components/Courses";

const ButtonGroup = Button.Group;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {this.renderProfileImage()}
          {this.renderNavigation()}
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }

  renderProfileImage() {
    return (
      <div className="profile">
        <img src="" alt="avatar" className="profile-image"/>
        <div className="profile-name">Chau Dinh</div>
      </div>
    )
  }

  renderNavigation() {
    const links = (
      <Menu>
        <Menu.Item>
        </Menu.Item>
      </Menu>
    )

    return (
      <div className="navigation">
        <ButtonGroup>
          <Button><Link to="/">Home</Link></Button>
          <Button><Link to="/projects">Projects</Link></Button>
          <Button><Link to="/courses">Courses</Link></Button>
          <Button><Link to="/resume">Resume</Link></Button>
          <Dropdown overlay={links}>
            <Button>Links<Icon type="down"/></Button>
          </Dropdown>
        </ButtonGroup>
      </div>
    )
  }

  renderRoutes() {
    return (
      <div className="body">
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/courses" component={Courses} />
      </div>
    )
  }
}

export default App;
