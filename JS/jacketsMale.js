const url ="https://api.noroff.dev/api/v1/rainy-days";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

const jacketContainer = document.querySelector(".list_of_jackets_box");

async function jacketList() {

    try {
        const response = await fetch(corsEnabledUrl);
        const json = await response.json();

        console.log(json);
        
        const jackets = json;


        jacketContainer.innerHTML = `<h1>
                                    men's jackets
                                    </h1>`;

        for (let i = 0; i < jackets.length; i++) {

            if (jackets[i].gender == "Female") {
                continue;
            }

            console.log(`jacket_page_${jackets[i].id}.html`);

          const jacketTitle = jackets[i].title;
          const jacketsImage = jackets[i].image;
          const jacketsDescription = jackets[i].description;
          const jacketsPrice = jackets[i].price;
          const jacketsId = jackets[i].id;
            
          jacketContainer.innerHTML += `    <div>                    
                                                <a href="jacket_page.html?id=${jacketsId}" class="cardlink list_of_jackets_card"> 
                                                    <img class="list_of_jackets_img" src=${jacketsImage}>
                                                    <h2 class="cardhead">
                                                        ${jacketTitle}
                                                    </h2>
                                                    <p class="list_of_jackets p">
                                                        ${jacketsDescription}
                                                    </p>
                                                    <p class="list_of_jackets_price-tag">
                                                        ${jacketsPrice}
                                                    </p>
                                                </a>
                                            </div>`;
        }
    }  catch(error){
        console.log("error");
    }    
}

jacketList();

{/* <div class="list_of_jackets_box">
<h1>
    women's jackets
</h1>
<div class="list_of_jackets_card price-tag p">
    <img src="/images/rainydays_jacket6.jpg" alt="stormbreaker jacket for women" class="list_of_jackets_img">
    <h2 class="cardhead">
        women's stormbreaker
    </h2>
    <ul>
        <li>
            Made for outdoor sports
        </li>
        <li>
            Very watertight
        </li>
        <li>
            High durability
        </li>
    </ul>
    <p>
    1199,-
    </p>
</div>
<div class="list_of_jackets_card price-tag p gender">
    <h2 class="cardhead">
    women's alpha runner
    </h2>
    <a href="jacket_page_women.html" class="cardlink">
        <img src="/images/rainydays_jacket3.jpg" alt="alpha runner jacket for women" class="list_of_jackets_img">
    </a>
    <ul>
        <li>
            Made for outdoor sports
        </li>
        <li>
            Super light
        </li>
        <li>
            High breathability    
        </li>
    </ul>
    <p>
    999,-
    </p>
</div>
<div class="list_of_jackets_card price-tag p gender">
    <h2 class="cardhead">
    women's sailor wing
    </h2>
    <img src="/images/rainydays_jacket4.jpg" alt="sailor wing jacket for women" class="list_of_jackets_img">
    <ul>
        <li>
            Made for outdoor sports
        </li>
        <li>
            Super light
        </li>
        <li>
            High breathability
        </li>
    </ul>
    <p>
    999,-
    </p>
</div>
<div class="list_of_jackets_card price-tag p gender">
    <h2 class="cardhead">
    women's green leaf
    </h2>
    <img src="/images/rainydays_jacket7.jpg" alt="green leaf jacket for women" class="list_of_jackets_img">
    <ul>
        <li>
            Sourced from sustainable materials
        </li>
        <li>
            Good durability
        </li>
        <li>
            High breathability
        </li>
    </ul>
    <p>
    999,-
    </p>
</div>
<div class="list_of_jackets_card price-tag p gender">
    <h2 class="cardhead">
    women's hard shell jacket
    </h2>
    <img src="/images/rainydays_jacket1.jpg" alt="hard shell jacket for women" class="list_of_jackets_img">
    <ul>
        <li>
            Very watertight
        </li>
        <li>
            Very high durability
        </li>
        <li>
            Perfect for harsh conditions 
        </li>
    </ul>
    <p>
    1299,-
    </p>
</div>
<div class="list_of_jackets_card price-tag p gender">
    <h2 class="cardhead">
    women's casual jacket
    </h2>
    <img src="/images/rainydays_jacket5.jpg" alt="casual jacket for women" class="list_of_jackets_img">
    <ul>
        <li>
            Made for outdoor sports
        </li>
        <li>
            Super light
        </li>
        <li>
            High breathability
        </li>
    </ul>
    <p>
    999,-
    </p>
</div>
</div> */}