const baseUrl = "http://jarlerm.no/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + baseUrl;
const container = document.querySelector(".products");
const containerThumbnails = document.querySelector(".thumbnails")

async function getProducts (url) {

    try {   
    const response = await fetch(url);
    const json = await response.json();
    const products = json;

    console.log(products);
    console.log(products.length);
    console.log(products[0].short_description);
    console.log(products[0].images[0].src);
    console.log(products[0].images[0].thumbnail);

    container.innerHTML =`<h1>Products</h1>`


    for (let i = 0; i < products.length; i++) {
    
        const productName = products[i].name;
        const productDescription = products[i].short_description;
        const productImage = products[i].images[0].src;
        const productId = products[i].id;
        const productPrice = products[i].prices.price;
        const productCurrency = products[i].prices.currency_prefix;


        container.innerHTML += `<div>
        <a href="flower_power_productsingle.html?id=${productId}"> 
                <h2>${productName}</h2>
                <img src=${productImage}>
                <p class="list_of_jackets_price-tag">${productCurrency}${productPrice}</p>
                <p>${productDescription}</p>
        </a>
                </div>`
    }

    }

    catch(error) {
        console.log(error);
    }




}

getProducts(corsEnabledUrl);

