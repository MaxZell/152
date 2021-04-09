import './styles/formatsGallery.css'

import {drawTopButton} from './topButton'
import {createSlideshow} from './Slideshow'
import Canvas from './Canvas'
import Animation from './svgAni'

const imagesFormatsUrl = process.env.PUBLIC_URL + '/assets/formats/images/amabie';
const videosUrl = process.env.PUBLIC_URL + '/assets/formats/videos/soap_in_the_eye';
const audiosUrl = process.env.PUBLIC_URL + '/assets/formats/audios/Row_Row_Fight_the_Power';
// const imagesUrl = process.env.PUBLIC_URL + '/assets/images/';
// const imagesThumbnailsUrl = process.env.PUBLIC_URL + '/assets/images/thumbnails/';

function Button(){
    return drawTopButton();
}

function Slideshow(){
    return createSlideshow();
}

export function createGallery(){ 
    return (
        <div className="Gallery">
            <h1>Photo Gallery</h1>
            {/* <div className="photos">
                <img src={imagesUrl + "1.jpg"} className="thumbnails" alt="#1" title="#1" />
                <img src={imagesThumbnailsUrl + "1_tn.jpg"} className="thumbnails" alt="#1" title="#1" />
                <img src={imagesThumbnailsUrl + "2_tn.jpg"} className="thumbnails" alt="#2" title="#2" />
                <img src={imagesThumbnailsUrl + "3_tn.jpg"} className="thumbnails" alt="#3" title="#3" />
                <img src={imagesThumbnailsUrl + "4_tn.jpg"} className="thumbnails" alt="#4" title="#4" />
                <img src={imagesThumbnailsUrl + "5_tn.jpg"} className="thumbnails" alt="#5" title="#5" />
                <img src={imagesThumbnailsUrl + "6_tn.jpg"} className="thumbnails" alt="#6" title="#6" />
                <img src={imagesThumbnailsUrl + "7_tn.jpg"} className="thumbnails" alt="#7" title="#7" />
                <img src={imagesThumbnailsUrl + "8_tn.jpg"} className="thumbnails" alt="#8" title="#8" />
                <img src={imagesThumbnailsUrl + "9_tn.jpg"} className="thumbnails" alt="#9" title="#9" />
                <img src={imagesThumbnailsUrl + "10_tn.jpg"} className="thumbnails" alt="#10" title="#10" />
                <img src={imagesThumbnailsUrl + "11_tn.jpg"} className="thumbnails" alt="#11" title="#11" />
                <img src={imagesThumbnailsUrl + "12_tn.jpg"} className="thumbnails" alt="#12" title="#12" />
                <img src={imagesThumbnailsUrl + "13_tn.jpg"} className="thumbnails" alt="#13" title="#13" />
                <img src={imagesThumbnailsUrl + "14_tn.jpg"} className="thumbnails" alt="14#" title="#14" />
                <img src={imagesThumbnailsUrl + "15_tn.jpg"} className="thumbnails" alt="#15" title="#15" />
            </div> */}
            <Slideshow />
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
                <img src={imagesFormatsUrl + ".bmp"} width="auto" alt="bmp" title="bmp" />
                <img src={imagesFormatsUrl + ".gif"} alt="gif" title="gif" />
                <img src={imagesFormatsUrl + ".ico"} alt="ico" title="ico" />
                <img src={imagesFormatsUrl + ".jpg"} alt="jpg" title="jpg" />
                <img src={imagesFormatsUrl + ".png"} alt="png" title="png" />
                <img src={imagesFormatsUrl + ".svg"} alt="svg" title="svg" />
                <img src={imagesFormatsUrl + ".webp"} alt="webp" title="webp" />
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