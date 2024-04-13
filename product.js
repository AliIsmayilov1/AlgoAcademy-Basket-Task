function getProduct() {
    return JSON.parse(localStorage.getItem("product") || "[]")

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
let myBasket = []
function addToBasket(x) {
    let fl = 1
    for (let i = 0; i < myBasket.length; i++) {
        if (myBasket[i] == x) {
            fl = 0
        }
    }
    if (fl == 1) {
        myBasket.push(x)
    }
}
function basket() {
    let x = ""
    let prd = getProduct()
    for (let i = 0; i < myBasket.length; i++) {
         x += `
        <div id="${prd[myBasket[i]].id}">
            <img src="${prd[myBasket[i]].picture}" alt="">
            <p id="name">${prd[myBasket[i]-1].name}</p>
            <p id="price">${prd[myBasket[i]-1].price}</p>
            <p id="${prd[myBasket[i]-1].id}" class="btn" onclick="addToBasket(${prd[i].id})" >Add to basket</p>
        </div>
        `
        document.getElementById("main").innerHTML = x
    }
    console.log(myBasket);

}
generateProduct()