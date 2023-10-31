
const url ="https://api.noroff.dev/api/v1/rainy-days";

const jacketContainer = document.querySelector(".jacket_page_prime");

const jacketsMore = document.querySelector(".jacket_page_box")

async function jacketSingle() {

    try {
        const response = await fetch(url);
        const detail = await response.json();
        const jackets = detail;

        console.log(jackets);
        console.log(jackets[0]);
        console.log(jackets[3].id);


        jacketContainer.innerHTML = `
                                    <h1 class="jacket_headline">${jackets[0].title}</h1>
                                    <div class="jacket_page_buttons">
                                      <button type="button">xs</button>
                                      <button type="button">s</button>
                                      <button type="button">m</button>
                                      <button type="button">l</button>
                                      <button type="button">xl</button>
                                      <button type="button">xxl</button>
                                    </div>
                                    <img
                                    src=${jackets[0].image}
                                    alt="alpha runner jacket for women"
                                    />
                                    <p class="jacket_page_description">
                                      ${jackets[0].description}
                                    </p>
                                    <p class="jacket_price">${jackets[0].price}</p>
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
                                  `

        
                              for (let i = 0; i < jackets.length; i++) {
                                
                                if (i === 4){
                                  break;
                              }
                    
                              const jacketTitle = jackets[i].title;
                              const jacketsImage = jackets[i].image;
                              const jacketsPrice = jackets[i].price;
                                
                              jacketsMore.innerHTML += `
                              <div class="jacket_page_card">
                                <img
                                  src=${jacketsImage}
                                  alt="hard shell jacket for women"
                                  class="jacket_page_list"
                                />
                                <h2>
                                  ${jacketTitle}
                                </h2>
                                <p>                                                        
                                  ${jacketsPrice}
                                </p>
                              </div>`}



    }   catch(error){
        console.log("error");
    }    
}

jacketSingle();



