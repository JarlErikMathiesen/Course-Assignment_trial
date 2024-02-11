const url = "https://api.noroff.dev/api/v1/rainy-days/";
const jacketContainer = document.getElementById("specific_jacket");
const urlPar = new URLSearchParams(document.location.search);
const id = urlPar.get("id");
const currency = "$";

const urlSingle = url + id;

async function jacketSingle() {

    try {

      const response = await fetch(urlSingle);
      console.log(id);
      console.log(urlSingle);
      if (!response.ok) {
        throw new Error();
    }
      const jackets = await response.json();


        jacketContainer.innerHTML = `
                                    <div class="jacket_page_prime">
                                      <img src=${jackets.image} alt="Image of ${jackets.title}"/>
                                      <div>
                                        <h1 class="jacket_headline">${jackets.title}</h1>
                                        <p class="jacket_page_description">
                                          ${jackets.description}
                                        </p>
                                        <p class="jacket_price">${jackets.discountedPrice} ${currency}</p>
                                        <div class="jacket_page_buttons">
                                          <button type="button">xs</button>
                                          <button type="button">s</button>
                                          <button type="button">m</button>
                                          <button type="button">l</button>
                                          <button type="button">xl</button>
                                          <button type="button">xxl</button>
                                        </div>
                                        <div class="jacket_page_addbasket">
                                        <a href="checkout_page.html?id=${id}">  
                                          <button id="addToCartBtn" class="orange-button add-to-basket-button">
                                            Buy
                                          </button>
                                        </a>
                                        </div>
                                      </div>
                                    </div>
                                  `
    }   catch (error) {
        jacketContainer.innerHTML =   `<div class="error">An error occured loading the page, try reloading the page. If the problem persist contact us on help@rainydays.com</div>`;
    }    
}

jacketSingle();

