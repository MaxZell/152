import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import './styles/App.css';

import CookieConsent from "react-cookie-consent";
import { createImpressum } from "./Impressum";
import { createStyleguide } from "./Styleguide";
import { createGallery } from "./formatsGallery";
import { createFormats } from "./Formats";
import { createCopyrights } from "./Copyrights";
import { createTestcase } from "./Testcases";
import { createReflection } from "./Reflection";
import { createIFrame } from "./DSGVO";
import { createHome } from "./Home";

function setActive(name) {
  console.log(`tab: ${name}`);
}

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <CookieConsent
            location="bottom"
            buttonText="OK"
            cookieName="Cookie"
            style={{ background: "#2B373B" }}
            buttonStyle={{ width: "100px", color: "#4e503b", fontSize: "13px"}}
            expires={150}
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
          <div className="Main">
            <nav>
                <ul>
                  <li onClick={() => setActive('home')}><Link to="/">Home</Link></li>
                  <li onClick={() => setActive('impressum')}><Link to="/impressum">Impressum</Link></li>
                  <li onClick={() => setActive('styleguide')}><Link to="/styleguide">Styleguide</Link></li>
                  <li onClick={() => setActive('gallery')}><Link to="/gallery">Gallery</Link></li>
                  <li onClick={() => setActive('formats')}><Link to="/formats">Media Formats</Link></li>
                  <li onClick={() => setActive('testcases')}><Link to="/testcases">Testcases</Link></li>
                  <li onClick={() => setActive('reflection')}><Link to="/reflection">Reflection</Link></li>
                  <li onClick={() => setActive('copyrights')}><Link to="/copyrights">Copyrights</Link></li>
                  <li onClick={() => setActive('dsgvo')}><Link to="/dsgvo">DSGVO</Link></li>
                </ul>
              </nav>
    
            <Route exact path="/" component={Home} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/styleguide" component={Styleguide} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/formats" component={Formats} />
            <Route path="/testcases" component={Testcases} />
            <Route path="/reflection" component={Reflection} />
            <Route path="/copyrights" component={Copyrights} />
            <Route path="/dsgvo" component={Dsgvo} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

const Home = () => createHome();
const Impressum = () => createImpressum();
const Styleguide = () => createStyleguide();
const Gallery = () => createGallery();
const Formats = () => createFormats();
const Testcases = () => createTestcase();
const Reflection = () => createReflection();
const Copyrights= () => createCopyrights();
const Dsgvo= () => createIFrame();

export default App;