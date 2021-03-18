import './styles/Copyrights.css';

import {drawTopButton} from './topButton';

function Button(){
    return drawTopButton();
}

export function createCopyrights() {
    return (
        <div className="copyrights">
            <h2><a href="https://maxzell.github.io/152/" target="_blank" rel="noreferrer">MaxZell</a> Source References</h2>
            <p>All image and video rights belong to me, Maxim Zelensky.</p>{/*add link zu impressum*/}
            <h3>Videos</h3>
            <a href="https://youtu.be/bocIxDHTu9U" target="_blank" rel="noreferrer">video source</a>
            <h3>Images</h3>
            <p><a href="https://www.instagram.com/p/B_nUQelgtUZ/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer">amabie image source</a></p>
            <a href="https://progerpadawan.github.io/images/logo.png" target="_blank" rel="noreferrer">icon source</a>
            <h3>Audios</h3>
            <p>All rights to the song "row row fight the power" belong to their owners.</p>
            <a href="https://youtu.be/0V7aUT13qtM" target="_blank" rel="noreferrer">music source</a>
            <br />
            <br />
            <h2>Copyrights Types</h2>

            <div className="copyright">
                <h3><a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noreferrer">GNU license</a></h3>
                <p>The GPL gives recipients of computer software the following rights, or "freedoms:</p>
                <ul>
                    <li>freedom to run the program for any purpose;</li>
                    <li>freedom to study how the program works and to modify it (the precondition for this is access to the source code);</li>
                    <li>freedom to distribute copies of both the source code and the executable code;</li>
                    <li>freedom to improve the program and to release improvements to the public (the precondition for this is access to the source code).</li>
                </ul>
                <p>In general, the distributor of a GPL-covered program or a program based on the GPL must make it possible for the recipient to obtain the corresponding source code.</p>
            </div>
            <div className="copyright">
                <h3><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT license</a></h3>
                <p>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                </p>
                <p>
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                </p>
                <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                </p>
            </div>
            <div className="copyright">
                <h3><a href="https://www.apache.org/licenses/" target="_blank" rel="noreferrer">Apache</a></h3>
                <p>
                The Apache license gives the user the right to use the software for any purpose and to freely modify and redistribute modified copies, except for the name.
                This license does not condition the software's distribution license on its continued existence, not even on its free and open status. The only condition imposed by the Apache license is that the recipient must be informed of the use of the source code. Thus, in contrast to copyleft licenses, the recipient of a modified version does not necessarily receive all the rights originally granted by the Apache license.
                When distributing the software, the following files should be placed in the root directory:
                </p>
                <ul>
                    <li>LICENSE - a file containing a copy of the Apache license text.</li>
                    <li>NOTICE is a text file listing all the libraries.</li>
                </ul>
                <p>
                Licensed under the Apache license, along with the names of their creators.
                Each licensed file must retain all the original copyright or patent information, and each modified file must include information about the changes made.
                </p>
            </div>
            <div className="copyright">
                <h3><a href="https://creativecommons.org/" target="_blank" rel="noreferrer">creative commons</a></h3>
                <p>Each license:</p>
                    <ul>
                        <li>Preserves the copyright of the author of the work.</li>
                        <li>Informs that fair use by others, first sale, and free expression rights are not affected by this license.</li>
                    </ul>
                    <p>Each license requires users of the work to:</p>
                    <ul>
                        <li>Obtain the author's permission for any of the things the author chooses to Limit - e.g., commercial use, creation of a derivative work.</li>
                        <li>Keep any copyright notice intact on all copies of the work.</li>
                        <li>Put a link to the license from copies of the work.</li>
                        <li>Do not modify the terms of the license.</li>
                        <li>Do not use technology to restrict other licensees from lawful uses of the work.</li>
                    </ul>
            </div>
            <Button />
        </div>
        
    );
}