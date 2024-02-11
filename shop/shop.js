    // on document ready
    $(document).ready(() => {
        // Load the header.html into the header div, once it's loaded execute callback to add class to headerHome div
        $("#header").load("/template/header/header.html", () => {
          $("#headerShop")
            .removeClass()
            .addClass("nav-link active text-bright");
        });
  
        // Load the footer.html into the footer div, once it's loaded execute callback to add class to footerHome div
        $("#footer").load("/template/footer/footer.html", () => {
          $("#footerShop")
            .removeClass()
            .addClass("nav-link active text-bright");
        });
  
                // Load shoppingCart.html
      $("#shoppingCart").load("/template/shoppingCart/shoppingCart.html");
    });
  
      // if the user clicks the .card div (gumdrop item) on to the #sub-btn id
      $(".card").click(function () {
          let products =[];
      
          // populate the products array with the current products info
          if (localStorage.getItem("items")) {
              products = JSON.parse(localStorage.getItem("items"));
          }
  
          const itemElement = $(this).find(".card-text").text(); // Finest Purple, £100ea
          const itemName = itemElement.split("$")[0]; // The One
          const itemPrice = itemElement.split("$")[1]; // 100 
          const itemImage = $(this).find(".card-img-bottom").attr("src"); // pulling the image from card-img-bottom class


            
          // check if the item is already in the cart
          let itemExists = false;
          products.forEach((product) => {
              if (product.name === itemName) {
            itemExists = true;
            product.quantity += 1;
              }
        });
  
         // if the item is not in the cart, add it to the cart
            if (!itemExists) {
              products.push({
                image: itemImage,
                name: itemName,
                price: itemPrice,
                quantity: 1,
              });
            };
  
         //save the array to localStorage
        localStorage.setItem("items", JSON.stringify(products));

        // added toast for order thanks when cutomer clicks add to cart
        $(document).ready(function(){
          $(".start-toast").toast('show');
          });
        
        //Open shoppingCartButton.html and update .numberOfItems div
        $("#shoppingCart").load("/template/shoppingCart/shoppingCart.html", () => {
          $(".numberOfItems").text(products.length);
          
        });
        });        


