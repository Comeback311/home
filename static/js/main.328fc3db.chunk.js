(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/audit.4c271142.png"},22:function(e,t,a){e.exports=a.p+"static/media/logo.1eab774a.png"},23:function(e,t,a){e.exports=a.p+"static/media/example-audit.6c2b8147.png"},26:function(e,t,a){e.exports=a.p+"static/media/info.1fc7f4bc.svg"},265:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a(270),l=a(272),i=a(269),c=a(271),u=(a(38),a(39),a(2)),m=a(3),h=a(6),p=a(4),d=a(5),f=(a(40),function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(h.a)(this,Object(p.a)(t).call(this,e)),e.context&&e.context.name&&(document.title=e.context.name),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.location.hash=window.decodeURIComponent(window.location.hash);var e=function(){var e=window.location.hash.split("#");if(e.length>2){var t=e.slice(-1)[0];document.querySelector('[name="'.concat(t,'"]')).scrollIntoView()}};e(),window.onhashchange=e}},{key:"render",value:function(){var e=this.props.context||{},t=e.type,a=e.keywords,n=e.name;return console.log(),o.a.createElement(o.a.Fragment,null,o.a.createElement(te,null),o.a.createElement("div",{className:"document "+(t||"")},!t&&o.a.createElement(ne,{text:n}),this.props.content,o.a.createElement(j,{keywords:a})),o.a.createElement(ae,null))}}]),t}(n.Component)),g=a(268),b=(a(41),function(e){return e.toLowerCase().split(" ").join("-")});function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}var y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={svgIconVisible:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onSubtitleClick",value:function(e){}},{key:"setClassName",value:function(){return"subtitle subtitle_size_"+(this.props.size||"m")}},{key:"onSubtitleMouseEnter",value:function(){this.setState({svgIconVisible:!0})}},{key:"onSubtitleMouseLeave",value:function(){this.setState({svgIconVisible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:this.setClassName()},o.a.createElement("h2",{onMouseEnter:this.onSubtitleMouseEnter.bind(this),onMouseLeave:this.onSubtitleMouseLeave.bind(this)},o.a.createElement(g.a,{to:"#".concat(b(this.props.text)),className:"subtitle__anchor",name:b(this.props.text)},this.props.text)),this.state.svgIconVisible&&o.a.createElement("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",width:"16"},o.a.createElement("path",{d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))}}]),t}(n.Component),E=a(10),k=(a(44),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={isShowed:a.props.opened||!1},a.onClick=a.onClick.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){this.setState({isShowed:!this.state.isShowed})}},{key:"render",value:function(){var e=this.props.showedContent,t=v(this.props.clickedYes||"\u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c"),a=v(this.props.clickedNo||"\u0441\u0432\u0435\u0440\u043d\u0443\u0442\u044c");return e?o.a.createElement("div",{className:"accordion"},o.a.createElement("div",{className:"accordion__clicked",onClick:this.onClick},this.state.isShowed?a:t),this.state.isShowed&&o.a.createElement("div",{className:"accordion__showed"},e)):""}}]),t}(n.Component)),w=(a(45),0),O=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){w++,this._randomId="checkbox__item_".concat(w)}},{key:"getRandomNumber",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}},{key:"render",value:function(){var e=this.props.text,t=this.props.checked;return e?o.a.createElement("div",{className:"checkbox"},o.a.createElement("input",{type:"checkbox",className:"checkbox__input",id:this._randomId,onChange:this.props.onInput,checked:t}),o.a.createElement("label",{htmlFor:this._randomId},e)):""}}]),t}(n.Component),j=(a(46),function(e){function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.keywords,a=e.onlyKey;return t?o.a.createElement(o.a.Fragment,null,!a&&o.a.createElement(y,{text:"Keywords",size:"s"}),o.a.createElement("div",{className:"keywords"+(a?" keywords_inline":"")},t.map(function(e,t){return o.a.createElement(g.a,{to:"/tags/".concat(e),className:"keywords__item",key:t},e)}))):""}}]),t}(n.Component)),x=(a(47),a(21)),C=a.n(x),_=a(22),N=a.n(_),S=a(23),T=a.n(S),L={AuditIcon:C.a,Logo:N.a,ExampleAudit:T.a},I="npm install -g lighthouse\n# or use yarn:\n# yarn global add lighthouse",A='lighthouse <url>\n\nLogging:\n--verbose  Displays verbose logging                                                                                                      [boolean]\n--quiet    Displays no progress, debug logs or errors                                                                                    [boolean]\n\nConfiguration:\n--save-assets                  Save the trace & devtools log to disk                                                                     [boolean]\n--list-all-audits              Prints a list of all available audits and exits                                                           [boolean]\n--list-trace-categories        Prints a list of all required trace categories and exits                                                  [boolean]\n--print-config                 Print the normalized config for the given config and options, then exit.                                  [boolean]\n--additional-trace-categories  Additional categories to capture with the trace (comma-delimited).\n--config-path                  The path to the config JSON.\n--chrome-flags                 Custom flags to pass to Chrome (space-delimited). For a full list of flags, see\n                                http://peter.sh/experiments/chromium-command-line-switches/.\n\n                                Environment variables:\n                                CHROME_PATH: Explicit path of intended Chrome binary. If set must point to an executable of a build of\n                                Chromium version 66.0 or later. By default, any detected Chrome Canary or Chrome (stable) will be launched.\n                                                                                                                                    [default: ""]\n--port                         The port to use for the debugging protocol. Use 0 for a random port                                    [default: 0]\n--preset                       Use a built-in configuration.                                            [choices: "full", "perf", "mixed-content"]\n--hostname                     The hostname to use for the debugging protocol.                                              [default: "localhost"]\n--max-wait-for-load            The timeout (in milliseconds) to wait before the page is considered done loading and the run should continue.\n                                WARNING: Very high values can lead to large traces and instability                                 [default: 45000]\n--emulated-form-factor         Controls the emulated device form factor (mobile vs. desktop) if not disabled                      [choices: "mobile", "desktop", "none"] [default: "mobile"]\n--enable-error-reporting       Enables error reporting, overriding any saved preference. --no-enable-error-reporting will do the opposite. More:\n                                https://git.io/vFFTO\n--gather-mode, -G              Collect artifacts from a connected browser and save to disk. If audit-mode is not also enabled, the run will quit\n                                early.                                                                                                    [boolean]\n--audit-mode, -A               Process saved artifacts from disk                                                                         [boolean]\n\nOutput:\n--output       Reporter for the results, supports multiple values                        [choices: "csv", "json", "html"] [default: "html"]\n--output-path  The file path to output the results. Use \'stdout\' to write to stdout.\n                If using JSON or CSV output, default is stdout.\n                If using HTML output, default is a file in the working directory with a name based on the test URL and date.\n                If using multiple outputs, --output-path is appended with the standard extension for each output type. "reports/my-run" -> "reports/my-run.report.html", "reports/my-run.report.json", etc.\n                Example: --output-path=./lighthouse-results.html\n--view         Open HTML report in your browser                                                                                          [boolean]\n\nOptions:\n--help                        Show help                                                                                                  [boolean]\n--version                     Show version number                                                                                        [boolean]\n--blocked-url-patterns        Block any network requests to the specified URL patterns                                                     [array]\n--disable-storage-reset       Disable clearing the browser cache and other storage APIs before a run                                     [boolean]\n--disable-device-emulation    Disable all device form factor emulation. Deprecated: use --emulated-form-factor=none instead              [boolean]\n--throttling-method                  Controls throttling method         [choices: "devtools", "provided", "simulate"]\n--throttling.rttMs                   Controls simulated network RTT (TCP layer)\n--throttling.throughputKbps          Controls simulated network download throughput\n--throttling.requestLatencyMs        Controls emulated network RTT (HTTP layer)\n--throttling.downloadThroughputKbps  Controls emulated network download throughput\n--throttling.uploadThroughputKbps    Controls emulated network upload throughput\n--throttling.cpuSlowdownMultiplier   Controls simulated + emulated CPU throttling\n--extra-headers               Set extra HTTP Headers to pass with request                                                                 [string]\n\nExamples:\nlighthouse <url> --view                                                   Opens the HTML report in a browser after the run completes\nlighthouse <url> --config-path=./myconfig.js                              Runs Lighthouse with your own configuration: custom audits, report\n                                                                            generation, etc.\nlighthouse <url> --output=json --output-path=./report.json --save-assets  Save trace, devtoolslog, and named JSON report.\nlighthouse <url> --disable-device-emulation                               Disable device emulation and all throttling.\n    --throttling-method=provided\nlighthouse <url> --chrome-flags="--window-size=412,660"                   Launch Chrome with a specific window size\nlighthouse <url> --quiet --chrome-flags="--headless"                      Launch Headless Chrome, turn off logging\nlighthouse <url> --extra-headers "{"Cookie":"monster=blue"}"          Stringify\'d JSON HTTP Header key/value pairs to send in requests\nlighthouse <url> --extra-headers=./path/to/file.json                      Path to JSON file of HTTP Header key/value pairs to send in requests\n\nFor more information on Lighthouse, see https://developers.google.com/web/tools/lighthouse/.',D="lighthouse\n# saves './<HOST>_<DATE>.report.html'\n\nlighthouse --output json\n# json output sent to stdout \n\nlighthouse --output html --output-path ./report.html\n# saves './report.html' \n\n# NOTE: specifying an output path with multiple formats ignores your specified extension for *ALL* formats \nlighthouse --output json --output html --output-path ./myfile.json\n# saves './myfile.report.json' and './myfile.report.html' \n\nlighthouse --output json --output html\n# saves './<HOST>_<DATE>.report.json' and './<HOST>_<DATE>.report.html' \n\nlighthouse --output-path=~/mydir/foo.out --save-assets\n# saves '~/mydir/foo.report.html' \n# saves '~/mydir/foo-0.trace.json' and '~/mydir/foo-0.devtoolslog.json' \n\nlighthouse --output-path=./report.json --output json\n# saves './report.json'",M=(a(48),function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph paragraph_type_blockquote"},"Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices."),o.a.createElement(y,{text:"Using Lighthouse in Chrome DevTools"}),o.a.createElement("p",{className:"paragraph"},'Lighthouse is integrated directly into the Chrome Developer Tools, under the "Audits" panel.'),o.a.createElement("p",{className:"paragraph"},o.a.createElement("b",null,"Run it"),': open Chrome DevTools, select the Audits panel, and hit "Run audits".'),o.a.createElement("img",{className:"lighthouse__audit",src:L.AuditIcon,alt:""}),o.a.createElement(y,{text:"Using the Node CLI"}),o.a.createElement("p",{className:"paragraph"},"The Node CLI provides the most flexibility in how Lighthouse runs can be configured and reported. Users who want more advanced usage, or want to run Lighthouse in an automated fashion should use the Node CLI."),o.a.createElement("p",{className:"paragraph"},o.a.createElement("b",null,"Installation:")),o.a.createElement(le,{lang:"properties",content:I}),o.a.createElement("p",{className:"paragraph"},o.a.createElement("b",null,"Run it:")),o.a.createElement(le,{lang:"properties",content:"lighthouse https://airhorner.com/"}),o.a.createElement("p",{className:"paragraph"},"By default, Lighthouse writes the report to an HTML file. You can control the output format by passing flags."),o.a.createElement(y,{text:"CLI options",size:"s"}),o.a.createElement(k,{showedContent:o.a.createElement(le,{lang:"properties",content:A})}),o.a.createElement(y,{text:"Output Examples",size:"s"}),o.a.createElement(k,{showedContent:o.a.createElement(le,{lang:"properties",content:D}),opened:!0}),o.a.createElement(y,{text:"Viewing a report"}),o.a.createElement("p",{className:"paragraph"},"Lighthouse can produce a report as JSON or HTML."),o.a.createElement("p",{className:"paragraph"},"HTML report:"),o.a.createElement("img",{className:"lighthouse__audit",src:L.ExampleAudit,alt:""}),o.a.createElement("div",{className:"lighthouse__slogan"},o.a.createElement("img",{className:"lighthouse__logo",src:L.Logo,alt:""}),o.a.createElement("p",{className:"paragraph"},o.a.createElement("b",null,"Lighthouse,")," \u02c8l\u012bt\u02cchous (n): a ",o.a.createElement("s",null,"tower or other structure")," tool containing a beacon light to warn or guide ",o.a.createElement("s",null,"ships at sea")," developers.")));return o.a.createElement(f,{content:e,context:this.props})}}]),t}(n.Component)),U=a(24),F=a.n(U),H=(a(64),a(65),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={active:!1,value:8},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e){this.setState({active:e.target.checked,value:this.state.value})}},{key:"onRangeChange",value:function(e){this.setState({active:this.state.active,value:e}),this.state.active&&(this._logoAnimateElem||(this._logoAnimateElem=document.getElementsByClassName("css-logo__animate")[0]),this._defaultProperty||(this._defaultProperty=window.getComputedStyle(this._logoAnimateElem).boxShadow),this._logoAnimateElem.style.boxShadow=this._defaultProperty.split("px,").splice(8-e).join("px,"))}},{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"css-logo"},o.a.createElement("a",{className:"css-logo__link"+(this.state.active?" css-logo__link_active":"")},"test",o.a.createElement("div",{className:"css-logo__animate"}))),o.a.createElement(O,{text:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c",checked:this.state.active,onInput:this.onChange.bind(this)}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"range"},o.a.createElement("p",{className:"paragraph"},"\u0427\u0438\u0441\u043b\u043e \u043b\u0438\u043d\u0438\u0439:"),o.a.createElement("br",null),o.a.createElement(F.a,{maxValue:8,minValue:1,value:this.state.value,onChange:this.onRangeChange.bind(this)}))));return o.a.createElement(f,{content:e,context:this.props})}}]),t}(n.Component)),V=(a(66),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={diff:null},a._lib="https://cdnjs.cloudflare.com/ajax/libs/diff_match_patch/20121119/diff_match_patch.js",a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){!function(e){var t=document.body.children[0];if(t&&e){var a=document.createElement("script");a.src=e,a.async=!0,t.appendChild(a)}}(this._lib)}},{key:"componentWillUnmount",value:function(){!function(e){var t=document.body.children[0]||{},a=t.children||[];if(t&&e&&a.length){var n=a[a.length-1]||{};n.src===e&&t.removeChild(n)}}(this._lib)}},{key:"onClick",value:function(){var e=document.querySelector(".textarea_type_one").value,t=document.querySelector(".textarea_type_two").value,a=(new diff_match_patch).diff_main(e,t);this.setState({diff:a})}},{key:"getClassByValue",value:function(e){switch(e){case 1:return"first";case-1:return"second";default:return null}}},{key:"render",value:function(){var e=this,t=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u043f\u0430\u0440\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u0442 \u0434\u0432\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043d\u0438\u0446\u0443."),o.a.createElement("div",{className:"compare-text-block"+(this.state.diff?" compare-text-block__active":"")},o.a.createElement("textarea",{rows:"14",className:"textarea textarea_type_one",defaultValue:"var arr = [1, -1, 2, -2, 3];\n\nvar positiveArr = arr.filter(function(number) {\n    return number > 0;\n});\n\nalert( positiveArr ); // 1, 2, 3"}),o.a.createElement("textarea",{rows:"14",className:"textarea textarea_type_two",defaultValue:"var arr = [1, 5, -1, 2, -2, 4, 3];\n\nvar positiveArr = arr.filter(function(val) { \n    return val => 0;\n});\n\nalert( positiveArr ); // 1, 5, 2, 4, 3"})),o.a.createElement("button",{className:"compare-text-block__button btn btn-secondary",onClick:this.onClick.bind(this)},"Click"),o.a.createElement("div",{className:"compare-text-block__result"},this.state.diff&&[o.a.createElement("p",{className:"paragraph"},o.a.createElement("b",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:")),this.state.diff.map(function(t,a){var n=e.getClassByValue.call(e,t[0]);return n?o.a.createElement("span",{className:n,key:a},t[1]):t[1]})]));return o.a.createElement(f,{content:t,context:this.props})}}]),t}(n.Component)),P=(a(67),function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,"in development");return o.a.createElement(f,{content:e,context:this.props})}}]),t}(n.Component)),R=(a(68),function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,"css-gradient");return o.a.createElement(f,{content:e,context:this.props})}}]),t}(n.Component)),q=a(31),z=a(25),G=a.n(z),B=a(26),J=a.n(B),W=(a(70),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={placeholder:"",uaText:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=0;this._timerText=setInterval(function(){e=e>=3?1:e+1,this.setState({placeholder:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c UserAgent"+".".repeat(e)})}.bind(this),200),this._timerFocus=setTimeout(function(){clearInterval(this._timerText),this.setState({placeholder:"",uaText:window.navigator.userAgent||navigator.userAgent}),this.uaInput.focus()}.bind(this),2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timerFocus),clearInterval(this._timerText)}},{key:"handleChange",value:function(e){this.setState({placeholder:"",uaText:e.target.value})}},{key:"onSubmitForm",value:function(e){e.preventDefault();var t=G()(this.state.uaText);this.setState(Object(q.a)({},this.state,{uaData:t}))}},{key:"beautifyUaData",value:function(){var e=this.state.uaData,t=Object.keys(e).map(function(t,a){var n=e[t];return!!a&&o.a.createElement(o.a.Fragment,{key:a},o.a.createElement("li",{key:a,className:"list-group-item disabled list-group-item"},o.a.createElement("img",{className:"ua-parser__icon_title",src:J.a}),t),Object.keys(n).map(function(e,t){return o.a.createElement("li",{className:"list-group-item",key:t},e," - ",n[e]||"unknown")}))}),a=o.a.createElement("li",{className:"list-group-item"},o.a.createElement("b",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:"));return o.a.createElement("ul",{className:"ua-parser__group list-group"},a,t)}},{key:"render",value:function(){var e=this,t=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},o.a.createElement("b",null,"\u0412\u0430\u0448 UserAgent:")),o.a.createElement("br",null),o.a.createElement("form",{onSubmit:this.onSubmitForm.bind(this)},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{ref:function(t){e.uaInput=t},type:"text",className:"form-control ua-input",placeholder:this.state.placeholder,defaultValue:this.state.uaText,onChange:this.handleChange.bind(this)}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-primary",type:"submit",id:"button-addon2"},"Start")))),this.state.uaData&&this.beautifyUaData.call(this));return o.a.createElement(f,{content:t,context:this.props})}}]),t}(n.Component)),K=(a(71),a(17)),Y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={devtools:null},a.onDevtoolsChange=a.onDevtoolsChange.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("devtoolschange",this.onDevtoolsChange),this.setState({devtools:{isOpen:K.open,orientation:K.orientation}})}},{key:"onDevtoolsChange",value:function(e){this.setState({devtools:{isOpen:e.detail.open,orientation:e.detail.orientation}})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("devtoolschange",this.onDevtoolsChange)}},{key:"render",value:function(){var e=this.state.devtools||{},t=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},"\u0412 \u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0438\u0436\u0435 \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442 \u043b\u0438 \u0441\u0435\u0439\u0447\u0430\u0441 devtools."),o.a.createElement("div",{className:"devtools__message alert alert-"+(e.isOpen?"success":"secondary"),role:"alert"},"Is DevTools open? ",o.a.createElement("span",{className:"alert-link"},e.isOpen?"yes":"no")));return o.a.createElement(f,{content:t,context:this.props})}}]),t}(n.Component),Q=a(27),X=a.n(Q),Z=(a(72),function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},o.a.createElement("a",{href:"https://regexcrossword.com",target:"_blank"},"Regexcrossword.com")," - Welcome to the fantastic world of nerdy regex fun! Start playing by selecting one of the puzzle challenges below. There are a wide range of difficulties from beginner to expert.",o.a.createElement("img",{className:"userful-sites__regexcrossword",src:X.a})));return o.a.createElement(f,{content:e,context:this.props})}}]),t}(n.Component)),$=function(){return o.a.createElement("svg",{width:"150",height:"150",viewBox:"0 0 200 200"},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"gradient--colors",x1:"0",y1:"100%",x2:"100%",y2:"0"},o.a.createElement("stop",{offset:"0%",stopColor:"dodgerblue"}),o.a.createElement("stop",{offset:"50%",stopColor:"fuchsia"}),o.a.createElement("stop",{offset:"100%",stopColor:"yellow"})),o.a.createElement("radialGradient",{id:"gradient--colors-transparency",fx:"25%",fy:"25%"},o.a.createElement("stop",{offset:"0%",stopColor:"black"}),o.a.createElement("stop",{offset:"30%",stopColor:"black",stopOpacity:".2"}),o.a.createElement("stop",{offset:"97%",stopColor:"white",stopOpacity:".4"}),o.a.createElement("stop",{offset:"100%",stopColor:"black"})),o.a.createElement("mask",{id:"mask--colors-transparency"},o.a.createElement("rect",{fill:"url(#gradient--colors-transparency)",width:"100%",height:"100%"})),o.a.createElement("radialGradient",{id:"gradient--bw-light",fy:"10%"},o.a.createElement("stop",{offset:"60%",stopColor:"black",stopOpacity:"0"}),o.a.createElement("stop",{offset:"90%",stopColor:"white",stopOpacity:".25"}),o.a.createElement("stop",{offset:"100%",stopColor:"black"})),o.a.createElement("mask",{id:"mask--light-bottom"},o.a.createElement("rect",{fill:"url(#gradient--bw-light)",width:"100%",height:"100%"})),o.a.createElement("mask",{id:"mask--light-top"},o.a.createElement("rect",{fill:"url(#gradient--bw-light)",width:"100%",height:"100%",transform:"rotate(180, 100, 100)"})),o.a.createElement("radialGradient",{id:"gradient--spot",fy:"20%"},o.a.createElement("stop",{offset:"10%",stopColor:"white",stopOpacity:".7"}),o.a.createElement("stop",{offset:"70%",stopColor:"white",stopOpacity:"0"}))),o.a.createElement("ellipse",{rx:"40",ry:"20",cx:"150",cy:"150",fill:"url(#gradient--spot)",transform:"rotate(-225, 150, 150)"}),o.a.createElement("circle",{r:"50%",cx:"50%",cy:"50%",fill:"aqua",mask:"url(#mask--light-bottom)"}),o.a.createElement("circle",{r:"50%",cx:"50%",cy:"50%",fill:"yellow",mask:"url(#mask--light-top)"}),o.a.createElement("ellipse",{rx:"55",ry:"25",cx:"55",cy:"55",fill:"url(#gradient--spot)",transform:"rotate(-45, 55, 55)"}),o.a.createElement("circle",{r:"50%",cx:"50%",cy:"50%",fill:"url(#gradient--colors)",mask:"url(#mask--colors-transparency)"}))},ee=(a(73),[{name:"Lighthouse",component:M,keywords:["npm","js","node","devtools","chrome"]},{name:"Css logo",component:H,keywords:["css","animation"]},{name:"Compare 2 texts",component:V,keywords:["js","algorithm","utils","compare"]},{name:"Css tasks",component:P,keywords:["css","tasks"],hidden:!0},{name:"Css gradient",component:R,keywords:["css","gradient"],hidden:!0},{name:"UserAgent parser online",component:W,keywords:["parser","npm","utils","tools"]},{name:"Devtools detect",component:Y,keywords:["devtools","inspect","utils","tools"]},{name:"Userful sites",component:Z,keywords:["sites","useful"]},{name:"Userful articles",component:function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"paragraph"},"Soap bubbles on CSS + svg.",o.a.createElement("br",null),o.a.createElement("a",{href:"http://css.yoksel.ru/svg-bubble/",target:"_blank"},"css.yoksel.ru/svg-bubble"),o.a.createElement("br",null)),o.a.createElement("br",null),$(),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(k,{clickedYes:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u0434",showedContent:o.a.createElement(le,{lang:"html",content:'<svg width=\'150\' height=\'150\' viewBox="0 0 200 200">\n    <defs>\n        <linearGradient id="gradient--colors"\n            x1="0" y1="100%"\n            x2="100%" y2="0">\n            <stop offset="0%"\n                stop-color="dodgerblue" />\n            <stop offset="50%"\n                stop-color="fuchsia" />\n            <stop offset="100%"\n                stop-color="yellow" />\n        </linearGradient>\n\n        <radialGradient id="gradient--colors-transparency"\n            fx="25%" fy="25%">\n            <stop offset="0%"\n                stop-color="black" />\n            <stop offset="30%"\n                stop-color="black"\n                stop-opacity=".2" />\n            <stop offset="97%"\n                stop-color="white"\n                stop-opacity=".4" />\n            <stop offset="100%"\n                stop-color="black" />\n        </radialGradient>\n\n        <mask id="mask--colors-transparency">\n            <rect fill="url(#gradient--colors-transparency)"\n                width="100%" height="100%"></rect>\n        </mask>\n\n        <radialGradient id="gradient--bw-light" fy="10%">\n            <stop offset="60%"\n                stop-color="black"\n                stop-opacity="0" />\n            <stop offset="90%"\n                stop-color="white"\n                stop-opacity=".25" />\n            <stop offset="100%"\n                stop-color="black" />\n        </radialGradient>\n\n        <mask id="mask--light-bottom">\n            <rect fill="url(#gradient--bw-light)"\n                width="100%" height="100%"></rect>\n        </mask>\n\n        <mask id="mask--light-top">\n            <rect fill="url(#gradient--bw-light)"\n                width="100%" height="100%"\n                transform="rotate(180, 100, 100)"></rect>\n        </mask>\n\n        <radialGradient id="gradient--spot" fy="20%">\n            <stop offset="10%"\n                stop-color="white"\n                stop-opacity=".7" />\n            <stop offset="70%"\n                stop-color="white"\n                stop-opacity="0" />\n        </radialGradient>\n    </defs>\n\n    <ellipse rx="40" ry="20" cx="150" cy="150"\n        fill="url(#gradient--spot)"\n        transform="rotate(-225, 150, 150)">\n    </ellipse>\n\n    <circle r="50%" cx="50%" cy="50%"\n        fill="aqua"\n        mask="url(#mask--light-bottom)">\n    </circle>\n\n    <circle r="50%" cx="50%" cy="50%"\n        fill="yellow"\n        mask="url(#mask--light-top)">\n    </circle>\n\n\n    <ellipse rx="55" ry="25" cx="55" cy="55"\n        fill="url(#gradient--spot)"\n        transform="rotate(-45, 55, 55)">\n    </ellipse>\n\n    <circle r="50%" cx="50%" cy="50%"\n        fill="url(#gradient--colors)"\n        mask="url(#mask--colors-transparency)">\n    </circle>\n\n</svg>\n'})}));return o.a.createElement(f,{content:e,context:this.props})}}]),t}(n.Component),keywords:["sites","articles","useful"]}]),te=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={suggestItems:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChangeSearch",value:function(e){var t=e.target.value;if(t){var a=ee.filter(function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())});this.setState({suggestItems:a})}}},{key:"render",value:function(){var e=this.state.suggestItems;return o.a.createElement("div",{className:"header"},o.a.createElement(g.a,{className:"header__logo",to:"/"},"I don't know"),o.a.createElement("div",{className:"suggest"},o.a.createElement("input",{type:"text",className:"header__search form-control",placeholder:"search",onChange:this.onChangeSearch.bind(this)}),e.length>0&&o.a.createElement("div",{className:"suggest__content"},o.a.createElement("ul",{className:"list-group"},e.map(function(e,t){return o.a.createElement(g.a,{key:t,className:"suggest__link",to:"/pages/".concat(b(e.name))},o.a.createElement("li",{className:"suggest__item list-group-item list-group-item-action"},e.name))})))))}}]),t}(n.Component),ae=(a(74),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"footer__copy"},"Avdeev Denis \xa9"))}}]),t}(n.Component)),ne=(a(75),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).firstUpper=a.firstUpper.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"firstUpper",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){return this.props.text?o.a.createElement("div",{className:"title"+(this.props.text.length>15?" title_size_m":"")},o.a.createElement("h1",{className:"title__header"},this.firstUpper(this.props.text))):""}}]),t}(n.Component)),oe=(a(76),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=ee.map(function(e,t){return!e.hidden&&o.a.createElement(g.a,{className:"link",to:"/pages/".concat(b(e.name)),key:t},e.name)});return o.a.createElement(f,{content:e,context:{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",type:"landing"}})}}]),t}(n.Component)),re=(a(77),a(28)),se=a.n(re),le=(a(264),function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"code",dangerouslySetInnerHTML:{__html:se.a.highlight(this.props.lang,this.props.content).value}})}}]),t}(n.Component)),ie=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,null))}}]),t}(n.Component),ce=(a(265),a(29)),ue=a.n(ce),me=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"no-found"},o.a.createElement("img",{className:"no-found__logo",src:ue.a}),o.a.createElement(g.a,{className:"no-found__link",to:"/"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435")))},he=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e)))._tag=e.match.params.tag,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getContent",value:function(){var e=ee.filter(function(e){return(e.keywords||[]).includes(this._tag)}.bind(this)),t=o.a.createElement(j,{onlyKey:!0,keywords:[this._tag]});if(!e.length)return!1;var a=o.a.createElement("div",{className:"paragraph"},"\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0441 \u0442\u0435\u0433\u043e\u043c ",t),n=e.map(function(e,t){return!e.hidden&&o.a.createElement(g.a,{className:"link",key:t,to:"/pages/".concat(b(e.name))},e.name)});return o.a.createElement(o.a.Fragment,null,a,n)}},{key:"render",value:function(){var e=this.getContent.call(this);return e?o.a.createElement(f,{content:e,context:{name:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0435\u0433\u0443: "+this._tag,type:"landing"}}):me()}}]),t}(n.Component),pe=function(e){var t=e.component;return o.a.createElement(t,e)},de=ee.map(function(e,t){return o.a.createElement(l.a,{path:"/pages/".concat(b(e.name)),component:pe.bind(void 0,e),key:t})}),fe=function(){return o.a.createElement(i.a,{basename:"/home"},o.a.createElement(c.a,null,de,o.a.createElement(l.a,{path:"/tags/:tag/",component:he}),o.a.createElement(l.a,{exact:!0,path:"/",component:ie}),o.a.createElement(l.a,{path:"/*",component:me})))},ge=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(fe,null))};Object(r.render)(o.a.createElement(s.a,null,o.a.createElement(ge,null)),document.getElementById("root"))},27:function(e,t,a){e.exports=a.p+"static/media/regexcrossword.e8f3976e.png"},29:function(e,t,a){e.exports=a.p+"static/media/404.34afe3ea.png"},32:function(e,t,a){e.exports=a(267)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){}},[[32,1,2]]]);
//# sourceMappingURL=main.328fc3db.chunk.js.map