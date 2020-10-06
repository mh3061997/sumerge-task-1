var checkoutbtn = document.getElementById("Checkout-btn");
checkoutbtn.addEventListener("click",gettotal);

function gettotal(){
   var prices= document.getElementsByClassName("item-price");
    
   var total=0;
   for(i=0;i<prices.length;i++){

    total+=parseInt(prices[i].textContent);
   }
    alert("Your total is: " + total);
}
