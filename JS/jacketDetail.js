const url = "https://api.noroff.dev/api/v1/rainy-days";
const jacketContainer = document.getElementById("specific_jacket");





/* const jacketContainer = document.querySelector(".jacket_page_prime"); */

async function getSpecificJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    return urlParams.get("id");
  }

async function jacketSingle() {

    try {
      const jacketsId = await getSpecificJacketIdFromQuery();
      if (!jacketsId) {
        throw new Error("Jacket ID not found in the query parameters.");
      }

      const response = await fetch(`${url}/${jacketsId}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jackets = await response.json();



        console.log(jackets);  

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
                                    <p class="jacket_price">${jackets.price}</p>
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
        console.error("An error occurred:", error);
    
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "An error occurred. Please try again later.";
        errorMessage.classList.add('error-message');
      
        resultsContainer.innerHTML = "";
        resultsContainer.appendChild(errorMessage);
    }    
}

jacketSingle();