  // on document ready
  $(document).ready(() => {
    // Load the header.html into the header div, once it's loaded execute callback to add class to headerHome div
    $("#header").load("/template/header/header.html", () => {
      $("#headerContact")
        .removeClass()
        .addClass("nav-link active text-bright");
    });

    // Load the footer.html into the footer div, once it's loaded execute callback to add class to footerHome div
    $("#footer").load("/template/footer/footer.html", () => {
      $("#footerContact")
        .removeClass()
        .addClass("nav-link active text-bright");

    // Load shoppingCart.html
    $("#shoppingCart").load("/template/shoppingCart/shoppingCart.html");

    });
  });

              //modal 
            $(document).ready(function(){
              $(".card-img").click(function(){
                  $("#myModal").modal("show");
              });
          });
