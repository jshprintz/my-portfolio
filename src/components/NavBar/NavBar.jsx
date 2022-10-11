import React, { Component } from "react";
import { Menu, Grid, Image, Icon } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

class Navigation extends Component {
  state = {
    activeItem: "homepage",
  };

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div className="nav-bar">
        
          <div className="icons">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/jshprintz"><Icon name="github" size="big"></Icon></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jasonshprintz/"><Icon name="linkedin" size="big"></Icon></a>
            <a href="mailto:jshprintz@gmail.com"><Icon name="mail" size="big"></Icon></a>
          </div>
          <Grid centered>
          <Grid.Row>
            <p className="header-img-name">
              <Link to="/">
                <Image
                  circular
                  centered
                  size="tiny"
                  src="https://i.imgur.com/yG48EBV.png"
                />
                Jason Shprintz
              </Link>
            </p>
          </Grid.Row>
          <Grid.Row>
            <Menu className="Navigation" compact borderless>
              <Menu.Item
                as={NavLink}
                exact
                to="/about"
                name="about"
                active={activeItem === "about"}
                onClick={this.handleClick}
              >
                About
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                exact
                to="/portfolio"
                name="portfolio"
                active={activeItem === "portfolio"}
                onClick={this.handleClick}
              >
                Portfolio
              </Menu.Item>
              <Menu.Item
                as={NavLink}
                exact
                to="/contact"
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleClick}
              >
                Contact
              </Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Navigation;
