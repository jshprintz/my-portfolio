import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LazyLoad from "react-lazy-load";
import { Grid, Segment } from "semantic-ui-react";

class iDrunkPage extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
  }

  render() {
    let segmentWidth;
    this.state.matches && (segmentWidth = 500);
    !this.state.matches && (segmentWidth = 300);

    return (
      <>
        <NavBar />
        <br />
        <p className="sub-header-text ">iDrunk</p>
        <br />
        <Grid centered>
          <Grid.Row>
            <LazyLoad width={350} offset={100}>
              <img
                className="image-details"
                src="https://i.imgur.com/GvM9REv.png"
                alt="iDrunk"
              />
            </LazyLoad>
          </Grid.Row>
          <Grid.Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://idrunk1.herokuapp.com/"
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
              href="https://github.com/jshprintz/iDrunk"
            >
              <p className="details-text details-button second-animation">
                Explore Code!
              </p>
            </a>
          </Grid.Row>
          <Grid.Row>
            <Segment raised className="third-animation">
              <p className="story" style={{ width: segmentWidth }}>
                A social media app designed around your favorite activity:
                Drinking! Share your greatest mix drink recipes and discover new
                ones from people all around the world! Post comments under some
                of your favorite (or least favorite) drinks, and keep a private
                collection of some of your personal favorites!
              </p>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
                alt="CSS3"
                className="badge fourth-animation"
              />
            </LazyLoad>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
                alt="HTML5"
                className="badge fourth-animation"
              />
            </LazyLoad>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534"
                alt="Python"
                className="badge fourth-animation"
              />
            </LazyLoad>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465"
                alt="Bootstrap"
                className="badge fourth-animation"
              />
            </LazyLoad>
          </Grid.Row>
          <Grid.Row>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/5473e0d3006bb7e662bdf754d830a026ce050be61f1cbbd4689783ae49950b93/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646a616e676f2d2532333039324532302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646a616e676f266c6f676f436f6c6f723d7768697465"
                alt="Django"
                className="badge fourth-animation"
              />
            </LazyLoad>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"
                alt="PostgreSQL"
                className="badge fourth-animation"
              />
            </LazyLoad>
            <LazyLoad height={40} offset={100}>
              <img
                src="https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465"
                alt="Heroku"
                className="badge fourth-animation"
              />
            </LazyLoad>
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    );
  }
}
export default iDrunkPage;
