import { baseUrl } from "./constants.js";
/* const baseUrl = "http://jarlerm.no/wp-json/wc/store/products"; */
const corsEnabledUrl = "https://noroffcors.onrender.com/" + baseUrl;
const container = document.querySelector(".products");
const containerThumbnails = document.querySelector(".thumbnails")

async function getProducts (url) {

    try {   
    const response = await fetch(url);
    const json = await response.json();
    const products = json;

    containerThumbnails.innerHTML = `<h2>you may also like</h2>`


    for (let i = 0; i < products.length; i++) {
    
        const productName = products[i].name;
        const productThumbnail = products[i].images[0].thumbnail;


        containerThumbnails.innerHTML += `<div>
                                            <img src=${productThumbnail}>
                                            <p>${productName}</p>
                                        </div>`
    }

    }

    catch(error) {
        console.log(error);
    }




}

getProducts(corsEnabledUrl);

