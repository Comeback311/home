export default 
`[...document.getElementsByTagName('*')].forEach(elem => {
    elem.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})`
