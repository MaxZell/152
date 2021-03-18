function topButtonFunction() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('safari') !== -1) {
		SmoothVerticalScrolling(document.body, 5000, "top");
	}else {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
}

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 1;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 1;
    }
}

function SVS_B(eAmt, where) {
    if(where === "center" || where === "")
        window.scrollBy(0, eAmt / 2);
    if (where === "top")
        window.scrollBy(0, eAmt);
}

export function drawTopButton(){
    return (
        <div className="Styleguide">
            <div onClick={() => topButtonFunction()}>
                <img src={process.env.PUBLIC_URL + '/assets/icon_up_green.svg'} className="topbutton" alt="top" />
            </div>
        </div>
    );
}