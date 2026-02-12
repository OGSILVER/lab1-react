var user = 32
let prof = "crist"
const pi = true

function typeofVar(a){
    return typeof a
}

function convert(a){
    if(typeof a === "number"){
        return a.toString()
    } else if (typeof a === "string"){
        try {
            return parseInt(a)
        } catch (e) {
            return "Cannot convert to number"
        }
    }
    return "Unsupported type"
}

let nume = "Dragos"
let virsta = 19

console.log('Numele meu este ' + nume + ' si am ' + virsta + ' ani.')

var num1 = 10
var num2 = 5

num3 = num1
num1 = num2 
num2 = num3 

function isItNullOrNah(a){
    if(isItNullOrNah === null){
        return("its null")
    }else if(isItNullOrNah === undefined){
        return("its null")
    }else{
        return("neither")
    }
}

let perosn = {
    name: "Dragos",
    age: 19,
    isAlive: true
}

person[1].delete("age")
person.prenume = "Dragos";
console.log(person)

let arr = ["doi", 1, true, undefined, 3.14]

function typeofArr(arr){
    console.log(arr.map(element => typeof element))
}







//1. Variabile și Tipuri de date
// 1.1 Declarați trei variabile utilizând *var*, *let*, și *const*. Atribuiți-le valori de tip *number*, *string* și *boolean*.
// 1.2 Scrieți o funcție care primește o variabilă ca parametru și returnează tipul său de date utilizând *typeof*.
// 1.3 Convertiți o valoare de tip *string* în *number* și invers. Exemplu: "123" → 123 și 456 → "456".
// 1.4 Declarați două variabile (**nume**, **varsta**) și creați o propoziție utilizând șabloane de string-uri (*template literals* - ``).
// 1.5 Folosiți o variabilă temporară pentru a schimba valorile dintre două variabile.
// 1.6 Scrieți o funcție care verifică dacă o variabilă este de tip *null* sau *undefined*.
// 1.7 Creați un obiect cu mai multe proprietăți (*string*, *number*, *boolean*). Adăugați și eliminați dinamic o proprietate la obiect.
// 1.8 Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.
//2. Funcții
// 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.
function sum(a, b){return a + b}
// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de **1**.
function areaDreptunghi(lenght , height = 1){return lenght * height}
// 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.
a = function(x){return x * x}
// 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.
function countUpperCase(str){
    let upperStr = str.toUpperCase()
    return upperStr.length
}
// 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.
function doubleFun(x){return x+x }

function mainFunction(x){
return doubleFun(x), a(x)
}
// 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.
const sumArrow = (a, b) => a + b
// 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array. 
function applyFunctionToArray(arr, func){
    return arr.map(func)
}
//3. Obiecte
// 3.1 Declarați un obiect **masina** cu următoarele proprietăți: **marca**, **model**, și **an**. Atribuiți valori pentru fiecare proprietate.
masina = {
    marca: "Dacia",
    model: "Logan",
    an: 2010
}

console.log(masina.marca)
console.log(masina["model"])    
console.log(masina[1])

masina.culoare = "rosu"
masina.an = 2012

delete masina.model

for (let key in masina) {
    console.log(key + ": " + masina[key])
}

masina.metoda = function() {
    return "Marca: " + this.marca + ", An: " + this.an + ", Culoare: " + this.culoare
}

persoana = {nume: "Dragos", varsta: 19}
function greePerson(persoana){
    return "Salut, numele meu este " + persoana.nume + " si am " + persoana.varsta + " ani."
}

if("culoare" in masina){
    console.log("Masina are culoare")
}

casa = {
    adresa: {
        strada: 'Strada Exemplu',
        oras: 'Oras Exemplu'
    }
};

function createStudent(nume, varsta, nota){
    return student ={
        nume: nume,
        varsta: varsta,
        nota: nota
    }
}

let masinaClone1 = Object.assign({}, masina)
let masinaClone2 = {...masina}

calculator = {
    adunare: function(a, b){return a + b},
    scadere: function(a, b){return a - b},
    inmultire: function(a, b){return a * b},
    impartire: function(a, b){return a / b}
}

let {marca, an} = masina
arr = ["Bucuresti", "Cluj", "Timisoara"]
console.log(arr[0])
console.log(arr[arr.length - 1])

arr.push("Iasi")
arr.unshift("Constanta")
arr.pop()

let colors = ["rosu", "verde", "albastru"]
for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

arr = ["caine", "pisica", "iepure"]
arr.forEach(animal => {
    console.log("Animalul meu preferat este " + animal)
})

function maiMareDeZece(arr){
    return arr.filter(num => num > 10)
}

arr = [5, 2, 9, 1, 5, 6]
arr.sort((a, b) => a - b)

function patrate(arr){
    return arr.map(num => num * num)
}

function suma(arr){
    return arr.reduce((acc, num) => acc + num, 0)
}

function checkElement(arr, element){
    if(arr.includes(element)){
        return "Elementul exista in array"
    } else {
        return "Elementul nu exista in array"
    }
}

function checkElementIndex(arr, element){
    let index = arr.indexOf(element)
    if(index !== -1){
        return "Elementul exista in array la indexul " + index
    } else {
        return "Elementul nu exista in array"
    }
}

let arr1 = ["Bun", "Ziua"]
let arr2 = ["Brat"]
let combinedArr = arr1.concat(arr2)

let combinedArr2 = [...arr1, ...arr2]

let matrix = [
    [1, 2],
    [3, 4]
]
console.log(matrix[0][1])

function removeDuplicates(arr){
    return [...new Set(arr)]
}

arr = [1, 2, 3, 4, 5]
let subArr = arr.slice(1, 4)
arr.splice(2, 1)
let h1Element = document.getElementById("myHeading")
h1Element.textContent = "Textul a fost schimbat!"

let liElements = document.querySelectorAll("li")
liElements.forEach(li => {
    li.style.color = "red"
})

let pElement = document.createElement("p")
pElement.textContent = "Acesta este un paragraf nou."
let containerDiv = document.getElementById("container")
containerDiv.appendChild(pElement)

let imgElement = document.querySelector("img")
imgElement.src = "https://pinterest.com/image.jpg"

let boxElement = document.getElementById("box")
boxElement.classList.add("new-class")

let pToRemove = document.querySelector("p")
pToRemove.parentNode.removeChild(pToRemove)           

let button = document.querySelector("button")
let h2Element = document.querySelector("h2")
button.addEventListener("click", function() {
    h2Element.textContent = "Textul a fost schimbat la click!"
})

let inputField = document.querySelector("input[type='text']")
let displayParagraph = document.querySelector("#display")
inputField.addEventListener("input", function() {
    displayParagraph.textContent = inputField.value
})

let ulElement = document.querySelector("ul")
console.log(ulElement.firstElementChild.textContent)
console.log(ulElement.lastElementChild.textContent) 

let toggleButton = document.querySelector("#toggleButton")
let toggleElement = document.querySelector("#toggleElement")    
toggleButton.addEventListener("click", function() {
    toggleElement.classList.toggle("active")
})

let table = document.createElement("table")
for(let i = 0; i < 3; i++){
    let row = document.createElement("tr")
    for(let j = 0; j < 2; j++){
        let cell = document.createElement("td")
        cell.textContent = `R${i+1}C${j+1}`
        row.appendChild(cell)
    }
    table.appendChild(row)
}
document.body.appendChild(table)

let addButton = document.querySelector("#addButton")
let ulList = document.querySelector("#ulList")
addButton.addEventListener("click", function() {
    let newItem = document.createElement("li")
    newItem.textContent = "Element nou"
    ulList.appendChild(newItem)
})
setTimeout(function() {
    console.log("Acest mesaj a fost afișat după 3 secunde.")
}, 3000)

let count = 1
let intervalId = setInterval(function() {
    console.log(count)
    count++
    if(count > 5){
        clearInterval(intervalId)
    }
}, 1000)

function salut(callback){
    console.log("Salut! Acesta este un mesaj.")
    callback()
}

function promiseExample(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea a fost rezolvată după 2 secunde.")
        }, 2000)
    })
}

function PromisePosibil(num){
    return new Promise((resolve, reject) => {
        if(num > 10){
            resolve("Numărul este mai mare decât 10.")
        } else {
            reject("Numărul este mai mic sau egal cu 10.")
        }
    })
}

import { salutare } from './salutari.js'
async function asyncFunction(){
    let result = await salutare("Dragos")
    console.log(result)
}

function firstPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promisiune a fost rezolvată.")
        }, 1000)
    })
}

function secondPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("A doua promisiune a fost rezolvată.")
        }, 1000)
    })
}

function thirdPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("A treia promisiune a fost rezolvată.")
        }, 1000)
    })
}

firstPromise()
    .then(result => {
        console.log(result)
        return secondPromise()
    })
    .then(result => {
        console.log(result)
        return thirdPromise()
    })
    .then(result => {
        console.log(result)
    })      

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Eroare la preluarea datelor:', error)
    })

let promise1 = new Promise((resolve) => setTimeout(() => resolve("Promisiunea 1 rezolvată"), 1000))
let promise2 = new Promise((resolve) => setTimeout(() => resolve("Promisiunea 2 rezolvată"), 2000))
let promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Promisiunea 3 respinsă"), 1500))

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Toate promisiunile au fost rezolvate:", results)
    })
    .catch(error => {
        console.error("O promisiune a fost respinsă:", error)
    })

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log("Rezultatele tuturor promisiunilor:", results)
    })
import { adunare, scadere } from './mathUtils.js'
let c = adunare(5, 3)
let d = scadere(5, 3)

console.log(salutare("Dragos"))

let nume2 = "Dragos"
import { salutare as greet } from './salutari.js'
console.log(greet(nume2))

console.log(nume3, id, dateOfBirth, email)