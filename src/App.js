import './styles/App.css';

import CookieConsent from "react-cookie-consent";
import { createImpressum } from "./Impressum";
import { createCopyrights } from "./Copyrights";
import { createIFrame } from "./DSGVO";
import { createStyleguide } from "./Styleguide";
import { createGallery } from "./formatsGallery";
import { createCssAnimation } from "./cssAnimation";
import { createMultigifs } from "./multiGifs";
import { createVideoAudio } from "./videoAudio";
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

function CSSAnimation() {
  return createCssAnimation();
}

function Multigifs() {
  return createMultigifs();
}

function VideoAudio() {
  return createVideoAudio();
}

function PictureFormats() {
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
                  <Link to="/">Home</Link>
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
                <li onClick={() => setActive('cssanimation')}>
                  <Link to="/cssAnimation">CSS Animation</Link>
                </li>
                <li onClick={() => setActive('multigifs')}>
                  <Link to="/multigifs">Multi-Gifs</Link>
                </li>
                <li onClick={() => setActive('video-audio')}>
                  <Link to="/video-audio">Video & Audio</Link>
                </li>
                <li onClick={() => setActive('picture-formats')}>
                  <Link to="/picture-formats">Picture Formats</Link>
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
              <Route path={process.env.PUBLIC_URL + '/impressum'}>
                <Impressum />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/styleguide'}>
                <Styleguide />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/gallery'}>
                <MediaGallery />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/cssAnimation'}>
                <CSSAnimation />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/multigifs'}>
                <Multigifs />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/video-audio'}>
                <VideoAudio />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/picture-formats'}>
                <PictureFormats />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/copyrights'}>
                <Copyrights />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/dsgvo'}>
                <DSGVO />
              </Route>
              <Route path={process.env.PUBLIC_URL + '/'} path="/">
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
