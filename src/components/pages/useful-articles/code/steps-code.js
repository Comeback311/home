export default
`div {
    width: 5em;
    height: 5em;
    border: 0.2em solid mediumturquoise;
    border-radius: 50%;
    font-size: 1.2em;
    position: relative;
}

div:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0.1em;
    height: 2.8em;
    left: 3.7em;
    top: 3.7em;
    background: mediumturquoise;
    animation: timing 60s infinite steps(60);
    transform-origin: 0 0;
}

@keyframes timing {
    100% {
        transform: rotate(360deg);
    }
}`
