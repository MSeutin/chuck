let btnJ = document.querySelector(".get-joke");
let display = document.querySelector(".display");

btnJ.addEventListener("click", joke);

function joke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(resolve => resolve.json())
        .then(data => {
            display.innerHTML = `<h2>${data.value}</h2>`;
        })
        .catch(error => console.error(error));
}