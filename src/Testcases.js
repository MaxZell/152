import './styles/Testcases.css';
import {drawTopButton} from './topButton';

const imagesBrowserUrl = process.env.PUBLIC_URL + '/assets/browsers/';
const imagesAutoUrl = process.env.PUBLIC_URL + '/assets/automatisation/';
const imagesLighthouseUrl = process.env.PUBLIC_URL + '/assets/lighthouse/';

function Button(){
    return drawTopButton();
}

export function createTestcase() {

  return (
    <div className="testcases">
        <h1>Storytellng</h1>
        <p>
            I believe that menus can be used as a narrative and attention management method for the user.<br />
            I build a pyramid of menus by the amount of content. <br />
            Home is the beginning, the preface. Media Formats/ Testcases have the most information.<br />
            And DSGVO as an easy completion.
        </p>
        <h1>Responsive design</h1>
        <div className="responsDesign">
            <h2>Desktop</h2>
            <img src={imagesBrowserUrl + "chrome.png"} alt="desktop chrome" title="desktop chrome" />
            <h2>Mobile</h2>
            <img src={imagesBrowserUrl + "safari.jpg"} alt="mobile safari" title="mobile safari" /><br />
            <img src={imagesBrowserUrl + "safari3.jpg"} alt="mobile safari horizontal" title="mobile safari horizontal" />
        </div>
        
        <h1>Test Cases</h1>
        <h2>Desktop & Mobile</h2>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-001</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Test steps</th>
                        <td>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-002</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Test steps</th>
                        <td>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-003</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Test steps</th>
                        <td>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-004</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Browser compatibility</h2>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-005</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>Google Chrome - Windows 10</td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td>
                            <img className="tableImage" src={imagesBrowserUrl + "chrome.png"} alt="desktop chrome" title="desktop chrome" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-006</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>Opera - Windows 10</td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td>
                            <img className="tableImage" src={imagesBrowserUrl + "opera.png"} alt="desktop opera" title="desktop opera" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="testcase">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>T-007</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>Safari - Iphone 6 S</td>
                    </tr>
                    <tr>
                        <th>Expected result</th>
                        <td>
                            <img className="tableImage" src={imagesBrowserUrl + "safari.jpg"} alt="mobile safari" title="mobile safari" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Test date</th>
                        <td>16.04.2021</td>
                    </tr>
                    <tr>
                        <th>Tester</th>
                        <td>Maxim Zelensky</td>
                    </tr>
                    <tr>
                        <th>Deficiency description</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>Everything works</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1>Automatisation</h1>
        <h2>Autocomplete</h2>
        <div className="autocompl">
            <img src={imagesAutoUrl + "autofill.gif"} alt="autofill" title="autofill" />
        </div>
        <h2><a href="https://www.selenium.dev/selenium-ide/" target="_blank" rel="noreferrer">Selenium</a></h2>
        <div className="selenium">
            <img src={imagesAutoUrl + "selenium.png"} alt="selenium IDE" title="selenium IDE" /><br />
            <video controls autoPlay loop src={imagesAutoUrl + "selenium.mp4"} type="video/mp4" title="selenium" />
        </div>

        <h1>Lighthouse</h1>
        <div className="lighthouse">
            <h2>Desktop</h2>
            <img src={imagesLighthouseUrl + "desktop.png"} alt="desktop" title="desktop" /><br />
            <h2>Mobile</h2>
            <img src={imagesLighthouseUrl + "mobile.png"} alt="mobile" title="mobile" />
        </div>

        <Button />
    </div>
  );
}
