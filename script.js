function greeting() {
console.log(`Я учу JavaScript!`)
}
greeting();

let image = document.getElementById("image");

console.log(image.src);

function changeImageNext() {
    
    if (image.src == "http://127.0.0.1:5500/ITGIRLSSCHOOL/week10/assets/firstCat.jpg") {
        image.src = "./assets/secondCat.jpg";
    } else
    if (image.src == "http://127.0.0.1:5500/ITGIRLSSCHOOL/week10/assets/secondCat.jpg") {
        image.src = "./assets/thirdCat.jpg";
    } else
    if (image.src == "http://127.0.0.1:5500/ITGIRLSSCHOOL/week10/assets/thirdCat.jpg") {
        image.src = "./assets/firstCat.jpg";
    }
    

}
function changeImagePrevious() {
    if (image.src == "http://127.0.0.1:5500/ITGIRLSSCHOOL/week10/assets/firstCat.jpg") {
            image.src = "./assets/thirdCat.jpg";
    } else
    if (image.src == "http://127.0.0.1:5500/ITGIRLSSCHOOL/week10/assets/secondCat.jpg") {
            image.src = "./assets/firstCat.jpg";
    } else
    if (image.src == "http://127.0.0.1:5500/ITGIRLSSCHOOL/week10/assets/thirdCat.jpg") {
            image.src = "./assets/secondCat.jpg";
    }
    }

function calculateTotalPrice(quantity="2", price="15000000") {
let TotalPrice = quantity * price;
alert(`Стоимость покупки: ${TotalPrice.toLocaleString("ru-RU")} рублей.`);
let h2 = document.getElementById("h2");
h2.textContent = `Стоимость покупки: ${TotalPrice.toLocaleString("ru-RU")} рублей.`;
}