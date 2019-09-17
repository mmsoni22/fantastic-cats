let cats = ["Bella", "Lola", "Lucy", "Luna", "Zoe"];
let images = ["img/Bella.jpg", "img/Lola.jpg", "img/Lucy.jpg", "img/Luna.jpg", "img/Zoe.jpg"];

for (let i =0; i< cats.length; i++) {
   let cat = cats[i];
   let image = images[i];
   let clickCounter = 0;

 //create List of cats
   let catContainer = document.querySelector(".cat-list");
   let catListItem = document.createElement("li");
   catListItem.innerHTML = cat;

   catContainer.appendChild(catListItem);
   
// dispay cats 
let catDisplay = document.querySelector(".cat-display");

let clickNumber = document.querySelector(".click-number");

catListItem.addEventListener("click", (function(e) {
    return function(e) {
        catDisplay.innerHTML = "";

    let catImg = document.createElement("img");
    catImg.src = image;

    let catName = document.createElement("h3");
    catName.innerHTML = cat;

    catDisplay.appendChild(catImg);
    catDisplay.appendChild(catName);

    clickNumber.innerHTML = clickCounter;

catImg.addEventListener("click", (function(e) {
    return function(e) {
        clickCounter++;
        clickNumber.innerHTML = clickCounter;
    };
})(cat));
};
})(cat));
};
