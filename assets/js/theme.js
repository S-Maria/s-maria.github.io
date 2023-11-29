const switchThemeLight = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('theme')
    rootElem.setAttribute('theme', 'light')
    localStorage.setItem('theme', 'light')
}

document.querySelector('#lightTheme').addEventListener('click', switchThemeLight)

const switchThemeDark = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('theme')
    rootElem.setAttribute('theme', 'dark')
    localStorage.setItem('theme', 'dark')
}

document.querySelector('#darkTheme').addEventListener('click', switchThemeDark)

const switchThemeRed = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('theme')
    rootElem.setAttribute('theme', 'red')
    localStorage.setItem('theme', 'red')
}

document.querySelector('#redTheme').addEventListener('click', switchThemeRed)

const switchThemePastel = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('theme')
    rootElem.setAttribute('theme', 'pastel')
    localStorage.setItem('theme', 'pastel')
}

document.querySelector('#pastelTheme').addEventListener('click', switchThemePastel)