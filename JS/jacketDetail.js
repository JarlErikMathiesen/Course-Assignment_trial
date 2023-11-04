const url = "https://api.noroff.dev/api/v1/rainy-days/";
const jacketContainer = document.getElementById("specific_jacket");
const urlPar = new URLSearchParams(document.location.search);
const id = urlPar.get("id");
const currency = "kr";

const urlSingle = url + id;


async function jacketSingle() {

    try {

      const response = await fetch(urlSingle);

      if (!response.ok) {
        throw new Error();
    }
      const jackets = await response.json();

        jacketContainer.innerHTML = `
                                    <div class="jacket_page_prime">
                                    <h1 class="jacket_headline">${jackets.title}</h1>
                                    <div class="jacket_page_buttons">
                                      <button type="button">xs</button>
                                      <button type="button">s</button>
                                      <button type="button">m</button>
                                      <button type="button">l</button>
                                      <button type="button">xl</button>
                                      <button type="button">xxl</button>
                                    </div>
                                    <img
                                    src=${jackets.image}
                                    alt="alpha runner jacket for women"
                                    />
                                    <p class="jacket_page_description">
                                      ${jackets.description}
                                    </p>
                                    <p class="jacket_price">${jackets.price} ${currency}</p>
                                    <div class="jacket_page_addbasket">
                                      <div class="blue-button add-to-basket-button">
                                        <a href="checkout_page.html"> Add to basket </a>
                                      </div>
                                    </div>
                                    <div class="jacket_page_addnr">
                                      <button type="button">+</button>
                                      <button type="button">1</button>
                                      <button type="button">-</button>
                                    </div>
                                    </div>
                                  `
    }   catch (error) {
        jacketContainer.innerHTML =   `<div class="error">An error occured loading the page</div>`;
    }    
}

jacketSingle();