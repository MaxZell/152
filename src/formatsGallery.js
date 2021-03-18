import './styles/formatsGallery.css'

import {drawTopButton} from './topButton'
import Canvas from './Canvas'
import Animation from './svgAni'

const imagesUrl = process.env.PUBLIC_URL + '/assets/formats/images/amabie';
const videosUrl = process.env.PUBLIC_URL + '/assets/formats/videos/soap_in_the_eye';
const audiosUrl = process.env.PUBLIC_URL + '/assets/formats/audios/Row_Row_Fight_the_Power';  

function Button(){
    return drawTopButton();
}

export function createGallery(){ 
    return (
        <div className="Gallery">
            <h1>Formats Gallery</h1>
            <div className="videos">
                <h2>Videos</h2>
                <video autoPlay loop src={videosUrl + ".mkv"} type="video/mkv" title="mkv" />
                <video autoPlay loop src={videosUrl + ".mov"} type="video/mov" title="mov" />
                <video autoPlay loop src={videosUrl + ".mp4"} type="video/mp4" title="mp4" />
                <video autoPlay loop src={videosUrl + ".ogv"} type="video/ogv" title="ogv" />
                <video autoPlay loop src={videosUrl + ".webm"} type="video/webm" title="webm" />
            </div>
            <div className="pictures">
                <h2>Images</h2>
                <img src={imagesUrl + ".bmp"} width="auto" alt="bmp" title="bmp" />
                <img src={imagesUrl + ".gif"} alt="gif" title="gif" />
                <img src={imagesUrl + ".ico"} alt="ico" title="ico" />
                <img src={imagesUrl + ".jpg"} alt="jpg" title="jpg" />
                <img src={imagesUrl + ".png"} alt="png" title="png" />
                <img src={imagesUrl + ".svg"} alt="svg" title="svg" />
                <img src={imagesUrl + ".webp"} alt="webp" title="webp" />
            </div>
            <div className="audios">
                <h2>Audios</h2>
                <audio autoPlay controls src={audiosUrl + ".aac"} title="aac" />
                <audio autoPlay controls src={audiosUrl + ".flac"} title="flac" />
                <audio autoPlay controls src={audiosUrl + ".mp3"} title="mp3" />
                <audio autoPlay controls src={audiosUrl + ".ogg"} title="ogg" />
            </div>
            <Canvas className="point" />
            <Animation />
            <Button />
        </div>
    );
}