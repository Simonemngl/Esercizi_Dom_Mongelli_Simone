// DOM --> Document Object Model 
console.dir(document)
let wrapper = document.querySelector("#wrapper")

// crea tag html 
let button = document.createElement("button")

// aggiungere stile
button.classList.add("btn", "btn-outline-primary")
button.innerHTML = "Cliccami per togliere i paragrafi"
// appendi al contenitore
wrapper.appendChild(button)


let paragrafo = document.querySelectorAll("p")

button.addEventListener("click", ()=>{
    paragrafo.forEach((p) => {
        p.classList.toggle("d-none")
    });
})



// creo bottone per cambiare i colori dei paragrafi 

let wrapper1= document.querySelector("#wrapper1")

let button1 = document.createElement("button1")

button1.classList.add("btn", "btn-outline-success", "mt-3")

button1.innerHTML = "cliccami per cambiare colore"

wrapper1.appendChild(button1);



// cambia colore al click
function color(){
    return`
    
    rgb(${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`
};

button1.addEventListener("click", ()=>{
   paragrafo.forEach((p) => {
    p.style.color = color();
   });
});

// creo bottone per cambiare il grassetto

let wrapper2= document.querySelector("#wrapper2")

let button2 = document.createElement("button2")

button2.classList.add("btn", "btn-outline-danger", "mt-3")

button2.innerHTML = "cliccami per mettere il grassetto"

wrapper2.appendChild(button2);

button2.addEventListener("click",()=>{
    paragrafo.forEach((p)=>{
    p.classList.toggle("fw-bold")
    });
})
let card = document.querySelector("#cardwrapper")
let smartphone= [
    {"marca": "iphone", "modello":"iphone14", "colore":"nero"},
    {"marca": "samsung", "modello":"S22", "colore":"verde"},
    {"marca": "xiaomi", "modello":"x", "colore":"bianco"},
]



function creatCard() {
    smartphone.forEach(element=>{
        let div= document.createElement("div")
div.classList.add("col-3", "col-md-12")

div.innerHTML= `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${element.marca}</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

cardwrapper.appendChild(div)
    })
}

creatCard();

























