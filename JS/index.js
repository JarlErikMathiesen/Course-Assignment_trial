

const currentUrl = window.location.href;
console.log(currentUrl);


const url ="https://api.noroff.dev/api/v1/rainy-days";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

const jacketSale = document.querySelector(".index_jackets_box");

async function jacketList() {

    try {
        const response = await fetch(corsEnabledUrl);
        const json = await response.json();

        console.log(json);


        const jackets = json;
        jacketSale.innerHTML =`     <h2>
                                        Get ready for the rain season with our new arrivals
                                    </h2>`

        for (let i = 0; i < jackets.length; i++) {

            if (jackets[i].onSale === false){
                continue;
            }

            if (i >= 6){
                break;
            } 


            console.log(`jacket_page_${jackets[i].id}.html`);
            console.log(jackets[i].gender);

          const jacketTitle = jackets[i].title;
          const jacketsImage = jackets[i].image;
          const jacketsPrice = jackets[i].price;
          const jacketsId = jackets[i].id;
          const jacketsDiscount = jackets[i].discountedPrice;
          const jacketsGender = jackets[i].gender;

            
          jacketSale.innerHTML += `<div>                    
                                            <a href="jacket_page_${jacketsId}.html" class="cardlink list_of_jackets_card"> 
                                                <img class="list_of_jackets_img" src=${jacketsImage}>
                                                <h2 class="cardhead">
                                                    ${jacketTitle}
                                                </h2>
                                                <p class="list_of_jackets_price-tag">
                                                    ${jacketsDiscount}
                                                </p>
                                            </a>
                                        </div>`;
        }
    }   catch(error){
        jacketContainer.innerHTML = `<h2 class="error">Error</h2>`;
    }     
}

jacketList();