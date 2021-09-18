const leftArrow = document.getElementsByClassName("arrow--left")[0]
const rightArrow = document.getElementsByClassName("arrow--right")[0]

const pickerCircles = document.getElementsByClassName("circle");

const projectsCards = document.getElementsByClassName("projects__card")
let index = 0;

rightArrow.onclick = (() => {
    index < 2 ? index++ : index=0;
    Array.from(projectsCards).forEach((card) => {
        card.style.display = 'none'
    })
    projectsCards[index].style.display = 'block'

    Array.from(pickerCircles).forEach((circle) => {
        circle.classList.remove("selected")
    })

    pickerCircles[index].classList.add("selected")
})

leftArrow.onclick = (() => {
    index > 0 ? index-- : index=2;
    Array.from(projectsCards).forEach((card) => {
        card.style.display = 'none'
    })
    projectsCards[index].style.display = 'block'

    Array.from(pickerCircles).forEach((circle) => {
        circle.classList.remove("selected")
    })

    pickerCircles[index].classList.add("selected")
})


console.log(projectsCards)