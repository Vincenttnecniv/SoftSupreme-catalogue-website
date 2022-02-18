function myFunction1() { //More info about King-size beds
    document.getElementById("KING").innerHTML = "<ul><li>R 7 999</li><li>76” x 80” | 193 x 203cm</li><li>A king mattress is the widest mattress on the market at 76 inches wide and 80 inches long. This bed size is great for single sleepers who like to sprawl out or couples with kids and pets.</li></li></ul>"
}
//More info about Hanging-beds
function myFunction2() {
    document.getElementById("HANGING").innerHTML = "<ul><li>R 14 999 </li><li>A hanging bed does just as it sounds — it hangs from the ceiling. While unique in style, there are a variety of ways you can utilize a hanging bed in your living space. From outdoor lounge furniture to a cozy bed swing, a hanging bed is perfect for those that like to rock themselves to sleep.</li></li></ul>"
}
//More info about Convertible-beds
function myFunction3() {
    document.getElementById("CONVERTIBLE").innerHTML = "<ul><li>R 5 999</li><li>If you love things that are multifunctional, you’re going to love a convertible bed. Convertible beds can be transformed from a bed into a sofa, and vice versa. They work great in pretty much any space in your home but are most commonly used in guest rooms.</li></li></ul>"
}
//More info about Round-beds
function myFunction4() {
    document.getElementById("ROUND").innerHTML = "<ul><li>R 6 399</li><li>A round bed is designed in the shape of a circle. The size of this style of bed can be compared to the length of a king-sized mattress. This niche style of bed is great for lounging and works well in a TV room, theater room, or placed near large windows.</li></li></ul>"
}
//More info about Queen-size
function myFunction5() {
    document.getElementById("QEEUN").innerHTML = "<ul><li>R4 599</li><li>Dimensions: 60” x 80” | 152.5 x 203cm</li><li>The queen mattress is 60 inches wide and 80 inches long. It offers plenty of space for single sleepers and works best for couples. Queen-sized beds fit great in master bedrooms that are at least 10 x 10 feet.</li></li></ul>"
}



let disc = 500
let shoppingCart = [];

let discount = document.getElementById("discount").innerHTML;
//if (example(discount == 24680)) {
//   let (cart_total_price - disc);
//}



//Content of the shopping cart
function displayShoppingCart() {
    let orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
    while (orderedProductsTblBody.rows.length > 0) {
        orderedProductsTblBody.deleteRow(0);
    }





    // Getting total 
    let cart_total_price = 0;
    for (let product in shoppingCart) {
        let row = orderedProductsTblBody.insertRow();
        let cellName = row.insertCell(0);
        let cellDescription = row.insertCell(1);
        let cellPrice = row.insertCell(2);
        cellPrice.align = "right";
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price += shoppingCart[product].Price;
    }
    document.getElementById("cart_total").innerHTML = alert("This is your total =  R" + cart_total_price);

}



//Add item to localstorage
//Add item to localstorage
function AddtoCart(name, description, price) {
    let singleProduct = {};
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    shoppingCart.push(singleProduct);

    localStorage.setItem("cart", JSON.stringify(shoppingCart));
    console.log(localStorage.getItem("cart"));


    let cart_total_price = 0;
    for (let product in shoppingCart) {
        let row = orderedProductsTblBody.insertRow();
        let cellName = row.insertCell(0);
        let cellDescription = row.insertCell(1);
        let cellPrice = row.insertCell(2);
        cellPrice.align = "right";
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price += shoppingCart[product].Price;
    }

    alert("Added item to localstorage\n\ This is your total =  R" + cart_total_price);
}



//get item from localstorage
function getCart() {
    document.getElementById("yourCart").innerHTML = localStorage.getItem('cart');
}



displayShoppingCart();



//clear item in localstorage and refresh page
function clearCart() {
    alert('Localstorage is cleared.');
    localStorage.clear();
    window.location.reload();
}



function confirmOrder() { //An alerts to let user know their order
    // was successful and generates a reference number
    let referenceNumber = Math.floor(Math.random() * 10000) + 1;
    document.getElementById("reference-number").innerHTML = alert("Your order has been confirmed and here is your reference number is: " + referenceNumber);
}



$(document).ready(function () { //Hide/Show image with animations jQeury
    $('#btn1').on("click", function (e) {
        $('#myImg').toggle('slow');
    });
});



var myOptions = { //Drop-down-list with jQeury
    val1: 'Card',
    val2: 'Cash'
};
var mySelect = $('#payment');
$.each(myOptions, function (val, text) {
    mySelect.append(
        $('<option></option>').val(val).html(text)
    );
});
$(document).ready(function () { //jQuery chaining
    $("button").click(function () {
        $("#para").css("color", "gold")
            //Slide up method
            .slideUp(2000)
            //Slide down method
            .slideDown(2000).
        slideUp(2000).
        slideDown(4000);
    });
});