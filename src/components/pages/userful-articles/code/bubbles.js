import React from 'react';

const bubbles = () => (
    <svg width='150' height='150' viewBox="0 0 200 200">
        <defs>
            <linearGradient id="gradient--colors"
                x1="0" y1="100%"
                x2="100%" y2="0">
                <stop offset="0%"
                    stopColor="dodgerblue" />
                <stop offset="50%"
                    stopColor="fuchsia" />
                <stop offset="100%"
                    stopColor="yellow" />
            </linearGradient>

            <radialGradient id="gradient--colors-transparency"
                fx="25%" fy="25%">
                <stop offset="0%"
                    stopColor="black" />
                <stop offset="30%"
                    stopColor="black"
                    stopOpacity=".2" />
                <stop offset="97%"
                    stopColor="white"
                    stopOpacity=".4" />
                <stop offset="100%"
                    stopColor="black" />
            </radialGradient>

            <mask id="mask--colors-transparency">
                <rect fill="url(#gradient--colors-transparency)"
                    width="100%" height="100%"></rect>
            </mask>

            <radialGradient id="gradient--bw-light" fy="10%">
                <stop offset="60%"
                    stopColor="black"
                    stopOpacity="0" />
                <stop offset="90%"
                    stopColor="white"
                    stopOpacity=".25" />
                <stop offset="100%"
                    stopColor="black" />
            </radialGradient>

            <mask id="mask--light-bottom">
                <rect fill="url(#gradient--bw-light)"
                    width="100%" height="100%"></rect>
            </mask>

            <mask id="mask--light-top">
                <rect fill="url(#gradient--bw-light)"
                    width="100%" height="100%"
                    transform="rotate(180, 100, 100)"></rect>
            </mask>

            <radialGradient id="gradient--spot" fy="20%">
                <stop offset="10%"
                    stopColor="white"
                    stopOpacity=".7" />
                <stop offset="70%"
                    stopColor="white"
                    stopOpacity="0" />
            </radialGradient>
        </defs>

        <ellipse rx="40" ry="20" cx="150" cy="150"
            fill="url(#gradient--spot)"
            transform="rotate(-225, 150, 150)">
        </ellipse>

        <circle r="50%" cx="50%" cy="50%"
            fill="aqua"
            mask="url(#mask--light-bottom)">
        </circle>

        <circle r="50%" cx="50%" cy="50%"
            fill="yellow"
            mask="url(#mask--light-top)">
        </circle>


        <ellipse rx="55" ry="25" cx="55" cy="55"
            fill="url(#gradient--spot)"
            transform="rotate(-45, 55, 55)">
        </ellipse>

        <circle r="50%" cx="50%" cy="50%"
            fill="url(#gradient--colors)"
            mask="url(#mask--colors-transparency)">
        </circle>

    </svg>
)

export default bubbles
