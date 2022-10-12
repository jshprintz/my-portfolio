import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Grid, Segment } from "semantic-ui-react";

export default function MinesweeperPage() {
  return (
    <>
      <NavBar />
      <br />
      <p className="sub-header-text ">MEGA Minesweeper</p>
      <br />
      <Grid centered>
        <Grid.Row>
          <img
            className="image-details"
            src="https://i.imgur.com/V0XIXJ1.png"
            alt="Minesweeper"
          />
        </Grid.Row>
        <Grid.Row>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jshprintz.github.io/Minesweeper/"
          >
            <p className="details-text details-button first-animation">
              Launch App!
            </p>
          </a>
        </Grid.Row>
        <Grid.Row>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jshprintz/Minesweeper"
          >
            <p className="details-text details-button second-animation">
              Explore Code!
            </p>
          </a>
        </Grid.Row>
        <Grid.Row>
          <Segment raised className="third-animation">
            <p className="story" style={{ width: 400 }}>
              Minesweeper meets Call of Duty in this action-packed rendition of
              the classic game!
            </p>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <img
            src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
            alt="CSS3"
            className="badge fourth-animation"
          />
          <img
            src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
            alt="HTML5"
            className="badge fourth-animation"
          />
          <img
            src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
            alt="Javascript"
            className="badge fourth-animation"
          />
          <img
            src="https://camo.githubusercontent.com/f6d50128cb007f85916b7a899da5d94f654dce35a37331c8d28573aef46f4274/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"
            alt="GitHub"
            className="badge fourth-animation"
          />
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
}
