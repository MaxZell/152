import './App.css';
import ImageContainer from "./ImageContainer";
import images from "./assets/art.json";
import CookieConsent from "react-cookie-consent";

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
        <div className="Title">MaxZel Art Gallery</div>
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
