import {
    lighthouse,
    cssLogo,
    compare2Texts,
    css,
    uaParser,
    devtoolsDetect,
    usefulSites,
    usefulArticles,
    js,
    utils,
    wow
} from './all'

import utilsIcon from './home-images/utils-icon.svg';
import wowIcon from './home-images/wow-icon.svg';
import materialsIcon from './home-images/materials-icon.svg';
import jsIcon from './home-images/js-icon.svg';
import cssIcon from './home-images/css-icon.svg';

// var pages = [
//     {
//         name: 'Lighthouse',
//         component: lighthouse,
//         keywords: ['npm', 'js', 'node', 'devtools', 'chrome']
//     },
//     {
//         name: 'Css logo',
//         component: cssLogo,
//         keywords: ['css', 'animation']
//     },
//     {
//         name: 'Compare 2 texts',
//         component: compare2Texts,
//         keywords: ['js', 'algorithm', 'utils', 'compare']
//     },
//     {
//         name: 'Css tasks',
//         component: cssTasks,
//         keywords: ['css', 'tasks'],
//         hidden: true
//     },
//     {
//         name: 'UserAgent parser online',
//         component: uaParser,
//         keywords: ['parser', 'npm', 'utils', 'tools']
//     },
//     {
//         name: 'Devtools detect',
//         component: devtoolsDetect,
//         keywords: ['devtools', 'inspect', 'utils', 'tools']
//     },
//     {
//         name: 'Useful sites',
//         component: usefulSites,
//         keywords: ['sites', 'useful']
//     },
//     {
//         name: 'Useful articles',
//         component: usefulArticles,
//         keywords: ['sites', 'articles', 'useful']
//     },
//     {
//         name: 'JS hacks',
//         component: js,
//         keywords: ['js', 'tools']
//     }
// ]

const pages = [{
    name: 'Полезные утилиты',
    path: 'utils',
    component: utils,
    icon: utilsIcon
}, {
    name: 'Интересно',
    path: 'wow',
    component: wow,
    icon: wowIcon
}, {
    name: 'Материалы',
    path: 'materials',
    component: usefulSites,
    icon: materialsIcon
}, {
    name: 'Интересные приемы в JavaScript',
    path: 'js',
    component: js,
    icon: jsIcon
}, {
    name: 'Интересные приемы в CSS',
    path: 'css',
    component: css,
    icon: cssIcon
}];

export default pages;
