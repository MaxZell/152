import './styles/App.css';

import CookieConsent from "react-cookie-consent";
import { createImpressum } from "./Impressum";
import { createCopyrights } from "./Copyrights";
import { createIFrame } from "./DSGVO";
import { createStyleguide } from "./Styleguide";
import { createGallery } from "./formatsGallery";
import { createFormats } from "./Formats";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Home() {
  return(
    <div className="home">
      <h2>Home</h2>
      <div className="Title">MaxZel Webseite</div>
    </div>
  );
}

function Impressum() {
  return createImpressum();
}

function Copyrights() {
  return createCopyrights();
}

function DSGVO() {
  return createIFrame();
}

function Styleguide() {
  return createStyleguide();
}

function MediaGallery() {
  return createGallery();
}

function Formats() {
  return createFormats();
}

function setActive(name) {
  console.log(`tab: ${name}`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
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
        <Router>
          <div>
            <nav>
              <ul>
                <li onClick={() => setActive('home')}>
                  <Link to="/152">Home</Link>
                </li>
                <li onClick={() => setActive('impressum')}>
                  <Link to="/impressum">Impressum</Link>
                </li>
                <li onClick={() => setActive('styleguide')}>
                  <Link to="/styleguide">Styleguide</Link>
                </li>
                <li onClick={() => setActive('gallery')}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li onClick={() => setActive('formats')}>
                  <Link to="/formats">Media Formats</Link>
                </li>
                <li onClick={() => setActive('copyrights')}>
                  <Link to="/copyrights">Copyrights</Link>
                </li>
                <li onClick={() => setActive('dsgvo')}>
                  <Link to="/dsgvo">DSGVO</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/impressum">
                <Impressum />
              </Route>
              <Route path="/styleguide">
                <Styleguide />
              </Route>
              <Route path="/gallery">
                <MediaGallery />
              </Route>
              <Route path="/formats">
                <Formats />
              </Route>
              <Route path="/copyrights">
                <Copyrights />
              </Route>
              <Route path="/dsgvo">
                <DSGVO />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div> 
    </div>
  );
}

export default App;
