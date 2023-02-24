const btn = document.querySelector("#btn")

const h1 = document.querySelector("h1")

const wrapper = document.querySelector("#wrapper")

const pmText = document.querySelector("#pm")

const header = document.querySelector("#header")

const main = document.querySelector("main")

const modal = document.querySelector("#modal")

const container = document.querySelector("#container")

let soat = 0

let minut = 0

modal.classList.toggle("hidden")

function clock() {
    const date = new Date();
    soat = date.getHours();
    minut = date.getMinutes();
    h1.textContent = `${soat}:${minut}`

    if (soat < 12) {

        wrapper.style.backgroundImage = `url('../img/png/day.png')`

        document.body.style.backgroundColor = "#111"

    } else if (soat >= 12) {

        pmText.textContent = "GOOD EVENING, IT'S CURRENTLY"

        wrapper.style.backgroundImage = `url('../img/png/night.png')`

    }

}

clock()


btn.addEventListener("click", () => {

    header.classList.toggle("hidden")

    main.classList.toggle("to-top")

    if (soat >= 12) {
        modal.classList.toggle("hidden")

        modal.classList.toggle("night-modal")

        container.classList.toggle("hidden")

    }
    else {
        modal.classList.toggle("hidden")

        modal.classList.toggle("day-modal")

        container.classList.toggle('hidden')

    }
})