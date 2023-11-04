const url ="https://api.noroff.dev/api/v1/rainy-days";
const jacketContainer = document.querySelector(".list_of_jackets_box");
const currency = "kr";

async function jacketList() {

    try {
        const response = await fetch(url);
        const json = await response.json();
        const jackets = json;

        if (!response.ok) {
            throw Error();
        }

        jacketContainer.innerHTML = `<h1>
                                    men's jackets
                                    </h1>`;

        for (let i = 0; i < jackets.length; i++) {

            if (jackets[i].gender == "Female") {
                continue;
            }

          const jacketTitle = jackets[i].title;
          const jacketsImage = jackets[i].image;
          const jacketsDescription = jackets[i].description;
          const jacketsPrice = jackets[i].price;
          const jacketsId = jackets[i].id;
            
          jacketContainer.innerHTML += `<div>                    
                                            <a href="jacket_page.html?id=${jacketsId}" class="cardlink list_of_jackets_card"> 
                                                <img class="list_of_jackets_img" src=${jacketsImage}>
                                                <h2 class="cardhead">
                                                    ${jacketTitle}
                                                </h2>
                                                <p class="list_of_jackets p">
                                                    ${jacketsDescription}
                                                </p>
                                                <p class="list_of_jackets_price-tag">
                                                    ${jacketsPrice} ${currency}
                                                </p>
                                            </a>
                                        </div>`;
        }
    }   catch (error) {
        jacketContainer.innerHTML =   `<div class="error">An error occured loading the page</div>`;
    }    
}

jacketList();