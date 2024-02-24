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
    console.log(product.short_description);

    const productName = product.name;
    const productDescription = product.short_description;
    const productImage = product.images[0].src;
    const productAttributes = product.description;
    const basePrice = product.prices.price;
    const productCurrency = product.prices.currency_prefix;
    const productPrice = basePrice / 100;

    
    
    const productDescriptionClass = productDescription.replace("<p>", '<p class="FPS_description">');
    const productAttributesClass = productAttributes.replace("<p>", '<p class="FPS_attributes">');

    console.log(productDescriptionClass);

    
    container.innerHTML = `<div class="FPS_box">
    <h2>${productName}</h2>
    <img src=${productImage}>
    <p class="FPS_price-tag">${productCurrency}${productPrice}</p>
    ${productDescriptionClass}
    ${productAttributes}</p>
    </div>`
    }

    catch(error) {
        console.log(error);
    }
}

getProduct(urlSingle);

