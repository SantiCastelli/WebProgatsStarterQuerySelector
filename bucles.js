console.log("he cargado bucles");

// vamos a hacer que aparezcan tantos iconos de gatitos como gatos hay para adoptar.

let gatito = document.createElement("img");
gatito.style.width = "50px"
gatito.src = "./img/logo.webp"

let footer = document.querySelector(".footer");

footer.appendChild(gatito)

for (let i=0; i<numGatos; i++) {
    footer.appendChild(gatito)
    gatito = document.createElement("img");
    gatito.style.width = "50px"
    gatito.src = "./img/logo.webp"
}

let veronica = document.querySelector("card__veronica")

let despedida = document.createElement("p");
despedida.textContent = "¡Gracias por visitar nuestra web!";
despedida.style.color = "green";
despedida.style.fontSize = "50px";
despedida.style.textAlign = "center"

let body = document.querySelector("body");
body.appendChild(despedida);




