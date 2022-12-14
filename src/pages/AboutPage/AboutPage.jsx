import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Segment, Grid } from "semantic-ui-react";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }

  
  render() {
    let screenWidth;
    this.state.matches && (screenWidth = 600)
    !this.state.matches && (screenWidth = 300)

    return (
      <>
        <NavBar />
        <br />
        <p className="sub-header-text">My Story</p>
        <br />
        <Grid centered>
          <Segment raised style={{ width: screenWidth }}>
            <p className="story">
              My passion for programming was sparked when I was in high school.
              I created a game called “Perfect Pump” on the TI-83+ calculator.
              The game had a number displayed in currency, and the goal was to
              press a button and stop it perfectly on $20. The game was simple,
              but everyone really enjoyed it, and I vividly remember loving the
              feeling of making a program that everyone else used. I went on to
              take courses in C++ and Java, but didn’t pursue it as a career
              until much later in life.
            </p>
            <p className="story">
              I recently helped construct a VBA macro for my former company
              which was deployed to over 300+ independent contractors. After a
              short time at the company it was obvious that many of our tasks
              were repetitive and needed automation. I took it upon myself to
              write this macro in an effort to increase efficiency, and we ended
              up implementing it company-wide. Throughout writing it, I taught
              myself object-oriented programming concepts, and reinvigorated my
              love affair with programming. I unlocked all the same feelings I
              had in high school after I made “Perfect Pump”.
            </p>
            <p className="story">
              I enrolled into the General Assembly Software Engineering
              Immersive course because I realized that this is what makes me
              happiest. I’m a natural problem solver, creative, and techie.
              Combining my skills and talents into a career is my number one
              goal, and I’m looking to join an innovative organization that’s
              working to solve problems both big and small.
            </p>
          </Segment>
          <Grid.Row>
            <br />
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
