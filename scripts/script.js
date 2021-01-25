let scrollFun = (selector) => {
    let selectedElem = document.querySelector(selector)
    scrollTo({
        top: selectedElem.getBoundingClientRect().y,
        behavior: "smooth"
    })
}

let workFilterSelect = (elem) => {
    let btns = document.querySelectorAll(".work__btns__item")

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active")
        btns[i].disabled = false
    }

    elem.classList.add("active")
    elem.disabled = true

    /* Filter */
    let all = document.querySelectorAll(".all"),
        web = document.querySelectorAll(".web"),
        apps = document.querySelectorAll(".apps"),
        icons = document.querySelectorAll(".icons__work"),
        container = document.querySelector('.examples')

    switch (elem.innerHTML) {
        case "ALL":
            for (let i = 0; i < all.length; i++) {
                all[i].style.opacity = "0"
                setTimeout(() => {
                    all[i].style.position = "absolute"
                }, 300)
            }
            for (let i = 0; i < all.length; i++) {
                setTimeout(() => {
                    all[i].style.position = "static"
                    all[i].style.opacity = "1"
                }, 350)
            }
            break
        case "WEB":
            for (let i = 0; i < all.length; i++) {
                all[i].style.opacity = "0"
                setTimeout(() => {
                    all[i].style.position = "absolute"
                }, 300)
            }
            for (let i = 0; i < web.length; i++) {
                setTimeout(() => {
                    web[i].style.position = "static"
                    web[i].style.opacity = "1"
                }, 350)
            }
            break
        case "APPS":
            for (let i = 0; i < all.length; i++) {
                all[i].style.opacity = "0"
                setTimeout(() => {
                    all[i].style.position = "absolute"
                }, 300)
            }
            for (let i = 0; i < apps.length; i++) {
                setTimeout(() => {
                    apps[i].style.position = "static"
                    apps[i].style.opacity = "1"
                }, 350)
            }
            break
        case "ICONS":
            for (let i = 0; i < all.length; i++) {
                all[i].style.opacity = "0"
                setTimeout(() => {
                    all[i].style.position = "absolute"
                }, 300)
            }
            for (let i = 0; i < icons.length; i++) {
                setTimeout(() => {
                    icons[i].style.position = "static"
                    icons[i].style.opacity = "1"
                }, 350)
            }
            break
    }
}

let loadMoreWorks = (elem, status) => {
    let all = document.querySelectorAll(".all"),
        web = document.querySelectorAll(".web"),
        apps = document.querySelectorAll(".apps"),
        icons = document.querySelectorAll(".icons__work"),
        container = document.querySelector('.examples')

    switch (status) {
        case false:
            container.style.height = String(410 * Math.ceil(all.length / 2)) + "px"
            elem.innerHTML = "CLOSE PROJECTS"
            elem.setAttribute("onclick", "loadMoreWorks(this, true)")
            break
        case true:
            container.style.height = String(820) + "px"
            elem.innerHTML = "LOAD MORE PROJECTS"
            elem.setAttribute("onclick", "loadMoreWorks(this, false)")
            break
    }
}