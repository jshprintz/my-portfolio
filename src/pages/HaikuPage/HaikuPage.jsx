import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LazyLoad from "react-lazy-load";
import { Grid, Segment } from "semantic-ui-react";

class HaikuPage extends Component {
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
        <p className="sub-header-text ">Haiku For You</p>
        <br />
        <Grid centered>
          <Grid.Row>
          <LazyLoad width={350} offset={100} >
            <img
              className="image-details"
              src="https://i.imgur.com/2ILCi8H.png"
              alt="Haiku For You"
            />
          </LazyLoad>
          </Grid.Row>
          <Grid.Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://haikuforyou.herokuapp.com/"
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
              href="https://github.com/jshprintz/Haiku-For-You"
            >
              <p className="details-text details-button second-animation">
                Explore Code!
              </p>
            </a>
          </Grid.Row>
          <Grid.Row>
            <Segment
              raised
              className="third-animation"
              style={{ width: segmentWidth }}
            >
              <p className="story">
                A fun social media app built around the love of the classic
                short-form poetry. Spend countless hours scanning through haikus
                from famous authors and undiscovered poets. Signup today and
                discover the healing power of haikus and a place where TL;DR
                doesn't exist!
              </p>
            </Segment>
          </Grid.Row>
          <Grid.Row>
          <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
              alt="CSS3"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
              alt="HTML5"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
              alt="Javascript"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
              alt="MongoDB"
              className="badge fourth-animation"
            />
            </LazyLoad>
          </Grid.Row>
          <Grid.Row>
          <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642"
              alt="Express.js"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73"
              alt="JWT"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465"
              alt="NPM"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
              alt="Node.js"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
              alt="React.js"
              className="badge fourth-animation"
            />
            </LazyLoad>
          </Grid.Row>
          <Grid.Row>
          <LazyLoad height={40} offset={100} >
            <img
              src="https://camo.githubusercontent.com/21a5ba11b939e86aa450c88ca6eeeb0e2e015f48ca915e1910d38b92684d5a7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53656d616e746963253230554925323052656163742d2532333335424442322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53656d616e74696355495265616374266c6f676f436f6c6f723d7768697465"
              alt="Semantic UI React"
              className="badge fourth-animation"
            />
            </LazyLoad>
            <LazyLoad height={40} offset={100} >
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

export default HaikuPage;
