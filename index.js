let potentialPresentors = ["Gina Russo",
"Matt Hitt",
"Stephanie Ruszkowski",
"Jeff Brigham",
"Jeff Melton",
"Gina A.",
"Dominic Prestia",
"Mary Lautz",
"Fokly Telemaque",
"Rebecca Hemstad",
"Ana",
"Emilia Muñiz"]

let times = [
    "7:05 pm",
    "7:10 pm",
    "7:15 pm",
    "7:20 pm",
    "7:25 pm",
    "7:30 pm",
    "7:35 pm",
    "7:55 pm",
    "8:00 pm",
    "8:05 pm",
    "8:10 pm",
    "8:15 pm",
]

let count = 1;

let button = document.querySelector("#add_presentor")
let table = document.querySelector("#presentation_table")

button.addEventListener("click", pickPresentor)

function pickPresentor(){

    let lengthOfArray = potentialPresentors.length
    let choosePresentorIndex = Math.floor(Math.random() * lengthOfArray)
    let presentor = potentialPresentors.splice(choosePresentorIndex, 1)

    let newRow = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    td1.innerText = times.shift()
    td2.innerText = presentor
    td3.innerText = `Speaker ${count}`

    newRow.append(td1)
    newRow.append(td2)
    newRow.append(td3)

    table.append(newRow)

    count++;
}