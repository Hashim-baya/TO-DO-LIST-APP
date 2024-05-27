let shopping_cart ;

function add_item (Phone , Smart_tv , Gaming_console){
    if(add_item  == true){
        shopping_cart = add_item ;
        console.log("Item added to the cart");

    }else {
        console.log("We don't sell that item!");
    }
}
   add_item();

let calculate_total_price = {
    total_price : function (){
        for(let i = 0; i < shopping_cart.length; i++){
            total_price = add_item.shopping_cart + shopping_cart[i];
        }
        console.log("The total price is " + total_price);
    }
}

function pay (amount){
    console.log("")
}

      if(total_price > 400){
        total_price = total_price - (0.1 * total_price);
      }
        console.log("You have to pay " + total_price);