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
// 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.
console.log(masina.marca)
console.log(masina["model"])    
console.log(masina[1])
// 3.3 Adăugați o proprietate nouă, **culoare**, și actualizați proprietatea an cu o valoare diferită.
masina.culoare = "rosu"
masina.an = 2012
// 3.4 Ștergeți proprietatea model din obiect.
delete masina.model
// 3.5 Folosiți *for...in* pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
for (let key in masina) {
    console.log(key + ": " + masina[key])
}
// 3.6 Adăugați o metodă descriere în obiectul **masina** care să returneze un string cu toate informațiile despre mașină.
masina.metoda = function() {
    return "Marca: " + this.marca + ", An: " + this.an + ", Culoare: " + this.culoare
}
// 3.7 Scrieți o funcție care primește un obiect **persoana** cu proprietăți **nume** și **varsta** și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
persoana = {nume: "Dragos", varsta: 19}
function greePerson(persoana){
    return "Salut, numele meu este " + persoana.nume + " si am " + persoana.varsta + " ani."
}
// 3.8 Verificați dacă obiectul **masina** conține o proprietate **culoare** utilizând operatorul *in*.
if("culoare" in masina){
    console.log("Masina are culoare")
}
// 3.9 Declarați un obiect **casa** care să conțină un alt obiect **adresa** cu proprietăți precum **strada** și **oras**.
casa = {
    adresa: {
        strada: 'Strada Exemplu',
        oras: 'Oras Exemplu'
    }
};
// 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect **student** cu proprietățile **nume**, **varsta** și **nota**.
function createStudent(nume, varsta, nota){
    return student ={
        nume: nume,
        varsta: varsta,
        nota: nota
    }
}
// 3.11 Folosiți *Object.assign* și operatorul *spread (...)* pentru a clona obiectul **masina** în alte obiecte.
let masinaClone1 = Object.assign({}, masina)
let masinaClone2 = {...masina}
// 3.12 Creați un obiect **calculator** cu metode pentru **adunare**, **scădere**, **înmulțire** și **împărțire**.
calculator = {
    adunare: function(a, b){return a + b},
    scadere: function(a, b){return a - b},
    inmultire: function(a, b){return a * b},
    impartire: function(a, b){return a / b}
}
// 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
let {marca, an} = masina
//4. Array-uri
// 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.
arr = ["Bucuresti", "Cluj", "Timisoara"]
console.log(arr[0])
console.log(arr[arr.length - 1])
// 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.
arr.push("Iasi")
arr.unshift("Constanta")
arr.pop()
// 4.3 Folosiți un *for* pentru a itera printr-un array de culori și afișați fiecare element.
let colors = ["rosu", "verde", "albastru"]
for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

// 4.4 Folosiți metoda *forEach* pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.
arr = ["caine", "pisica", "iepure"]
arr.forEach(animal => {
    console.log("Animalul meu preferat este " + animal)
})
// 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de **10**.
function maiMareDeZece(arr){
    return arr.filter(num => num > 10)
}
// 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.
arr = [5, 2, 9, 1, 5, 6]
arr.sort((a, b) => a - b)
// 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția *map*.
function patrate(arr){
    return arr.map(num => num * num)
}
// 4.8 Calculați suma elementelor dintr-un array folosind funcția *reduce*.
function suma(arr){
    return arr.reduce((acc, num) => acc + num, 0)
}
// 4.9 Verificați dacă un anumit element există într-un array folosind *includes* și *indexOf*.
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
// 4.10 Combinați două array-uri de cuvinte într-unul singur folosind *concat* sau operatorul *spread (...)*.
let arr1 = ["Bun", "Ziua"]
let arr2 = ["Brat"]
let combinedArr = arr1.concat(arr2)
// sau
let combinedArr2 = [...arr1, ...arr2]
// 4.11 Declarați un array bidimensional pentru o matrice **2x2** și accesați elementul de pe **linia 1**, **coloana 2**.
let matrix = [
    [1, 2],
    [3, 4]
]
console.log(matrix[0][1])
// 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.
function removeDuplicates(arr){
    return [...new Set(arr)]
}
// 4.13 Folosiți *slice* pentru a crea un sub-array și *splice* pentru a elimina elementul cu indexul **2**.
arr = [1, 2, 3, 4, 5]
let subArr = arr.slice(1, 4)
arr.splice(2, 1)
//5. Manipulări DOM 
// 5.1 Selectați un element **`<h1>`** dintr-un document HTML folosind *getElementById* și schimbați textul acestuia.
let h1Element = document.getElementById("myHeading")
h1Element.textContent = "Textul a fost schimbat!"
// 5.2 Selectați toate elementele *`<li>`* dintr-un document folosind *querySelectorAll* și schimbați culoarea textului.
let liElements = document.querySelectorAll("li")
liElements.forEach(li => {
    li.style.color = "red"
})
// 5.3 Creați un element **`<p>`**, adăugați un text în acesta și introduceți-l la sfârșitul unui element **`<div>`** cu ID-ul **container**.
let pElement = document.createElement("p")
pElement.textContent = "Acesta este un paragraf nou."
let containerDiv = document.getElementById("container")
containerDiv.appendChild(pElement)
// 5.4 Selectați o imagine și schimbați valoarea atributului *src*.
let imgElement = document.querySelector("img")
imgElement.src = "https://pinterest.com/image.jpg"
// 5.5 Adăugați o clasă nouă unui element cu ID-ul **box**.
let boxElement = document.getElementById("box")
boxElement.classList.add("new-class")
// 5.6 Eliminați un element **`<p>`** dintr-un document.     
let pToRemove = document.querySelector("p")
pToRemove.parentNode.removeChild(pToRemove)           
// 5.7 Adăugați un eveniment *click* unui buton, astfel încât să schimbe textul unui **`<h2>`** când este apăsat.
let button = document.querySelector("button")
let h2Element = document.querySelector("h2")
button.addEventListener("click", function() {
    h2Element.textContent = "Textul a fost schimbat la click!"
})
// 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.
let inputField = document.querySelector("input[type='text']")
let displayParagraph = document.querySelector("#display")
inputField.addEventListener("input", function() {
    displayParagraph.textContent = inputField.value
})
// 5.9 Selectați un element **`<ul>`** și afișați textul primului și ultimului copil.
let ulElement = document.querySelector("ul")
console.log(ulElement.firstElementChild.textContent)
console.log(ulElement.lastElementChild.textContent) 
// 5.10 Alternați o clasă **active** pe un element atunci când este apăsat un buton.
let toggleButton = document.querySelector("#toggleButton")
let toggleElement = document.querySelector("#toggleElement")    
toggleButton.addEventListener("click", function() {
    toggleElement.classList.toggle("active")
})
// 5.11 Creați dinamic un tabel HTML cu **3 rânduri** și **2 coloane**.
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
// 5.12 Creați o listă **`<ul>`** și adăugați elemente noi la apăsarea unui buton.
let addButton = document.querySelector("#addButton")
let ulList = document.querySelector("#ulList")
addButton.addEventListener("click", function() {
    let newItem = document.createElement("li")
    newItem.textContent = "Element nou"
    ulList.appendChild(newItem)
})
//6. Programare Asincronă
// 6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.
setTimeout(function() {
    console.log("Acest mesaj a fost afișat după 3 secunde.")
}, 3000)
// 6.2 Creați un cronometru care afișează numere de la **1** la **5**, câte unul pe secundă, și apoi se oprește.
let count = 1
let intervalId = setInterval(function() {
    console.log(count)
    count++
    if(count > 5){
        clearInterval(intervalId)
    }
}, 1000)
// 6.3 Scrieți o funcție **salut** care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.
function salut(callback){
    console.log("Salut! Acesta este un mesaj.")
    callback()
}
// 6.4 Creați o funcție care returnează un *Promise* ce se rezolvă după **2** secunde.
function promiseExample(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiunea a fost rezolvată după 2 secunde.")
        }, 2000)
    })
}
// 6.5 Creați o funcție care returnează un *Promise* ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.
function PromisePosibil(num){
    return new Promise((resolve, reject) => {
        if(num > 10){
            resolve("Numărul este mai mare decât 10.")
        } else {
            reject("Numărul este mai mic sau egal cu 10.")
        }
    })
}
// 6.6 Scrieți o funcție asincronă care apelează fucția de la punctul **7.4** și afișează rezultatul.
import { salutare } from './salutari.js'
async function asyncFunction(){
    let result = await salutare("Dragos")
    console.log(result)
}
// 6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț. 
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
// 6.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, **JSONPlaceholder** https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Eroare la preluarea datelor:', error)
    })
// 6.9 Folosiți *Promise.all* și *Promise.allSettled* pentru a aștepta rezolvarea mai multor promisiuni.
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
//7. Module ES
// 7.1 În fișierul **mathUtils.js** exportați două funcții simple pentru operații matematice: **adunare** și **scădere**.

// 7.2 În fișierul **main.js** importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.
import { adunare, scadere } from './mathUtils.js'
let c = adunare(5, 3)
let d = scadere(5, 3)
// 7.3 În fișierul **salutari.js** exportați implicit o funcție care afișează un mesaj de salut.

// 7.6 În fișierul **main.js** importați întregul modul și accesați valorile exportate.
console.log(salutare("Dragos"))
// 7.4 În fișierul **main.js** importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
let nume2 = "Dragos"
import { salutare as greet } from './salutari.js'
console.log(greet(nume2))
// 7.5 În fișierul  **dateUtilizator.js** exportați mai multe valori.
console.log(nume3, id, dateOfBirth, email)