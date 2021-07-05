let beers_container_elem = document.querySelector(".beers_container");
let beer = {};


// Fething API datas from the endpoint
fetch("http://localhost:8000/public/endpoint.php", {
    method: "get",   
}).then((res)=> {
    return res.json();
}).then((res) => {
    // Mapping the response into a new object named beer with only wanted params
    beer = res.map(res_beers => ({
        id: res_beers.id,
        name: res_beers.name,
        tagline: res_beers.tagline,
        first_brewed: res_beers.first_brewed,
        image_url: res_beers.image_url
    }));
    // Creating element with API fetched data
    // Could have done this in the res.map(), maybe for a V2
    // Could have done a .js for each elems and give params in args
    beer.forEach(element => {
        let beers_row_elem = beers_container_elem.querySelectorAll(".beers_row");
        if (beers_row_elem.length > 0) {
            let beers_row = beers_row_elem[beers_row_elem.length -1]
        }
        if (element.id % 2 !== 0) {
            beers_row = document.createElement("div");
        }
        let beer_container = document.createElement("div");
        let beer_text_container = document.createElement("div");
        let beer_title = document.createElement("h2");
        let beer_tagline = document.createElement("h3");
        let beer_img = document.createElement("img");
        let beer_button = document.createElement("button");
        
        beers_row.classList.add("beers_row");
        beers_container_elem.appendChild(beers_row);
        beer_container.classList.add("beer_container");
        beers_row.appendChild(beer_container);
        beer_text_container.classList.add("beer_text_container");
        beer_container.appendChild(beer_text_container);
        
        beer_title.classList.add("beer_title");
        beer_title.innerHTML = element.name;
        beer_text_container.appendChild(beer_title);

        beer_tagline.classList.add("beer_tagline");
        beer_tagline.innerHTML = element.tagline;
        beer_text_container.appendChild(beer_tagline);

        beer_button.classList.add("beer_button");
        beer_button.innerHTML = "see more";
        // Make the button redirect to the modal
        beer_button.onclick = () => {
            location.href = "modal.php/";
        }
        beer_text_container.appendChild(beer_button);

        beer_img.classList.add("beer_img");
        beer_img.src = element.image_url;
        beer_container.appendChild(beer_img);

        // nth-child could have been used ?
        if (element.id % 2 !== 0) { 
            beer_button.classList.add("l_beer_button");
            beer_title.classList.add("l_beer");
            beer_tagline.classList.add("l_beer");
        } else {
            beer_img.classList.add("r_beer_img")
            beer_text_container.classList.add("r_beer_text_container")
            beer_container.classList.add("r_beer_container")
        }
    });
})

