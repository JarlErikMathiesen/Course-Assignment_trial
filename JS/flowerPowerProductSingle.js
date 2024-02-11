import { baseUrl } from "./constants.js";

const corsEnabledUrl = "https://noroffcors.onrender.com/" + baseUrl;
const container = document.querySelector(".products");


const urlPar = new URLSearchParams(document.location.search);
const id = urlPar.get("id");
const urlSingle = corsEnabledUrl + "/" + id;

async function getProduct (url) {

    try {   
    const response = await fetch(url);
    const json = await response.json();
    const product = json;

    console.log(product);
    console.log(urlPar);
    console.log(product.prices.price);

    const productName = product.name;
    const productDescription = product.short_description;
    const productImage = product.images[0].src;
    const productAttributes = product.description;
    const productPrice = product.prices.price;
    const productCurrency = product.prices.currency_prefix;


    
    container.innerHTML += `<div>
    <h2>${productName}</h2>
    <img src=${productImage}>
    <p class="list_of_jackets_price-tag">${productCurrency}${productPrice}</p>
    <p>${productDescription}</p>
    <p>${productAttributes}</p>
    </div>`
    }

    catch(error) {
        console.log(error);
    }
}

getProduct(urlSingle);

