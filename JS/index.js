const url ="https://api.noroff.dev/api/v1/rainy-days";
const jacketSale = document.querySelector(".index_jackets_box");
const currency = "$";

async function jacketList() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        const jackets = json;

        if (!response.ok) {
            throw Error();
        }

        jacketSale.innerHTML =`
                                <h2>
                                    Get ready for the rain season with our sale!
                                </h2>`

        for (let i = 0; i < jackets.length; i++) {

            if (jackets[i].onSale === false){
                continue;
            }

            if (i === 6){
                break;
            } 

          const jacketTitle = jackets[i].title;
          const jacketsImage = jackets[i].image;
          const jacketsPrice = jackets[i].price;
          const jacketsId = jackets[i].id;
          const jacketsDiscPrice = jackets[i].discountedPrice;
        

        
          jacketSale.innerHTML += `<div>                    
                                        <a href="jacket_page.html?id=${jacketsId}" class="cardlink index_jackets_card"> 
                                        <img class="index_jackets_img" src=${jacketsImage} alt="Image of ${jackets[i].title}">
                                            <h3>
                                                ${jacketTitle}
                                            </h3>
                                            <p>
                                            ${jacketsDiscPrice < jacketsPrice ? 
                                                `<span class="discount_price-tag">${jacketsDiscPrice} ${currency}</span> 
                                                <span class="price-tag-old">${jacketsPrice} ${currency}</span>` :
                                                `${jacketsPrice} ${currency}`
                                            }
                                            </p>
                                        </a>
                                    </div>`;
        }
    }   catch(error){
        jacketSale.innerHTML =   `<div class="error">An error occured loading the page, try reloading the page. If the problem persist contact us on help@rainydays.com</div>`;
    }     
}

jacketList();