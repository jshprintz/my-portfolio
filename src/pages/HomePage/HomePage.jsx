import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LazyLoad from "react-lazy-load";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <p className="intro-text first-animation">Hi, I'm Jason!</p>
      <div className="intro-text-container">
        <p className="intro-text second-animation">
          I'm a Full Stack Web Developer living in Las Vegas, NV.
        </p>
      </div>
      <br />
      <div className="intro-text-container">
        <p className="intro-text third-animation">Check out my skills:</p>
      </div>
      <br />
      <p className="intro-text-skills fourth-animation">Databases</p>
      <div className="row-badges">
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"
            alt="PostgreSQL"
            className="badge fourth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
            alt="MongoDB"
            className="badge fourth-animation"
          />
        </LazyLoad>
      </div>
      <p className="intro-text-skills fifth-animation">
        Platforms, Frameworks, and Libraries
      </p>
      <div className="row-badges">
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465"
            alt="Bootstrap"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/5473e0d3006bb7e662bdf754d830a026ce050be61f1cbbd4689783ae49950b93/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646a616e676f2d2532333039324532302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646a616e676f266c6f676f436f6c6f723d7768697465"
            alt="Django"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642"
            alt="Express.js"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73"
            alt="JWT"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465"
            alt="NPM"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
            alt="Node.js"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
            alt="React.js"
            className="badge fifth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/21a5ba11b939e86aa450c88ca6eeeb0e2e015f48ca915e1910d38b92684d5a7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53656d616e746963253230554925323052656163742d2532333335424442322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53656d616e74696355495265616374266c6f676f436f6c6f723d7768697465"
            alt="Semantic UI React"
            className="badge fifth-animation"
          />
        </LazyLoad>
      </div>
      <p className="intro-text-skills sixth-animation">Hosting</p>
      <div className="row-badges">
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465"
            alt="Heroku"
            className="badge sixth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/dfb4109b571fbeb03ce2fe6eefb9eb9a3ca63e618e57002cc4b17d784baea807/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65746c6966792d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e65746c696679266c6f676f436f6c6f723d23303043374237"
            alt="Netlify"
            className="badge sixth-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/04b5e0e940eed511e8e86619eeb7cdb264f17292074c06c60127e1796436d57b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726450726573732d2532333131374143392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d576f72645072657373266c6f676f436f6c6f723d7768697465"
            alt="Wordpress"
            className="badge sixth-animation"
          />
        </LazyLoad>
      </div>
      <p className="intro-text-skills seventh-animation">Languages</p>
      <div className="row-badges">
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
            alt="CSS3"
            className="badge seventh-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
            alt="HTML5"
            className="badge seventh-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
            alt="Javascript"
            className="badge seventh-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/a44844ce4d3bf26f4685d5ae0e0fab359cdeca62ad71c675d3d89fd30f418665/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61726b646f776e2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465"
            alt="Markdown"
            className="badge seventh-animation"
          />
        </LazyLoad>
        <LazyLoad height={40} offset={100}>
          <img
            src="https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534"
            alt="Python"
            className="badge seventh-animation"
          />
        </LazyLoad>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
