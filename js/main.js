let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

let openMenu = document.querySelector(".burger");
let closeMenu = document.querySelector(".close-menu");

let navMenu = document.querySelector("nav");
//let buy2 = document.querySelector("btn-buy");

openMenu.addEventListener("click", openNavMenu);
closeMenu.addEventListener("click", closeNavMenu);

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

function message() {
  alert("message sent");
}

function buy2() {
  alert("thanks for your purachase");
  updatetotal();
  location.reload();
  //console.log(parentElement.firstElementChild)
}

function openNavMenu() {
  navMenu.classList.add("nav-active");
}
function closeNavMenu() {
  navMenu.classList.remove("nav-active");
}

var removeCartButtons = document.getElementsByClassName("cart-remove");
console.log(removeCartButtons);
for (var i = 0; i < removeCartButtons.length; i++) {
  var button = removeCartButtons[i];
  button.addEventListener("click", removeCartItem);
}

var quantityInputs = document.getElementsByClassName("cart-quantity");
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

var addCart = document.getElementsByClassName("thum");
for (var i = 0; i < addCart.length; i++) {
  var button = addCart[i];
  button.addEventListener("click", addCartClicked);
}
var removeAll = document.querySelector(".btn-buy");
// for (var i = 0; i < removeAll.length; i++) {
//   removeAll[i].addEventListener("click", rm);
  
// }

//getElementsByClassName("stars").innerHTML = "";
// for(let i=0;i<str.length;i++)
// {
//   str[i].innerHTML="";
// }

let cartContent = document.querySelector(".cart-content");
removeAll.addEventListener("click", () => {
  console.log("ana====");
  cartContent.innerText = "";
  console.log("====ana");
});
function rm() {
  
    // const element = removeAll[i];
    console.log("1====");
    
    document.querySelector(".total-price").innerText = "$" + 0;
    //updatetotal();
    console.log(removeAll.parentElement.childNodes[5]);
    setcountTo0();
    alert("done");
  
}

// document.getElementsByClassName('btn-buy')[0]
// document.addEventListener("click",buyButtonClicked)

// function buyButtonClicked(){
//     alert('Your Order is placed')
//     var cartContent = document.getElementsByClassName('cart-content')[0]
//     while(cartContent.hasChildNodes()){
//         cartContent.removeChild(cartContent.firstChild)
//     }
// }

function allRM(event) {
  var bt = event.target;
  console.log(bt.parentElement[1]);
  console.log(bt.parentElement[2]);
  console.log(bt.parentElement[3]);
  //bt.parentElement[1].remove()
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  document.getElementsByClassName("total-price")[0].innerText = "$" + 0;
  updatetotal();
  countRevers();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updatetotal();
}

// function addCartClicked(event) {
//   var button = event.target;
//   var shopProducts = button.parentElement.parentElement;
//   // var title = shopProducts.location
//   var title = shopProducts.childNodes[1].firstElementChild.innerText;
//   var price = shopProducts.childNodes[1].childNodes[3].innerText;
//   var image =
//     shopProducts.parentElement.parentElement.parentElement.getElementsByClassName(
//       "thum"
//     )[0];
//   console.log(title, price);
//   addProductTocart(title, price);
//   //console.log(shopProducts.childNodes[0])
//   //console.log(image)
//   updatetotal();
// }

function addCartClicked(event) {
  var button = event.target;
  var shopProducts =
    button.parentElement.parentElement.childNodes[3].childNodes[1]
      .childNodes[1];
  // console.log(button.parentElement.parentElement.childNodes[2]);
  var title = shopProducts.childNodes[1].innerHTML;
  var price = shopProducts.childNodes[3].innerHTML;
  console.log(title);
  console.log(price);
  //var price = button.nextSibling.childNodes[1].childNodes[3].innerText;
  addProductTocart(title, price);
  updatetotal();
}

let cartItemsCount = 0;

function count() {
  let cartItemQuantity = document.getElementById("cart-qunatity");
  cartItemsCount++;
  cartItemQuantity.innerText = cartItemsCount;
}

function countRevers() {
  let cartItemQuantity = document.getElementById("cart-qunatity");
  cartItemsCount--;
  cartItemQuantity.innerText = cartItemsCount;
}

function setcountTo0() {
  let cartItemQuantity = document.getElementById("cart-qunatity");
  cartItemsCount = 0;
  cartItemQuantity.innerText = cartItemsCount;
}

function addProductTocart(title, price) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  var cartItemQuant = cartItems.getElementsByClassName("cart-quantity");

  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      cartItemQuant[i].value++;
      var s = cartItemQuant[i].value;
      //count();
      //addQuan()

      return;
    }
  }
  count();

  var cartBoxContent = `
        <div class="detail-box">
            <div class="cart-product-title">${title} </div>
            
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- remove cart -->
        <i class='bx bx-trash cart-remove'></i>
`;
  //var cartShopBox = document.createElement('div')

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// function addQuan(){
//   var s = document.getElementsByClassName("quant")[0]
//   var r = s++;
//   document.getElementsByClassName("quant")[0].innerText = r;
//   console.log(r);
// }

function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBoxe = cartBoxes[i];
    var priceElement = cartBoxe.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBoxe.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}

// filters
const filters = document.querySelectorAll(".filter");
const menu = document.querySelectorAll(".package-content");

for (let i = 0; i < filters.length; i++) {
  filt = filters[i];
  if(i!=0)
  {
    filt.addEventListener("click", menuFilters);
  }else
    {
      filt.addEventListener("click", menuFiltersAll);
    }
}
console.log(filt); 

function menuFiltersAll(){
  for (let i = 0; i < menu.length; i++) {
    const element = menu[i];
    element.style.display = "grid";
  }
}
function menuFilters() {
  for (let i = 0; i < menu.length; i++) {
    const element = menu[i];
    element.style.display = "none";
  }
  let datasets = document.querySelectorAll(this.dataset.sushi);
  for (let i = 0; i < datasets.length; i++) {
    const element = datasets[i];
    element.style.display = "grid";
  }
}

// filters.forEach((filter) => {
//   filter.addEventListener("click", menuFilters);
// });

// function menuFilters() {
//   menu.forEach((element) => {
//     element.style.display = "none";
//   });
//   document.querySelectorAll(this.dataset.sushi).forEach((categ) => {
//     categ.style.display = "grid";
//   });
// }

var a = 0;
if (a == 0) {
  var b = a + 1;
  console.log(b);
}
console.log(b);
