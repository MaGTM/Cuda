// Scroll to element Script
let scrollFun = (selector) => {
    let selectedElem = document.querySelector(selector)
    scrollTo({
        top: selectedElem.getBoundingClientRect().y,
        behavior: "smooth"
    })
}

// Works Filter
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

// Load More Works Button
let loadMoreWorks = (elem, status) => {
    let all = document.querySelectorAll(".all"),
        container = document.querySelector('.examples');
    switch (status) {
        case false:
            if(window.screen.width < 768) {
                container.style.height = String(Number(getComputedStyle(all[0]).height.split("px")[0]) * all.length) + "px"
            } else {
                container.style.height = String(Number(getComputedStyle(all[0]).height.split("px")[0]) * Math.ceil(all.length / 2)) + "px"
            }
            elem.innerHTML = "CLOSE PROJECTS"
            elem.setAttribute("onclick", "loadMoreWorks(this, true)")
            break
        case true:
            container.style.height = String(Number(getComputedStyle(all[0]).height.split("px")[0])*2) + "px"
            elem.innerHTML = "LOAD MORE PROJECTS"
            elem.setAttribute("onclick", "loadMoreWorks(this, false)")
            break
    }
}

// Contact Form labels animation
let inputs = document.querySelectorAll(".input"),
    firstnameLabel = document.querySelector("#firstname__label"),
    emailLabel = document.querySelector("#email__label"),
    messageLabel = document.querySelector("#message__label");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", (e) => {
        switch (e.target.name) {
            case "firstname":
                firstnameLabel.style.top = "-20px"
                break
            case "email":
                emailLabel.style.top = "-20px"
                break
            case "message":
                messageLabel.style.top = "-30px"
                break
        }
    })
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", (e) => {
        switch (e.target.name) {
            case "firstname":
                if(inputs[i].value) {
                    break
                }
                firstnameLabel.style.top = "50%"
                break
            case "email":
                if(inputs[i].value) {
                    break
                }
                emailLabel.style.top = "50%"
                break
            case "message":
                if(inputs[i].value) {
                    break
                }
                messageLabel.style.top = "10px"
                break
        }
    })
}

// Form Submitting
let form = document.querySelector("#form"),
    error = document.querySelector("#error"),
    button = document.querySelector("#form__button");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    button.disabled = true
    error.style.opacity = 1

    setTimeout(() => {
        button.disabled = false
        error.style.opacity = 0
    }, 2000)
})