import './styles/Formats.css';

import {drawTopButton} from './topButton';

function Button(){
    return drawTopButton();
}

export function createFormats(){
    return (
        <div className="formats">
            <h1>Files Formats</h1>
            <h2>Picture</h2>
            <div className="picture-format">
                <h3>JPEG</h3>
                <h4>Verwendung</h4>
                <p>Default format for publishing photos and images with text on the Internet.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>TrueColor-format</li>
                    <li>Flexible data compression capability</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Lossy compression</li>
                </ul>
            </div>
            <br />
            <div className="picture-format">
                <h3>PNG</h3>
                <h4>Verwendung</h4>
                <p></p>
                <h4>Advantages</h4>
                <ul>
                    <li>Transparency support</li>
                    <li>Losslessly compresses data</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Can`t store multiple images in one file</li>
                    <li>Ill-suited for working with full-color images;</li>
                </ul>
            </div>
            <br />
            <div className="picture-format">
                <h3>TIFF</h3>
                <h4>Verwendung</h4>
                <p>Is a high-quality format used to store images with a large color depth.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>High quality</li>
                    <li>Will not lose quality after each save of the file</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Heavyweight files</li>
                </ul>
            </div>
            <br />
            <br />
            <h2>Video</h2>
            <div className="video-format">
                <h3>MP4</h3>
                <h4>Verwendung</h4>
                <p>Used to package digital video and audio streams, subtitles, posters, and metadata as defined by the MPEG team.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>Suitable for video streaming over the internet</li>
                    <li>Good support</li>
                    <li>Less loss of quality with higher degree of compression</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Not easy to edit or update</li>
                </ul>
            </div>
            <br />
            <div className="video-format">
                <h3>WEBM</h3>
                <h4>Verwendung</h4>
                <p>It is primarily intended to offer a royalty-free alternative to use in the HTML5 video and the HTML5 audio elements.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>Good support</li>
                    <li>Open Source</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Less media players support WebM video or need to install components or plug-ins.</li>
                </ul>
            </div>
            <br />
            <div className="video-format">
                <h3>AVI</h3>
                <h4>Verwendung</h4>
                <p>Contain video and audio data compressed using different combinations of codecs, which allows synchronous playback of video and audio.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>To store DVD’s and Disk’s you can easily create them into AVI file format</li>
                    <li>It does not require a specific hardware device or software application for the file to run</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Compressing AVI files beyond a certain degree can result in bad quality or loss of quality of the video</li>
                    <li>AVI files can be very large file formats if you do not compress them</li>
                </ul>
            </div>
            <br />
            <div className="video-format">
                <h3>MKV</h3>
                <h4>Verwendung</h4>
                <p>Aims to create an open, flexible and cross-platform (including hardware platforms) multimedia container format and a set of tools and libraries for working with data in this format.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>Can include an unlimited number of video, audio and subtitle tracks in one file.</li>
                    <li>Lossy or Lossless option</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Larger file size than AVI</li>
                    <li>Unpopular</li>
                </ul>
            </div>
            <br />
            <br />
            <h2>Audio</h2>
            <div className="audio-format">
                <h3>MP3</h3>
                <h4>Verwendung</h4>
                <p>Is widely used in file sharing networks for rating music downloads.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>Reduced file size</li>
                    <li>Possiblity to choose the level of audio quality and corresponding file size during compression by choosing the preferred bit rate</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Lossy compression</li>
                    <li>Often comes compression artifacts</li>
                </ul>
            </div>
            <br />
            <div className="audio-format">
                <h3>DSD</h3>
                <h4>Verwendung</h4>
                <p></p>
                <h4>Advantages</h4>
                <ul>
                    <li>Hi-Fi quality</li>
                    <li>Noise immunity</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Heavyweight files</li>
                </ul>
            </div>
            <br />
            <div className="audio-format">
                <h3>WAV</h3>
                <h4>Verwendung</h4>
                <p>Used to store a recording of a digitized audio stream, is used to store uncompressed audio.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>Lossless quality</li>
                </ul>
                <h4>Disadvantages</h4>
                <ul>
                    <li>Heavyweight files</li>
                    <li>Maximum 4GB size</li>
                </ul>
            </div>
            <Button />
        </div>
    );
}