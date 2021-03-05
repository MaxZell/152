import './App.css';
import ImageContainer from "./ImageContainer";
import images from "./assets/art.json";

import CookieConsent from "react-cookie-consent";
import { createImpressum } from "./Impressum";
import { createCopyrights } from "./Copyrights";
import { createIFrame } from "./DSGVO";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Home() {
  return( 
    <>
    <h2>Home</h2>
    <div className="Title">MaxZel Webseite</div>
    </>
  );
}

function Impressum() {
  return createImpressum();
}

function Copyrights() {
  // return <h2>Copyrights</h2>;
  return createCopyrights();
}

function DSGVO() {
  return createIFrame();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <title>MaxZel Art Gallery</title> */}
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
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/impressum">Impressum</Link>
                </li>
                <li>
                  <Link to="/copyrights">Copyrights</Link>
                </li>
                <li>
                  <Link to="/dsgvo">DSGVO</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/dsgvo">
                <DSGVO />
              </Route>
              <Route path="/impressum">
                <Impressum />
              </Route>
              <Route path="/copyrights">
                <Copyrights />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        {/* <div className="Title">MaxZel Webseite</div> */}
        <div className="Gallery">
          {images.map(res => {
            return (
              <div key={res.id} className="wrapper">
                <ImageContainer
                  src={res.urls.regular}
                  thumb={res.urls.thumb}
                  height={res.height}
                  width={res.width}
                  alt={res.alt_description}
                />
              </div>
            );
          })}
        </div>
      </div> 
    </div>
  );
}

export default App;
