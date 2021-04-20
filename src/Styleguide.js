import './styles/Styleguide.css';
import {drawTopButton} from './topButton';

const imagesStyleguideUrl = process.env.PUBLIC_URL + '/assets/styleguide/';
const imagesUrl = process.env.PUBLIC_URL;

function Button(){
    return drawTopButton();
}

export function createStyleguide(){
    return (
        <div className="styleguides">
            <h1>Sitemap</h1>
            <div className="sitemap">
                <img src={imagesStyleguideUrl + "sitemap.png"} alt="sitemap" title="sitemap" />
            </div>
            <h1>Styleguide</h1>
            <div className="styleguide">
                <h2>Fonts</h2>
                <div className="fonts">
                    <a href="https://fonts.google.com/specimen/Roboto" target="_blank" rel="noreferrer">Roboto</a>
                </div>
                <h2>Colors</h2>
                <div className="colors">
                    <p>Primary: #282c34</p>
                    <p>Text: #ffe4c4</p>
                    <p>Menu: #000000</p>
                    <p>Footer: #1a1d22</p>
                    <p>Hover: #ff0000</p>
                    <p>Links hover: 808080</p>
                </div>
                <h2>Logos</h2>
                <div className="logos">
                    <img src={imagesUrl + "/logo512.png"} alt="maxzel logo" title="maxzel logo" />
                </div>
                <h2>Icons</h2>
                <div className="icons">
                    <img src={imagesUrl + "/assets/icon_up_green.svg"} alt="top logo" title="top logo" />
                </div>
            </div>
            <h1>Wireframes</h1>
            <div className="wireframes">
                <h2>Horizontal</h2>
                <img className="horizontal" src={imagesStyleguideUrl + "wireframe_horz.svg"} alt="horizontal" title="horizontal" />
                <h2>Vertical</h2>
                <img className="vertical" src={imagesStyleguideUrl + "wireframe_vert.svg"} alt="vertical" title="vertical" />
            </div>
            <h1>Timeplanning</h1>
            <div className="timeplanning">
                <table>
                    <tbody>
                        <tr>
                            <td>05.02.21</td>
                            <td>Teamplate for website. Hosting on github pages.</td>
                        </tr>
                        <tr>
                            <td>26.02.21</td>
                            <td>Design, content and planning.</td>
                        </tr>
                        <tr>
                            <td>05.03.21</td>
                            <td>React & Hosting on <a href="https://github.com/gitname/react-gh-pages" target="_blank" rel="noreferrer">github pages</a>.</td>
                        </tr>
                        <tr>
                            <td>12.03.21</td>
                            <td>Comparison of formats.</td>
                        </tr>
                        <tr>
                            <td>19.03.21</td>
                            <td>Format Gallery.</td>
                        </tr>
                        <tr>
                            <td>26.03.21</td>
                            <td>Copyrights / Copyrights / Testcases</td>
                        </tr>
                        <tr>
                            <td>09.04.21</td>
                            <td>Photo gallery & slideshow.</td>
                        </tr>
                        <tr>
                            <td>16.04.21</td>
                            <td>Criteria check.</td>
                        </tr>
                        <tr>
                            <td>21.04.21</td>
                            <td>Finalization & criteria check.</td>
                        </tr>
                    </tbody>
                </table>  
            </div>
            <h1>Orthography and grammar</h1>
            <div className="grammar">  
                <p>Checked by <a href="https://www.deepl.com/translator" target="_blank" rel="noreferrer">Deepl</a> and <a href="https://languagetool.org/" target="_blank" rel="noreferrer">Languagetool</a></p>
            </div>
            <Button />
        </div>
    );
}