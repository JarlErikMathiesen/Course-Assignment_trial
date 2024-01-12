const url ="https://api.noroff.dev/api/v1/rainy-days";
const jacketContainer = document.querySelector(".list_of_jackets_box");
const currency = "$";

async function jacketList() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        const jackets = json;

        if (!response.ok) {
            throw Error();
        }

        jacketContainer.innerHTML = `<h1>
                                    women's jackets
                                    </h1>`;

        for (let i = 0; i < jackets.length; i++) {

            if (jackets[i].gender == "Male") {
                continue;
            }
            
          const jacketTitle = jackets[i].title;
          const jacketsImage = jackets[i].image;
          const jacketsDescription = jackets[i].description;
          const jacketsPrice = jackets[i].price;
          const jacketsId = jackets[i].id;
          const jacketsDiscPrice = jackets[i].discountedPrice;
            



          jacketContainer.innerHTML += `<div>                    
                                            <a href="jacket_page.html?id=${jacketsId}" class="cardlink list_of_jackets_card"> 
                                                <img class="list_of_jackets_img" src=${jacketsImage} alt="Image of ${jacketTitle}">
                                                <h2 class="cardhead">
                                                    ${jacketTitle}
                                                </h2>
                                                <p class="list_of_jackets_p">
                                                    ${jacketsDescription}
                                                </p>
                                                <p class="list_of_jackets_price-tag">
                                                ${jacketsDiscPrice < jacketsPrice ? 
                                                    `<span class="discount_price-tag">${jacketsDiscPrice} ${currency}</span> 
                                                    <span class="price-tag-old">${jacketsPrice} ${currency}</span>` :
                                                    `${jacketsPrice} ${currency}`
                                                }
                                                </p>
                                            </a>
                                        </div>`;
        }
    }   catch (error) {
        jacketContainer.innerHTML =   `<div class="error">An error occured loading the page</div>`;
    }    
}

jacketList();