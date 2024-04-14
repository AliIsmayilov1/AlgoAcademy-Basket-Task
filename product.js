function getProduct() {
    return JSON.parse(localStorage.getItem("product") || "[]")
}
function getBasket() {
    return JSON.parse(localStorage.getItem("basket") || "[]")
}
function setBasket(arr) {
    localStorage.setItem("basket", JSON.stringify(arr))
}

function generateProduct() {
    let x = ""
    let prd = getProduct()
    for (let i = 0; i < prd.length; i++) {
        x += `
        <div id="${prd[i].id}">
            <img src="${prd[i].picture}" alt="">
            <p id="name">${prd[i].name}</p>
            <p id="price">${prd[i].price}</p>
            <p id="${prd[i].id}" class="btn" onclick="addToBasket(${prd[i].id})" >Add to basket</p>
        </div>
        `
        document.getElementById("main").innerHTML = x
    }
}
function addToBasket(x) {
    let fl = 1
    let basket = getBasket()
    for (let i = 0; i < basket.length; i++) {
        if (basket[i] == x) {
            fl = 0
            break;
        }
    }
    if (fl == 1) {
        basket.push(x)
        setBasket(basket)
    }
}
function basket() {
    let x = ""
    let prd = getProduct()
    let totalPrice = 0
    let basket = getBasket()
    for (let i = 0; i < prd.length; i++) {
        if(basket.includes(prd[i].id)){
        x += `
        <div id="${prd[i].id}">
        <img src="${prd[i].picture}" alt="">
        <p id="name">${prd[i].name}</p>
        <p id="price">${prd[i].price}</p>
            <p id="${prd[i].id}" class="btn" onclick="addToBasket(${prd[i].id})" >Add to basket</p>
            <i onclick="removeFromBasket(${prd[i].id})" title="Remove from basket" class="fa-solid fa-xmark"></i>
            </div>
            `
        document.getElementById("main").innerHTML = x;
        totalPrice += +prd[i].price
        }
    }
    x += `<h1>Total Price: ${totalPrice}$</h1>`
    document.getElementById("main").innerHTML = x;
    document.getElementById("bskt").style.display = "none"
    document.getElementById("menu").style.display = "block"
    setBasket(basket)
}
function backToMenu() {
    generateProduct()
    document.getElementById("bskt").style.display = "block"
    document.getElementById("menu").style.display = "none"
}
function removeFromBasket(x) {
    let oldBasket = getBasket()
    let newBasket = []
    for(let i = 0;i<oldBasket.length;i++){
        if(oldBasket[i] != x){
            newBasket.push(oldBasket[i])
        }
    }
    setBasket(newBasket)
    basket()
}
generateProduct()
