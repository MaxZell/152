import './styles/Reflection.css';
import {drawTopButton} from './topButton';

function Button(){
    return drawTopButton();
}

export function createReflection() {

  return (
    <div className="reflection">
        <h1>Reflection</h1>
        <table>
            <tbody>
                <tr>
                    <td>Criteria #1</td>
                    <td>Design, content and planning. Since usually the client sets the design, but this time I am my own client. So I decided to use colors that are pleasing to my eye, in a warm, dark coloring.</td>
                </tr>
                <tr>
                    <td>Criteria #2</td>
                    <td>Usually I do not pay attention to copywriting, because either I do something for myself and can make pictures/icons myself, or a designer in the company creates all the necessary content for the client.</td>
                </tr>
                <tr>
                    <td>Criteria #3</td>
                    <td>I added more formats than I mentioned in the assignment, but some formats (e.g. ati) are not supported by the browser and had to remove them.</td>
                </tr>
                <tr>
                    <td>Criteria #4</td>
                    <td>I was surprised, it turns out there is no common database of formats Photo / Video / Audio and had to search for scattered sites.</td>
                </tr>
                <tr>
                    <td>Criteria #5</td>
                    <td>That was fun. I had already worked with keyframes, but not with canvas and svg yet, it was instructive.</td>
                </tr>
                <tr>
                    <td>Criteria #6</td>
                    <td>
                        I first misunderstood the task, I thought that you need to write a program that automatically does something (like fill a field) and I made the field with afto fill.<br />
                        But then I specified that I needed to do automation with Selenium, so I did an automated test in the Selenium IDE.<br />
                        I've heard of Selenium before, but I've never used it. I liked it.
                    </td>
                </tr>
                <tr>
                    <td>Criteria #7</td>
                    <td>
                        There was some work to be done here. Lots of tests.<br />
                        But luckily there were no problems when testing the browsers.
                    </td>
                </tr>
                <tr>
                    <td>Criteria #8</td>
                    <td>Reflection I wrote for all 11 criteria from the raster and posted it on this site.</td>
                </tr>
                <tr>
                    <td>Criteria #9</td>
                    <td>
                        It's kind of hard to compare.<br />
                        But I think I've coped with both the creativity and even more so the complexity of the site's execution:<br />
                        I made the site myself from scratch without any teamplates and used it, which requires knowledge and training.
                    </td>
                </tr>
                <tr>
                    <td>Criteria #10</td>
                    <td>Made with css media sceen.</td>
                </tr>
                <tr>
                    <td>Criteria #11</td>
                    <td>
                        I corrected them based on the specifics of the react components.There were no big problems here. Almost all parameters were initially in the green zone, only a couple in the yellow zone.<br />
                        I corrected them based on the specifics of the react components.
                    </td>
                </tr>
            </tbody>
        </table>  
        <Button />
    </div>
  );
}
