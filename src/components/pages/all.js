import lighthouse from './lighthouse'
import css3logo from './css3-logo'
import compare2Texts from './compare-2-texts'
import cssTasks from './css-tasks'
import cssGradient from './css-gradient'
import uaParser from './ua-parser'

const pages = [
    {
        name: 'lighthouse',
        component: lighthouse,
        keywords: ['npm', 'js', 'node', 'devtools', 'chrome']
    },
    {
        name: 'css3 logo',
        component: css3logo,
        keywords: ['css', 'animation']
    },
    {
        name: 'compare 2 texts',
        component: compare2Texts,
        keywords: ['js', 'algorithm', 'utils', 'compare']
    },
    {
        name: 'css tasks',
        component: cssTasks,
        keywords: ['css', 'tasks'],
        hidden: true
    },
    {
        name: 'css gradient',
        component: cssGradient,
        keywords: ['css', 'gradient']
    },
    {
        name: 'UserAgent parser online',
        component: uaParser,
        keywords: ['parser', 'npm', 'utils']
    }
]

export default pages
