(this.webpackJsonpmaxzel=this.webpackJsonpmaxzel||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},38:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){},59:function(e,t,i){},65:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),c=i(10),r=i.n(c),a=(i(34),i(18)),o=i(19),l=i(28),j=i(27),h=i(5),d=i(2),b=(i(35),i(20)),u=i.n(b),O=(i(36),i(0));i(38);function x(){-1!==navigator.userAgent.toLowerCase().indexOf("safari")?function(e,t,i){var s=e.getBoundingClientRect().top/1,n=0;for(;n<=t;)window.setTimeout(m,n,s,i),n+=t/1}(document.body,5e3,"top"):(document.body.scrollTop=0,document.documentElement.scrollTop=0)}function m(e,t){"center"!==t&&""!==t||window.scrollBy(0,e/2),"top"===t&&window.scrollBy(0,e)}function f(){return Object(O.jsx)("div",{className:"Styleguide",children:Object(O.jsx)("div",{onClick:function(){return x()},children:Object(O.jsx)("img",{src:"/152/assets/icon_up_green.svg",className:"topbutton",alt:"top"})})})}var g=i(29),p=function(e){var t=Object(s.useRef)(null),i=Object(s.useCallback)((function(){n(!0)}),[]),n=function(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="#ffffff",e.beginPath(),e.arc(50,100,20*Math.pow(Math.sin(.05*t),2),0,2*Math.PI),e.font="20px Roboto",e.fillText("I`m Canvas",100,100),e.fill()};return Object(s.useEffect)((function(){var e,i=t.current.getContext("2d"),s=0;return function t(){s++,n(i,s),e=window.requestAnimationFrame(t)}(),function(){window.cancelAnimationFrame(e)}}),[i]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Canvas"}),Object(O.jsx)("canvas",Object(g.a)({ref:t},e))]})},v=i(7),y=i(21),w=function(){var e=Object(s.useRef)(),t=Object(s.useState)(null),i=Object(v.a)(t,2),n=i[0],c=i[1];return Object(s.useEffect)((function(){c(e.current.getTotalLength())}),[n]),Object(O.jsxs)("div",{className:"svgAni",children:[Object(O.jsx)("h3",{children:"SVG Animation"}),n?Object(O.jsx)(y.Spring,{from:{x:n},to:{x:0},config:{tension:4,friction:.5,precision:.1},children:function(t){return Object(O.jsx)("svg",{children:Object(O.jsx)("circle",{strokeDashoffset:t.x,strokeDasharray:n,strokeWidth:"3",cx:"100",cy:"50",r:"40",stroke:"white",fill:"none",ref:e})})}}):Object(O.jsx)("svg",{children:Object(O.jsx)("circle",{strokeWidth:"3",cx:"100",cy:"50",r:"40",stroke:"none",fill:"none",ref:e})})]})},A="/152/assets/formats/images/amabie",N="/152/assets/formats/videos/soap_in_the_eye",S="/152/assets/formats/audios/Row_Row_Fight_the_Power";function I(){return f()}i(56);function T(){return f()}i(57);function k(){return f()}var C=i(22),E=(i(59),["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]);function R(){return function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),i=t[0],n=t[1],c=Object(s.useState)(""),r=Object(v.a)(c,2),a=r[0],o=r[1];return Object(s.useEffect)((function(){n(E)}),[]),Object(O.jsxs)("div",{className:"ani",children:[Object(O.jsx)("h3",{children:"Choose you favorite Country"}),Object(O.jsx)(C.Hint,{options:i,allowTabFill:!0,children:Object(O.jsx)("input",{className:"input-hint",value:a,onChange:function(e){o(e.target.value)}})})]})}()}function P(e){console.log("tab: ".concat(e))}var L=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(O.jsx)(h.a,{basename:"/",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(u.a,{location:"bottom",buttonText:"OK",cookieName:"Cookie",style:{background:"#2B373B"},buttonStyle:{width:"100px",color:"#4e503b",fontSize:"13px"},expires:150,children:"This website uses cookies to enhance the user experience."}),Object(O.jsxs)("div",{className:"Main",children:[Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(){return P("home")},children:Object(O.jsx)(h.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{onClick:function(){return P("impressum")},children:Object(O.jsx)(h.b,{to:"/impressum",children:"Impressum"})}),Object(O.jsx)("li",{onClick:function(){return P("styleguide")},children:Object(O.jsx)(h.b,{to:"/styleguide",children:"Styleguide"})}),Object(O.jsx)("li",{onClick:function(){return P("gallery")},children:Object(O.jsx)(h.b,{to:"/gallery",children:"Gallery"})}),Object(O.jsx)("li",{onClick:function(){return P("formats")},children:Object(O.jsx)(h.b,{to:"/formats",children:"Media Formats"})}),Object(O.jsx)("li",{onClick:function(){return P("copyrights")},children:Object(O.jsx)(h.b,{to:"/copyrights",children:"Copyrights"})}),Object(O.jsx)("li",{onClick:function(){return P("dsgvo")},children:Object(O.jsx)(h.b,{to:"/dsgvo",children:"DSGVO"})})]})}),Object(O.jsx)(d.a,{exact:!0,path:"/",component:M}),Object(O.jsx)(d.a,{path:"/impressum",component:B}),Object(O.jsx)(d.a,{path:"/styleguide",component:V}),Object(O.jsx)(d.a,{path:"/gallery",component:G}),Object(O.jsx)(d.a,{path:"/formats",component:D}),Object(O.jsx)(d.a,{path:"/copyrights",component:F}),Object(O.jsx)(d.a,{path:"/dsgvo",component:H})]})]})})}}]),i}(s.Component),M=function(){return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)("h2",{children:"Home"}),Object(O.jsx)("div",{className:"Title",children:"MaxZel Webseite"}),Object(O.jsx)(R,{})]})},B=function(){return Object(O.jsxs)("div",{className:"impressum",children:[Object(O.jsx)("h2",{children:"Impressum"}),Object(O.jsx)("p",{children:"If you have any questions about the site, please contact Maxim Zelensky at the contact information below."}),Object(O.jsx)("p",{children:"Wenn Sie Fragen zur Website haben, wenden Sie sich bitte an Maxim Zelensky \xfcber die unten stehenden Kontaktangaben."}),Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"title",children:"\ud83d\udc64"}),Object(O.jsx)("th",{children:"Maxim Zelensky"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"title",children:"\u2302"}),Object(O.jsx)("th",{children:"Sennweidstrasse 1b, 8608 Bubikon"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"title",children:"\ud83d\udce7"}),Object(O.jsx)("th",{children:"maxim.zelensky@soxes.ch"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"title",children:Object(O.jsx)("img",{height:"20px",src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFLUlEQVR4Xu2bf0xVZRjHv+/ldygQKqABQZPJBb1EtEVlCLYkqEG16WatmomBzWFmS7PlSleatQQnE5N+LWsqNRcSNFDEX8lW4g9EAQMUQrgFF4ELXPBy3vYeh7nL9Zz3sjbOuZz3v7P7Pe99ns95z/O8P85DYNP0WcVzKYQVRMBTlCAUgLetRmXX/YSihepQTqDbczn/2Yt32k9GL6IXH3C3+ntuJ0AWAJ3KnOQ1V6BAvqvJsqa2cMkwu0kEwJwf8fcsBbCQtyeV6ypcTJYUBkEEMCezKI8Ab6jcKQfNp3l1u9NXEfGdp8J5Jx72dwMjEKKLIZFZRbmgyHYQn1PICUgu0b9edIkS6Hk88vZ0xSx/L+gIQXv3IHoHbvLcplgNobhMIjOLzHKpLjxwCtYvjsbjUTPgoruVOARKceaKCR8XXkRda69inZQxzMwAUCnRc4+GYNNLBri52s+MIwLFlgO1+L6yWZUQJAGEBXrj4HsL4OnuIuncTauAJVtPoO4v9Y0ESQDbV8Th6bhZXE+27Gw7Vu/+g0urJJEkgFOfJsN/qjuXvR3dg0h69zCXVkkiSQDVuanw8pAe/qPOsKAYs6oE1hFBSf7J2iIJYP+6+TCE3yvbCRM0dZjxzAdHubRKEkkCWPu8HhnJs7ns3Xf8Gj784QKXVkkiSQBs4lO0MVGc/Ei1v3ssSNtUiZ5+9U2MZOcB+hBffLb8ITwQNMUug2ajGeu+PouaqzeU9GC5bZEFwHpyd9Xh5YXhSDIE4b5pXmCL6utdA6isMeK7imYMW9UV+O6kwwWAG6cKhRoAubWACh+qQyarYgSwtUh0qC8C/Dzh4+WG/iEruvqGcdVoRrtp0CGHbcWSAB6OmIYXE8O4/mBvRTOqG01jtFkpEdCH+nL1YbuWmBfmh8yUCCTOC7y9DLftiGWhivNGfHO4EZ29Q1z/wx0E0x4JxifLYrk6ffvLavzye9sY7Z7seMyPmsHVhz7rkKhj648tr8YiYW4A131MNDg0gq/KG7GrpAFsic7bJEfARAAInn4PCrLjcX/A+I4jjtUY8VZBNQaGrFwMFAUgfu2v4v7DTJmZp5xnVfWdWJ5TJe5ayTVFATh6wYgkQ6CczVy/5/5ch/zSK7JaRQGQtdYBAYsDye9XoK1rQPIupwXAvP72SBO2FtZOXgBmixVPvFMGy/DIXSEocgSw4bv/+DWUn2vHn9f7ROPnBPtg6YIwPBkT5MCLACzLOY2quk71ADD1DeO1nNOob7O/w8wmRm+mR3JD2Flcj7ziBnUAYE9+6baTsnsLP25IEKfGPO3UpX+QsaNKHQAKT7Zg4152TivdXngsBB+98qCcTPy9oa0X6ZuPqQMAe/rnmrplHfNw06F6R6p4RinXjDcsSFxfrg4AcatLuaewJ7YtwnQfDzn/xQwQm12iDgBRKw+BY/YqOvPThgREccaB0UWWPQqKSoNShtoazxZM7LSapzklgPEss51qBGgAxrHRoo0AOwRUGwS1V0B7BRzfbNVigBYDxhLQgqDU2eBEnAvwTG2ZRssCWhbQsoDDZ45aGtTSoINp0BDmh7T4YK7AfPC3VtS29IzRsr382TOncvWxeV8Nl46J/q9+VfGFCDeVcQi5CibG0a9abjE7VDKjFq947bxVMjPpi6YmcdmcToBBK5xk78tkK52lwBFXkyX1dunsfxA8PgfISieuIhUAusubdqw580Wm+G3/mNNFVkoLSjNA6SJKEALA/nfyvKF24nVmQtEKQspASIFt+fy/VnI5hxahcpUAAAAASUVORK5CYII=",alt:"Linkedin"})}),Object(O.jsx)("th",{children:"www.linkedin.com/in/maxim-zelensky-66693a176/"})]})]})})]})},V=function(){return Object(O.jsx)("div",{className:"Styleguide",children:Object(O.jsx)("h1",{children:"Picture"})})},G=function(){return Object(O.jsxs)("div",{className:"Gallery",children:[Object(O.jsx)("h1",{children:"Formats Gallery"}),Object(O.jsxs)("div",{className:"videos",children:[Object(O.jsx)("h2",{children:"Videos"}),Object(O.jsx)("video",{autoPlay:!0,loop:!0,src:N+".mkv",type:"video/mkv",title:"mkv"}),Object(O.jsx)("video",{autoPlay:!0,loop:!0,src:N+".mov",type:"video/mov",title:"mov"}),Object(O.jsx)("video",{autoPlay:!0,loop:!0,src:N+".mp4",type:"video/mp4",title:"mp4"}),Object(O.jsx)("video",{autoPlay:!0,loop:!0,src:N+".ogv",type:"video/ogv",title:"ogv"}),Object(O.jsx)("video",{autoPlay:!0,loop:!0,src:N+".webm",type:"video/webm",title:"webm"})]}),Object(O.jsxs)("div",{className:"pictures",children:[Object(O.jsx)("h2",{children:"Images"}),Object(O.jsx)("img",{src:A+".bmp",width:"auto",alt:"bmp",title:"bmp"}),Object(O.jsx)("img",{src:A+".gif",alt:"gif",title:"gif"}),Object(O.jsx)("img",{src:A+".ico",alt:"ico",title:"ico"}),Object(O.jsx)("img",{src:A+".jpg",alt:"jpg",title:"jpg"}),Object(O.jsx)("img",{src:A+".png",alt:"png",title:"png"}),Object(O.jsx)("img",{src:A+".svg",alt:"svg",title:"svg"}),Object(O.jsx)("img",{src:A+".webp",alt:"webp",title:"webp"})]}),Object(O.jsxs)("div",{className:"audios",children:[Object(O.jsx)("h2",{children:"Audios"}),Object(O.jsx)("audio",{autoPlay:!0,controls:!0,src:S+".aac",title:"aac"}),Object(O.jsx)("audio",{autoPlay:!0,controls:!0,src:S+".flac",title:"flac"}),Object(O.jsx)("audio",{autoPlay:!0,controls:!0,src:S+".mp3",title:"mp3"}),Object(O.jsx)("audio",{autoPlay:!0,controls:!0,src:S+".ogg",title:"ogg"})]}),Object(O.jsx)(p,{className:"point"}),Object(O.jsx)(w,{}),Object(O.jsx)(I,{})]})},D=function(){return Object(O.jsxs)("div",{className:"formats",children:[Object(O.jsx)("h1",{children:"Files Formats"}),Object(O.jsx)("h2",{children:"Picture"}),Object(O.jsxs)("div",{className:"picture-format",children:[Object(O.jsx)("h3",{children:"JPEG"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Default format for publishing photos and images with text on the Internet."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"TrueColor-format"}),Object(O.jsx)("li",{children:"Flexible data compression capability"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Lossy compression"})})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"picture-format",children:[Object(O.jsx)("h3",{children:"PNG"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Transparency support"}),Object(O.jsx)("li",{children:"Losslessly compresses data"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Can`t store multiple images in one file"}),Object(O.jsx)("li",{children:"Ill-suited for working with full-color images;"})]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"picture-format",children:[Object(O.jsx)("h3",{children:"TIFF"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Is a high-quality format used to store images with a large color depth."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"High quality"}),Object(O.jsx)("li",{children:"Will not lose quality after each save of the file"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Heavyweight files"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Video"}),Object(O.jsxs)("div",{className:"video-format",children:[Object(O.jsx)("h3",{children:"MP4"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Used to package digital video and audio streams, subtitles, posters, and metadata as defined by the MPEG team."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Suitable for video streaming over the internet"}),Object(O.jsx)("li",{children:"Good support"}),Object(O.jsx)("li",{children:"Less loss of quality with higher degree of compression"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Not easy to edit or update"})})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"video-format",children:[Object(O.jsx)("h3",{children:"WEBM"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"It is primarily intended to offer a royalty-free alternative to use in the HTML5 video and the HTML5 audio elements."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Good support"}),Object(O.jsx)("li",{children:"Open Source"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Less media players support WebM video or need to install components or plug-ins."})})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"video-format",children:[Object(O.jsx)("h3",{children:"AVI"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Contain video and audio data compressed using different combinations of codecs, which allows synchronous playback of video and audio."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"To store DVD\u2019s and Disk\u2019s you can easily create them into AVI file format"}),Object(O.jsx)("li",{children:"It does not require a specific hardware device or software application for the file to run"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Compressing AVI files beyond a certain degree can result in bad quality or loss of quality of the video"}),Object(O.jsx)("li",{children:"AVI files can be very large file formats if you do not compress them"})]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"video-format",children:[Object(O.jsx)("h3",{children:"MKV"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Aims to create an open, flexible and cross-platform (including hardware platforms) multimedia container format and a set of tools and libraries for working with data in this format."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Can include an unlimited number of video, audio and subtitle tracks in one file."}),Object(O.jsx)("li",{children:"Lossy or Lossless option"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Larger file size than AVI"}),Object(O.jsx)("li",{children:"Unpopular"})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Audio"}),Object(O.jsxs)("div",{className:"audio-format",children:[Object(O.jsx)("h3",{children:"MP3"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Is widely used in file sharing networks for rating music downloads."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Reduced file size"}),Object(O.jsx)("li",{children:"Possiblity to choose the level of audio quality and corresponding file size during compression by choosing the preferred bit rate"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Lossy compression"}),Object(O.jsx)("li",{children:"Often comes compression artifacts"})]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"audio-format",children:[Object(O.jsx)("h3",{children:"DSD"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Hi-Fi quality"}),Object(O.jsx)("li",{children:"Noise immunity"})]}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Heavyweight files"})})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"audio-format",children:[Object(O.jsx)("h3",{children:"WAV"}),Object(O.jsx)("h4",{children:"Verwendung"}),Object(O.jsx)("p",{children:"Used to store a recording of a digitized audio stream, is used to store uncompressed audio."}),Object(O.jsx)("h4",{children:"Advantages"}),Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:"Lossless quality"})}),Object(O.jsx)("h4",{children:"Disadvantages"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Heavyweight files"}),Object(O.jsx)("li",{children:"Maximum 4GB size"})]})]}),Object(O.jsx)(T,{})]})},F=function(){return Object(O.jsxs)("div",{className:"copyrights",children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("a",{href:"https://maxzell.github.io/152/",target:"_blank",rel:"noreferrer",children:"MaxZell"})," Source References"]}),Object(O.jsx)("p",{children:"All image and video rights belong to me, Maxim Zelensky."}),Object(O.jsx)("h3",{children:"Videos"}),Object(O.jsx)("a",{href:"https://youtu.be/bocIxDHTu9U",target:"_blank",rel:"noreferrer",children:"video source"}),Object(O.jsx)("h3",{children:"Images"}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"https://www.instagram.com/p/B_nUQelgtUZ/?utm_source=ig_web_button_share_sheet",target:"_blank",rel:"noreferrer",children:"amabie image source"})}),Object(O.jsx)("a",{href:"https://progerpadawan.github.io/images/logo.png",target:"_blank",rel:"noreferrer",children:"icon source"}),Object(O.jsx)("h3",{children:"Audios"}),Object(O.jsx)("p",{children:'All rights to the song "row row fight the power" belong to their owners.'}),Object(O.jsx)("a",{href:"https://youtu.be/0V7aUT13qtM",target:"_blank",rel:"noreferrer",children:"music source"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Copyrights Types"}),Object(O.jsxs)("div",{className:"copyright",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("a",{href:"https://www.gnu.org/licenses/gpl-3.0.html",target:"_blank",rel:"noreferrer",children:"GNU license"})}),Object(O.jsx)("p",{children:'The GPL gives recipients of computer software the following rights, or "freedoms:'}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"freedom to run the program for any purpose;"}),Object(O.jsx)("li",{children:"freedom to study how the program works and to modify it (the precondition for this is access to the source code);"}),Object(O.jsx)("li",{children:"freedom to distribute copies of both the source code and the executable code;"}),Object(O.jsx)("li",{children:"freedom to improve the program and to release improvements to the public (the precondition for this is access to the source code)."})]}),Object(O.jsx)("p",{children:"In general, the distributor of a GPL-covered program or a program based on the GPL must make it possible for the recipient to obtain the corresponding source code."})]}),Object(O.jsxs)("div",{className:"copyright",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("a",{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"noreferrer",children:"MIT license"})}),Object(O.jsx)("p",{children:'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'}),Object(O.jsx)("p",{children:"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}),Object(O.jsx)("p",{children:'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'})]}),Object(O.jsxs)("div",{className:"copyright",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("a",{href:"https://www.apache.org/licenses/",target:"_blank",rel:"noreferrer",children:"Apache"})}),Object(O.jsx)("p",{children:"The Apache license gives the user the right to use the software for any purpose and to freely modify and redistribute modified copies, except for the name. This license does not condition the software's distribution license on its continued existence, not even on its free and open status. The only condition imposed by the Apache license is that the recipient must be informed of the use of the source code. Thus, in contrast to copyleft licenses, the recipient of a modified version does not necessarily receive all the rights originally granted by the Apache license. When distributing the software, the following files should be placed in the root directory:"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"LICENSE - a file containing a copy of the Apache license text."}),Object(O.jsx)("li",{children:"NOTICE is a text file listing all the libraries."})]}),Object(O.jsx)("p",{children:"Licensed under the Apache license, along with the names of their creators. Each licensed file must retain all the original copyright or patent information, and each modified file must include information about the changes made."})]}),Object(O.jsxs)("div",{className:"copyright",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("a",{href:"https://creativecommons.org/",target:"_blank",rel:"noreferrer",children:"creative commons"})}),Object(O.jsx)("p",{children:"Each license:"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Preserves the copyright of the author of the work."}),Object(O.jsx)("li",{children:"Informs that fair use by others, first sale, and free expression rights are not affected by this license."})]}),Object(O.jsx)("p",{children:"Each license requires users of the work to:"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Obtain the author's permission for any of the things the author chooses to Limit - e.g., commercial use, creation of a derivative work."}),Object(O.jsx)("li",{children:"Keep any copyright notice intact on all copies of the work."}),Object(O.jsx)("li",{children:"Put a link to the license from copies of the work."}),Object(O.jsx)("li",{children:"Do not modify the terms of the license."}),Object(O.jsx)("li",{children:"Do not use technology to restrict other licensees from lawful uses of the work."})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{children:"Copyright vs license"}),Object(O.jsx)("div",{className:"copyright",children:Object(O.jsx)("p",{children:"Copyright vs license"})}),Object(O.jsx)(k,{})]})},H=function(){return Object(O.jsxs)("div",{className:"dsgvo",children:[Object(O.jsx)("h2",{children:"DSGVO"}),Object(O.jsx)("iframe",{title:"dsgvo",src:"https://www.e-recht24.de/artikel/datenschutz/8451-hinweispflicht-fuer-cookies.html",width:"540",height:"450"})]})},U=L,z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,66)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(O.jsxs)(n.a.StrictMode,{children:[Object(O.jsx)(U,{}),Object(O.jsxs)("footer",{children:[" ",Object(O.jsx)("small",{children:"\xa9 Copyright 2021, Maxim Zelensky"})," "]})]}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.e88368a5.chunk.js.map