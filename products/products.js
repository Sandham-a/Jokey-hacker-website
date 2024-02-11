    // on document ready
    $(document).ready(() => {
        // Load the header.html into the header div, once it's loaded execute callback to add class to headerHome div
        $("#header").load("/template/header/header.html", () => {
          $("#headerProducts")
            .removeClass()
            .addClass("nav-link active text-bright");
        });
  
        // Load the footer.html into the footer div, once it's loaded execute callback to add class to footerHome div
        $("#footer").load("/template/footer/footer.html", () => {
          $("#footerProducts")
            .removeClass()
            .addClass("nav-link active text-bright");
        });
  
                // Load shoppingCart.html
      $("#shoppingCart").load("/template/shoppingCart/shoppingCart.html");
    });
  

/*Loading in rawg.io
passing key with url
setting up async for items
display items in main container by appending divs for styling later
*/
async function fetchData() {
      return (await fetch('https://api.rawg.io/api/games?key=5faa65d741d94e78b1e567a0a1fc580c')).json();
  }
  document.addEventListener("DOMContentLoaded", async () => {
      let games = []
      try {
          games = await fetchData();
      } catch (e) {
          console.log("Error!"); //catches errors
          console.log(e); //shows errors
      }

      console.log(games); //output the games to console = true

      var results = games.results;

        var mainContainer = document.getElementById("rawgBlock");

        for(game of results){ //breaks down results to each item
            let card =  createCard(game);
            mainContainer.appendChild(card);
        }
 
   function createCard (game){
    var div = document.createElement("div");
        let divContent = `
                <div id="rawgGames" class="card col">
                    <div id="gameName" class="card-title">
                    <p>${game.name}</p>
                    </div>
                    <div id="gameImage" class="card-img-bottom">
                    <img src="${game.background_image}" class="img-fluid">
                    </div>
                    <div id="gameBottompane"></div>
                    <div id="gameMetacritic" class="card-text">
                    <p>Metacritic ${game.metacritic} out of 100</p>
                    </div>
                    <div class="gameRating" class="card-text">
                    <p><b>Rated ${game.rating} out of 5</b></p>
                    </div>
                    <div class="gameReleased" class="card-text">
                    <p><b>Released ${game.released}</b></p>
                    </div>
                </div>
        `
    div.innerHTML= divContent;

    return div;
   }
});