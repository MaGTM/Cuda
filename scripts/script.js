let scrollFun = (selector) => {
    let selectedElem = document.querySelector(selector)
    scrollTo({
        top: selectedElem.getBoundingClientRect().y,
        behavior: "smooth"
    })
}