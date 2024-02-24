const baseUrl = "http://jarlerm.no/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + baseUrl;
const container = document.querySelector(".list_of_jackets_box");
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

    container.innerHTML = `<h1>Products</h1>
                            <button class="sort-button">A-B</button>`



    function createHtml(products){
        container.innerHTML = "";
        products.forEach(function(product){
        const productName = product.name;
        const productDescription = product.short_description;
        const productImage = product.images[0].src;
        const productId = product.id;
        const productCurrency = product.prices.currency_prefix;
        const basePrice = product.prices.price;
        const productPrice = basePrice / 100;
        
        container.innerHTML += `<div>
        <a href="flower_power_productsingle.html?id=${productId}"> 
                <h2>${productName}</h2>
                <img src=${productImage}>
                <p class="list_of_jackets_price-tag">${productCurrency}${productPrice}</p>
                <p>${productDescription}</p>
        </a>
                </div>`
    })
}

createHtml(products);


    document.querySelector(".sort-button-price").addEventListener("click", function(){
        products.sort(function(a,b){
            if (a.prices.price > b.prices.price){
                return 1;
            }
            else if (a.prices.price < b.prices.price){
                return -1;
            }
            else {
                return 0;
            }    
        });
        createHtml(products);
    })

    document.querySelector(".sort-button-name").addEventListener("click", function(){
        products.sort(function(a,b){
            if (a.name > b.name){
                return 1;
            }
            else if (a.name < b.name){
                return -1;
            }
            else {
                return 0;
            }    
        });
        createHtml(products);
    })


    }

    catch(error) {
        console.log(error);
    }




}

getProducts(corsEnabledUrl);

