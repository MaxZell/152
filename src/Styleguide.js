import './styles/Styleguide.css';
import {drawTopButton} from './topButton';

const imagesBrowserUrl = process.env.PUBLIC_URL + '/assets/styleguide/';

function Button(){
    return drawTopButton();
}

export function createStyleguide(){
    return (
        <div className="styleguides">
            <h1>Sitemap</h1>
            <div className="sitemap">
                <img src={imagesBrowserUrl + "sitemap.png"} alt="sitemap" title="sitemap" />
            </div>
            <h1>Styleguide</h1>
            <div className="styleguide">
                
            </div>
            <h1>Wireframes</h1>
            <div className="wireframes">
                <h2>Horizontal</h2>
                <img className="horizontal" src={imagesBrowserUrl + "wireframe_horz.svg"} alt="horizontal" title="horizontal" />
                <h2>Vertical</h2>
                <img className="vertical" src={imagesBrowserUrl + "wireframe_vert.svg"} alt="vertical" title="vertical" />
            </div>
            <h1>Timeplanning</h1>
            <div className="timeplanning">
                <table>
                    <tbody>
                        <tr>
                            <td>05.02.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>26.02.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>05.03.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12.03.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19.03.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>26.03.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>09.04.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16.04.21</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>21.04.21</td>
                            <td></td>
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