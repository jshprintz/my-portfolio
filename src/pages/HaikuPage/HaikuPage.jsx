import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Grid } from "semantic-ui-react";
import "./HaikuPage.css";

export default function HaikuPage() {
  return (
    <>
      <NavBar />
      <br />
      <p className="sub-header-text ">Haiku For You</p>
      <br />
      <Grid centered>
        <Grid.Row>
          <img
            className="image-details"
            src="https://i.imgur.com/2ILCi8H.png"
            alt="Haiku For You"
          />
        </Grid.Row>
        <Grid.Row>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://haikuforyou.herokuapp.com/"
          >
            <p className="details-text details-button first-animation">
              Launch App Here!
            </p>
          </a>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
}
