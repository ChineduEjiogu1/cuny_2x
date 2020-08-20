let container = document.getElementById("#container");
console.log(container);

let queryContainer = document.getElementById("container");

let secondItems = document.getElementsByClassName("second");
console.log(secondItems);

let olThirdClass = document.querySelector("ol.third");
console.log(olThirdClass);

queryContainer.innerHTML = "Hello!";

const divFooter = document.querySelector("div.footer");
divFooter.classList.add("main");

divFooter.classList.remove("main");

const newElement = document.createElement('li');

newElement.innerHTML = "four";

document.querySelector("ul").appendChild(newElement);

const listItemsOl = document.querySelectorAll("ol li");
for(let i = 0; i < listItemsOl.length; i++){
    console.log(listItemsOl[i]);
    listItemsOl[i].style.color = "green";
}

const footer = document.querySelector(".footer");
footer.remove();