const url = "https://api.noroff.dev/api/v1/rainy-days/";
const jacketContainer = document.getElementById("specific_jacket");
const urlPar = new URLSearchParams(document.location.search);
const id = urlPar.get("id");
const currency = "$";


const urlSingle = url + id;

async function jacketSingle() {

    try {

      const response = await fetch(urlSingle);

      if (!response.ok) {
        throw new Error();
    }
      const jackets = await response.json();
      console.log(jackets);
    

      

      jacketContainer.innerHTML = `<div id="specific_jacket" class="checkout_page_card">
                                        <img
                                            src=${jackets.image}
                                            alt="Image of ${jackets.title}"
                                            class="checkout_page_jacket"
                                        />
                                        <h2>${jackets.title}</h2>
                                        <p class="jacket_page_description">
                                          ${jackets.description}
                                        </p>
                                        <div>
                                            <p>${jackets.title}</p>
                                            <p>Total</p>
                                            <p>${jackets.discountedPrice} ${currency}</p>
                                        </div>                                     
                                    </div>
                                  `

    }   catch (error) {
        jacketContainer.innerHTML =   `<div class="error">An error occured loading the page, try reloading the page. If the problem persist contact us on help@rainydays.com</div>`;
    }    
}

jacketSingle();

