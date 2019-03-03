import {
    lighthouse,
    cssLogo,
    compare2Texts,
    cssTasks,
    cssGradient,
    uaParser,
    devtoolsDetect,
    userfulSites,
    userfulArticles
} from './all'

const pages = [
    {
        name: 'Lighthouse',
        component: lighthouse,
        keywords: ['npm', 'js', 'node', 'devtools', 'chrome']
    },
    {
        name: 'Css logo',
        component: cssLogo,
        keywords: ['css', 'animation']
    },
    {
        name: 'Compare 2 texts',
        component: compare2Texts,
        keywords: ['js', 'algorithm', 'utils', 'compare']
    },
    {
        name: 'Css tasks',
        component: cssTasks,
        keywords: ['css', 'tasks'],
        hidden: true
    },
    {
        name: 'Css gradient',
        component: cssGradient,
        keywords: ['css', 'gradient'],
        hidden: true
    },
    {
        name: 'UserAgent parser online',
        component: uaParser,
        keywords: ['parser', 'npm', 'utils', 'tools']
    },
    {
        name: 'Devtools detect',
        component: devtoolsDetect,
        keywords: ['devtools', 'inspect', 'utils', 'tools']
    },
    {
        name: 'Userful sites',
        component: userfulSites,
        keywords: ['sites', 'useful']
    },
    {
        name: 'Userful articles',
        component: userfulArticles,
        keywords: ['sites', 'articles', 'useful']
    },
]

export default pages
