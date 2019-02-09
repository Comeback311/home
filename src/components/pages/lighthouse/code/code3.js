export default `lighthouse
<span class='code__comment'># saves './<HOST>_<DATE>.report.html'</span>

lighthouse --output json
<span class='code__comment'># json output sent to stdout</span> 

lighthouse --output html --output-path ./report.html
<span class='code__comment'># saves './report.html'</span> 

<span class='code__comment'># NOTE: specifying an output path with multiple formats ignores your specified extension for *ALL* formats</span> 
lighthouse --output json --output html --output-path ./myfile.json
<span class='code__comment'># saves './myfile.report.json' and './myfile.report.html'</span> 

lighthouse --output json --output html
<span class='code__comment'># saves './<HOST>_<DATE>.report.json' and './<HOST>_<DATE>.report.html'</span> 

lighthouse --output-path=~/mydir/foo.out --save-assets
<span class='code__comment'># saves '~/mydir/foo.report.html'</span> 
<span class='code__comment'># saves '~/mydir/foo-0.trace.json' and '~/mydir/foo-0.devtoolslog.json'</span> 

lighthouse --output-path=./report.json --output json
<span class='code__comment'># saves './report.json'</span>`;
