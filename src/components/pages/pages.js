import {
    lighthouse,
    cssLogo,
    compare2Texts,
    cssTasks,
    uaParser,
    devtoolsDetect,
    usefulSites,
    usefulArticles
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
        name: 'Useful sites',
        component: usefulSites,
        keywords: ['sites', 'useful']
    },
    {
        name: 'Useful articles',
        component: usefulArticles,
        keywords: ['sites', 'articles', 'useful']
    },
]

export default pages
