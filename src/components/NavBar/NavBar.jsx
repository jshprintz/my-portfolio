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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jshprintz"
          >
            <div className="icon-size">
              <Icon name="github" size="big" className="link-color"></Icon>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jasonshprintz/"
          >
            <div className="icon-size">
              <Icon name="linkedin" size="big" className="link-color"></Icon>
            </div>
          </a>
          <a href="mailto:jshprintz@gmail.com">
            <div className="icon-size">
              <Icon name="mail" size="big" className="link-color"></Icon>
            </div>
          </a>
        </div>
        <Grid centered>
          <Grid.Row>
            <p className="header-img-name">
              <Link to="/" className="link-color">
                <Image
                  circular
                  centered
                  size="small"
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
            </Menu>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Navigation;
