const baseUrl = "http://jarlerm.no/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + baseUrl;
const container = document.querySelector(".list_of_jackets_box");
const containerThumbnails = document.querySelector(".thumbnails")

async function getProducts (url) {

    try {   
    const response = await fetch(url);
    const json = await response.json();
    const products = json;

    container.innerHTML = `<h1>Products</h1>`   

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


document.querySelector(".sort-button").addEventListener("click", function () {
    const selectedSortValue = document.querySelector('input[name="sortbutton"]:checked').value;

    switch (selectedSortValue) {
        case "lowprice":
            products.sort(function (a, b) {
                return a.prices.price - b.prices.price;
            });
            break;
        case "highprice":
            products.sort(function (a, b) {
                return b.prices.price - a.prices.price;
            });
            break;
        case "nameasc":
            products.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            break;
        case "namedesc":
            products.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });
            break;
        default:
            break;
    }
        createHtml(products);
    })
    
    }
    catch (error) {
        container.innerHTML =   `<div class="error">An error occured loading the page</div>`;
    }    
}

getProducts(corsEnabledUrl);

