(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/audit.4c271142.png"},20:function(e,t,n){e.exports=n.p+"static/media/logo.1eab774a.png"},21:function(e,t,n){e.exports=n.p+"static/media/example-audit.6c2b8147.png"},24:function(e,t,n){e.exports=n.p+"static/media/info.1fc7f4bc.svg"},25:function(e,t,n){e.exports=n.p+"static/media/regexcrossword.e8f3976e.png"},26:function(e,t,n){e.exports=n.p+"static/media/regexpsite.45623e26.png"},269:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/portrait-css.5ce215e3.png"},271:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),i=n(274),s=n(276),c=n(275),l=(n(43),n(44),n(2)),u=n(3),p=n(6),m=n(4),h=n(5),d=(n(45),function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(p.a)(this,Object(m.a)(t).call(this,e)),e.context&&e.context.name&&(document.title=e.context.name),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.location.hash=window.decodeURIComponent(window.location.hash);var e=function(){var e=window.location.hash.split("#");if(e.length>2){var t=e.slice(-1)[0];document.querySelector('[name="'.concat(t,'"]')).scrollIntoView()}};e(),window.onhashchange=e}},{key:"render",value:function(){var e=this.props.context||{},t=e.type,n=e.keywords,a=e.name;return console.log(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"document"},!t&&o.a.createElement(O,{text:a}),this.props.content,o.a.createElement(j,{keywords:n})))}}]),t}(a.Component)),f=n(273),g=(n(46),function(e){return e.toLowerCase().split(" ").join("-")});function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}var v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={svgIconVisible:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onSubtitleClick",value:function(e){}},{key:"setClassName",value:function(){return"subtitle subtitle_size_"+(this.props.size||"m")}},{key:"onSubtitleMouseEnter",value:function(){this.setState({svgIconVisible:!0})}},{key:"onSubtitleMouseLeave",value:function(){this.setState({svgIconVisible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:this.setClassName()},o.a.createElement("h2",{onMouseEnter:this.onSubtitleMouseEnter.bind(this),onMouseLeave:this.onSubtitleMouseLeave.bind(this)},o.a.createElement(f.a,{to:"#".concat(g(this.props.text)),className:"subtitle__anchor",name:g(this.props.text)},this.props.text)),this.state.svgIconVisible&&o.a.createElement("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",width:"16"},o.a.createElement("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))}}]),t}(a.Component),y=n(9),w=(n(49),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={isShowed:n.props.opened||!1},n.onClick=n.onClick.bind(Object(y.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onClick",value:function(){this.setState({isShowed:!this.state.isShowed})}},{key:"render",value:function(){var e=this.props.showedContent,t=b(this.props.clickedYes||"\u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c"),n=b(this.props.clickedNo||"\u0441\u0432\u0435\u0440\u043d\u0443\u0442\u044c");return e?o.a.createElement("div",{className:"accordion"},o.a.createElement("div",{className:"accordion__clicked",onClick:this.onClick},this.state.isShowed?n:t),this.state.isShowed&&o.a.createElement("div",{className:"accordion__showed"},e)):""}}]),t}(a.Component)),k=(n(50),0),E=function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){k++,this._randomId="checkbox__item_".concat(k)}},{key:"getRandomNumber",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}},{key:"render",value:function(){var e=this.props.text,t=this.props.checked;return e?o.a.createElement("div",{className:"checkbox"},o.a.createElement("input",{type:"checkbox",className:"checkbox__input",id:this._randomId,onChange:this.props.onInput,checked:t}),o.a.createElement("label",{htmlFor:this._randomId},e)):""}}]),t}(a.Component),j=(n(51),function(e){function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.keywords,n=e.onlyKey;return t?o.a.createElement(o.a.Fragment,null,!n&&o.a.createElement(v,{text:"Keywords",size:"s"}),o.a.createElement("div",{className:"keywords"+(n?" keywords_inline":"")},t.map(function(e,t){return o.a.createElement(f.a,{to:"/tags/".concat(e),className:"keywords__item",key:t},e)}))):""}}]),t}(a.Component)),O=(n(52),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).firstUpper=n.firstUpper.bind(Object(y.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"firstUpper",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){return this.props.text?o.a.createElement("div",{className:"title"+(this.props.text.length>15?" title_size_m":"")},o.a.createElement("h1",{className:"title__header"},this.firstUpper(this.props.text))):""}}]),t}(a.Component)),x=n(19),C=n.n(x),_=n(20),N=n.n(_),S=n(21),T=n.n(S),M={AuditIcon:C.a,Logo:N.a,ExampleAudit:T.a},H="npm install -g lighthouse\n# or use yarn:\n# yarn global add lighthouse",L='lighthouse <url>\n\nLogging:\n--verbose  Displays verbose logging                                                                                                      [boolean]\n--quiet    Displays no progress, debug logs or errors                                                                                    [boolean]\n\nConfiguration:\n--save-assets                  Save the trace & devtools log to disk                                                                     [boolean]\n--list-all-audits              Prints a list of all available audits and exits                                                           [boolean]\n--list-trace-categories        Prints a list of all required trace categories and exits                                                  [boolean]\n--print-config                 Print the normalized config for the given config and options, then exit.                                  [boolean]\n--additional-trace-categories  Additional categories to capture with the trace (comma-delimited).\n--config-path                  The path to the config JSON.\n--chrome-flags                 Custom flags to pass to Chrome (space-delimited). For a full list of flags, see\n                                http://peter.sh/experiments/chromium-command-line-switches/.\n\n                                Environment variables:\n                                CHROME_PATH: Explicit path of intended Chrome binary. If set must point to an executable of a build of\n                                Chromium version 66.0 or later. By default, any detected Chrome Canary or Chrome (stable) will be launched.\n                                                                                                                                    [default: ""]\n--port                         The port to use for the debugging protocol. Use 0 for a random port                                    [default: 0]\n--preset                       Use a built-in configuration.                                            [choices: "full", "perf", "mixed-content"]\n--hostname                     The hostname to use for the debugging protocol.                                              [default: "localhost"]\n--max-wait-for-load            The timeout (in milliseconds) to wait before the page is considered done loading and the run should continue.\n                                WARNING: Very high values can lead to large traces and instability                                 [default: 45000]\n--emulated-form-factor         Controls the emulated device form factor (mobile vs. desktop) if not disabled                      [choices: "mobile", "desktop", "none"] [default: "mobile"]\n--enable-error-reporting       Enables error reporting, overriding any saved preference. --no-enable-error-reporting will do the opposite. More:\n                                https://git.io/vFFTO\n--gather-mode, -G              Collect artifacts from a connected browser and save to disk. If audit-mode is not also enabled, the run will quit\n                                early.                                                                                                    [boolean]\n--audit-mode, -A               Process saved artifacts from disk                                                                         [boolean]\n\nOutput:\n--output       Reporter for the results, supports multiple values                        [choices: "csv", "json", "html"] [default: "html"]\n--output-path  The file path to output the results. Use \'stdout\' to write to stdout.\n                If using JSON or CSV output, default is stdout.\n                If using HTML output, default is a file in the working directory with a name based on the test URL and date.\n                If using multiple outputs, --output-path is appended with the standard extension for each output type. "reports/my-run" -> "reports/my-run.report.html", "reports/my-run.report.json", etc.\n                Example: --output-path=./lighthouse-results.html\n--view         Open HTML report in your browser                                                                                          [boolean]\n\nOptions:\n--help                        Show help                                                                                                  [boolean]\n--version                     Show version number                                                                                        [boolean]\n--blocked-url-patterns        Block any network requests to the specified URL patterns                                                     [array]\n--disable-storage-reset       Disable clearing the browser cache and other storage APIs before a run                                     [boolean]\n--disable-device-emulation    Disable all device form factor emulation. Deprecated: use --emulated-form-factor=none instead              [boolean]\n--throttling-method                  Controls throttling method         [choices: "devtools", "provided", "simulate"]\n--throttling.rttMs                   Controls simulated network RTT (TCP layer)\n--throttling.throughputKbps          Controls simulated network download throughput\n--throttling.requestLatencyMs        Controls emulated network RTT (HTTP layer)\n--throttling.downloadThroughputKbps  Controls emulated network download throughput\n--throttling.uploadThroughputKbps    Controls emulated network upload throughput\n--throttling.cpuSlowdownMultiplier   Controls simulated + emulated CPU throttling\n--extra-headers               Set extra HTTP Headers to pass with request                                                                 [string]\n\nExamples:\nlighthouse <url> --view                                                   Opens the HTML report in a browser after the run completes\nlighthouse <url> --config-path=./myconfig.js                              Runs Lighthouse with your own configuration: custom audits, report\n                                                                            generation, etc.\nlighthouse <url> --output=json --output-path=./report.json --save-assets  Save trace, devtoolslog, and named JSON report.\nlighthouse <url> --disable-device-emulation                               Disable device emulation and all throttling.\n    --throttling-method=provided\nlighthouse <url> --chrome-flags="--window-size=412,660"                   Launch Chrome with a specific window size\nlighthouse <url> --quiet --chrome-flags="--headless"                      Launch Headless Chrome, turn off logging\nlighthouse <url> --extra-headers "{"Cookie":"monster=blue"}"          Stringify\'d JSON HTTP Header key/value pairs to send in requests\nlighthouse <url> --extra-headers=./path/to/file.json                      Path to JSON file of HTTP Header key/value pairs to send in requests\n\nFor more information on Lighthouse, see https://developers.google.com/web/tools/lighthouse/.',I="lighthouse\n# saves './<HOST>_<DATE>.report.html'\n\nlighthouse --output json\n# json output sent to stdout \n\nlighthouse --output html --output-path ./report.html\n# saves './report.html' \n\n# NOTE: specifying an output path with multiple formats ignores your specified extension for *ALL* formats \nlighthouse --output json --output html --output-path ./myfile.json\n# saves './myfile.report.json' and './myfile.report.html' \n\nlighthouse --output json --output html\n# saves './<HOST>_<DATE>.report.json' and './<HOST>_<DATE>.report.html' \n\nlighthouse --output-path=~/mydir/foo.out --save-assets\n# saves '~/mydir/foo.report.html' \n# saves '~/mydir/foo-0.trace.json' and '~/mydir/foo-0.devtoolslog.json' \n\nlighthouse --output-path=./report.json --output json\n# saves './report.json'",R=(n(53),a.Component,n(22)),A=n.n(R),F=(n(69),n(70),a.Component,n(71),a.Component,n(72),function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,"in development");return o.a.createElement(d,{content:e,context:this.props})}}]),t}(a.Component)),P=n(36),z=n(23),U=n.n(z),J=n(24),q=n.n(J),D=(n(74),a.Component,n(75),n(15)),G=(a.Component,n(25)),V=n.n(G),B=n(26),K=n.n(B),W=(n(76),function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//regexcrossword.com",target:"_blank"},"Regexcrossword.com")," - Welcome to the fantastic world of nerdy regex fun! Start playing by selecting one of the puzzle challenges below. There are a wide range of difficulties from beginner to expert.",o.a.createElement("br",null),o.a.createElement("img",{className:"userful-sites__regexcrossword",src:V.a})),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"http://collabedit.com",target:"_blank"},"\u0421ollabedit.com")," - Code writing online"),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//findmevk.com",target:"_blank"},"Findmevk.com")," - To find a user in vk.com by a photo."),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//measurethat.net",target:"_blank"},"Measurethat.net")," - To compare a several combinations of code."),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//codewars.com",target:"_blank"},"Codewars.com")," & ",o.a.createElement("a",{href:"//leetcode.com",target:"_blank"},"Leetcode.com")," - Code writing practice."),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//regexplained.com",target:"_blank"},"Regexplained.com")," - Regular expressions test.",o.a.createElement("br",null),o.a.createElement("img",{className:"userful-sites__image",width:"600px",src:K.a})),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//javascriptweekly.com",target:"_blank"},"Javascriptweekly.com")," - Weekly Javascript news & updates."),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//soundcloud.com/web-standards",target:"_blank"},"Soundcloud.com/web-standards")," - The Javascript's news podcasts."),o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"//blog.perlover.com/2012/04/11/why-i18n-l10n",target:"_blank"},"\u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f I18N \u0438 L10n?")));return o.a.createElement(d,{content:e,context:this.props})}}]),t}(a.Component)),X='<svg width=\'150\' height=\'150\' viewBox="0 0 200 200">\n    <defs>\n        <linearGradient id="gradient--colors"\n            x1="0" y1="100%"\n            x2="100%" y2="0">\n            <stop offset="0%"\n                stop-color="dodgerblue" />\n            <stop offset="50%"\n                stop-color="fuchsia" />\n            <stop offset="100%"\n                stop-color="yellow" />\n        </linearGradient>\n\n        <radialGradient id="gradient--colors-transparency"\n            fx="25%" fy="25%">\n            <stop offset="0%"\n                stop-color="black" />\n            <stop offset="30%"\n                stop-color="black"\n                stop-opacity=".2" />\n            <stop offset="97%"\n                stop-color="white"\n                stop-opacity=".4" />\n            <stop offset="100%"\n                stop-color="black" />\n        </radialGradient>\n\n        <mask id="mask--colors-transparency">\n            <rect fill="url(#gradient--colors-transparency)"\n                width="100%" height="100%"></rect>\n        </mask>\n\n        <radialGradient id="gradient--bw-light" fy="10%">\n            <stop offset="60%"\n                stop-color="black"\n                stop-opacity="0" />\n            <stop offset="90%"\n                stop-color="white"\n                stop-opacity=".25" />\n            <stop offset="100%"\n                stop-color="black" />\n        </radialGradient>\n\n        <mask id="mask--light-bottom">\n            <rect fill="url(#gradient--bw-light)"\n                width="100%" height="100%"></rect>\n        </mask>\n\n        <mask id="mask--light-top">\n            <rect fill="url(#gradient--bw-light)"\n                width="100%" height="100%"\n                transform="rotate(180, 100, 100)"></rect>\n        </mask>\n\n        <radialGradient id="gradient--spot" fy="20%">\n            <stop offset="10%"\n                stop-color="white"\n                stop-opacity=".7" />\n            <stop offset="70%"\n                stop-color="white"\n                stop-opacity="0" />\n        </radialGradient>\n    </defs>\n\n    <ellipse rx="40" ry="20" cx="150" cy="150"\n        fill="url(#gradient--spot)"\n        transform="rotate(-225, 150, 150)">\n    </ellipse>\n\n    <circle r="50%" cx="50%" cy="50%"\n        fill="aqua"\n        mask="url(#mask--light-bottom)">\n    </circle>\n\n    <circle r="50%" cx="50%" cy="50%"\n        fill="yellow"\n        mask="url(#mask--light-top)">\n    </circle>\n\n\n    <ellipse rx="55" ry="25" cx="55" cy="55"\n        fill="url(#gradient--spot)"\n        transform="rotate(-45, 55, 55)">\n    </ellipse>\n\n    <circle r="50%" cx="50%" cy="50%"\n        fill="url(#gradient--colors)"\n        mask="url(#mask--colors-transparency)">\n    </circle>\n</svg>',Y=n(27),Q=n.n(Y),Z=(n(77),a.Component,function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e \u0432\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435."),o.a.createElement(fe,{lang:"javascript",content:"[...document.getElementsByTagName('*')].forEach(elem => {\n    elem.style.outline=\"1px solid #\"+(~~(Math.random()*(1<<24))).toString(16)\n})"}),o.a.createElement("br",null),o.a.createElement("p",{className:"paragraph"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 #HEX \u0446\u0432\u0435\u0442\u043e\u0432."),o.a.createElement(fe,{lang:"javascript",content:'"#"+((1<<24)*Math.random()|0).toString(16)\n\nor\n\nMath.random().toString(16).substr(-6)'}));return o.a.createElement(d,{content:e,context:this.props})}}]),t}(a.Component)),$=(n(78),function(e){function t(e){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,"test");return o.a.createElement(d,{content:e,context:this.props})}}]),t}(a.Component)),ee=(n(79),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).items=[{link:"Homm.lekzd.ru",name:"\u0413\u0435\u0440\u043e\u0438 \u041c\u0435\u0447\u0430 \u0438 \u041c\u0430\u0433\u0438\u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435."},{link:"Astexplorer.net",name:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e-\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e JS."},{link:"Classic.minecraft.net",name:"Minecraft \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.",description:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0439 \u0438\u0433\u0440\u0435-\u043f\u0435\u0441\u043e\u0447\u043d\u0438\u0446\u0435 Minecraft \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u043b\u043e\u0441\u044c 10 \u043b\u0435\u0442. \u0412 \u0447\u0435\u0441\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a Mojang \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b \u0441\u0430\u0439\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}],n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,this.items.map(function(e){var t=e.link,n=e.name,a=e.description;return o.a.createElement("p",{className:"paragraph",key:n},o.a.createElement("a",{target:"_blank",href:"http://"+t},t)," - ",n,a&&o.a.createElement("span",{className:"description"},a))}));return o.a.createElement(d,{content:e,context:this.props})}}]),t}(a.Component)),te=n(28),ne=n.n(te),ae=n(29),oe=n.n(ae),re=n(30),ie=n.n(re),se=n(31),ce=n.n(se),le=n(32),ue=n.n(le),pe=[{name:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b",path:"utils",component:$,icon:ne.a},{name:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e",path:"wow",component:ee,icon:oe.a},{name:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",path:"materials",component:W,icon:ie.a},{name:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u0435\u043c\u044b \u0432 JavaScript",path:"js",component:Z,icon:ce.a},{name:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u0435\u043c\u044b \u0432 CSS",path:"css",component:F,icon:ue.a}],me=(n(80),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=pe.map(function(e,t){return!e.hidden&&o.a.createElement("div",{className:"landing-item"},e.icon&&o.a.createElement("img",{className:"landing-item__icon",src:e.icon}),o.a.createElement(f.a,{className:"langind-item__link link",to:"/pages/".concat(e.path),key:t},e.name))});return o.a.createElement(d,{content:e,context:{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",type:"landing"}})}}]),t}(a.Component)),he=(n(81),n(33)),de=n.n(he),fe=(n(268),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={showCopied:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"selectText",value:function(e){var t,n;document.body.createTextRange?((t=document.body.createTextRange()).moveToElementText(e),t.select()):window.getSelection&&(n=window.getSelection(),(t=document.createRange()).selectNodeContents(e),n.removeAllRanges(),n.addRange(t))}},{key:"copyToBuffer",value:function(e){this.selectText(e),document.execCommand("copy"),window.getSelection().removeAllRanges()}},{key:"onCopyClick",value:function(e){this.copyToBuffer(e.target.parentNode.firstChild),this.setState({showCopied:!0}),clearTimeout(this._copyElemTimer)}},{key:"render",value:function(){return o.a.createElement("div",{className:"code"},o.a.createElement("div",{className:"code__content",dangerouslySetInnerHTML:{__html:de.a.highlight(this.props.lang,this.props.content).value}}),o.a.createElement("div",{className:"code__copied "+(this.state.showCopied?" code__copied_active":""),onClick:this.onCopyClick.bind(this)},this.state.showCopied?"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))}}]),t}(a.Component)),ge=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(me,null))}}]),t}(a.Component),be=(n(269),n(34)),ve=n.n(be),ye=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"no-found"},o.a.createElement("img",{className:"no-found__logo",src:ve.a}),o.a.createElement(f.a,{className:"no-found__link",to:"/"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435")))},we=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e)))._tag=e.match.params.tag,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getContent",value:function(){var e=pe.filter(function(e){return(e.keywords||[]).includes(this._tag)}.bind(this)),t=o.a.createElement(j,{onlyKey:!0,keywords:[this._tag]});if(!e.length)return!1;var n=o.a.createElement("div",{className:"paragraph"},"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0441 \u0442\u0435\u0433\u043e\u043c ",t),a=e.map(function(e,t){return!e.hidden&&o.a.createElement(f.a,{className:"link",key:t,to:"/pages/".concat(g(e.name))},e.name)});return o.a.createElement(o.a.Fragment,null,n,a)}},{key:"render",value:function(){var e=this.getContent.call(this);return e?o.a.createElement(d,{content:e,context:{name:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u0433\u0443: "+this._tag,type:"landing"}}):ye()}}]),t}(a.Component),ke=function(e){var t=e.component;return o.a.createElement(t,e)},Ee=pe.map(function(e,t){return o.a.createElement(s.a,{path:"/pages/".concat(e.path),component:ke.bind(void 0,e),key:t})});function je(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}window.addEventListener("resize",je),je();var Oe=function(){return o.a.createElement(i.a,{basename:"/home"},o.a.createElement(c.a,null,Ee,o.a.createElement(s.a,{path:"/tags/:tag/",component:we}),o.a.createElement(s.a,{exact:!0,path:"/",component:ge}),o.a.createElement(s.a,{path:"/*",component:ye})))},xe=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Oe,null))};Object(r.render)(o.a.createElement(i.a,null,o.a.createElement(xe,null)),document.getElementById("root"))},28:function(e,t,n){e.exports=n.p+"static/media/utils-icon.06a0196c.svg"},29:function(e,t,n){e.exports=n.p+"static/media/wow-icon.4f5fba58.svg"},30:function(e,t,n){e.exports=n.p+"static/media/materials-icon.97b382ec.svg"},31:function(e,t,n){e.exports=n.p+"static/media/js-icon.4b5ad25a.svg"},32:function(e,t,n){e.exports=n.p+"static/media/css-icon.443b876a.svg"},34:function(e,t,n){e.exports=n.p+"static/media/404.34afe3ea.png"},37:function(e,t,n){e.exports=n(271)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.e0f659a0.chunk.js.map