let cartIcon = document.querySelector ('#cart-icon')
let cart = document.querySelector ('.cart')
let closeCart = document.querySelector ('#close-cart')

let openMenu = document.querySelector(".burger");
let closeMenu = document.querySelector(".close-menu");

let navMenu = document.querySelector("nav");
//let buy2 = document.querySelector("btn-buy");

openMenu.addEventListener("click", openNavMenu);
closeMenu.addEventListener("click", closeNavMenu);


cartIcon.onclick = () =>{
    cart.classList.add("active");
}

closeCart.onclick = () =>{
    cart.classList.remove("active");
}

function buy2()
{
    alert("thanks for your purachase");
    updatetotal();
    location.reload();
    //console.log(parentElement.firstElementChild)
    
}

function openNavMenu() {
    navMenu.classList.add('nav-active');
  }
  function closeNavMenu() {
    navMenu.classList.remove('nav-active');
  }


if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i = 0;i<removeCartButtons.length;i++)
    {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem )
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i = 0;i<quantityInputs.length;i++)
    {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged)
    }

    var addCart = document.getElementsByClassName('add-cart')
    for(var i=0;i< addCart.length ;i++)
    {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }

    // document.getElementsByClassName('btn-buy')[0]
    // document.addEventListener("click",buyButtonClicked)
     
}

// function buyButtonClicked(){
//     alert('Your Order is placed')
//     var cartContent = document.getElementsByClassName('cart-content')[0]
//     while(cartContent.hasChildNodes()){
//         cartContent.removeChild(cartContent.firstChild)
//     }
// }


function removeCartItem(event)
{
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal()
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0)
    {
        input.value = 1
    }
    updatetotal()
}

function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement.parentElement
    // var title = shopProducts.location
    var title = shopProducts.childNodes[1].firstElementChild.innerText
    var price = shopProducts.childNodes[1].childNodes[3].innerText
    var image = shopProducts.parentElement.parentElement.parentElement.getElementsByClassName("thum")[0] 
    console.log(title,price);
    addProductTocart(title,price)
    //console.log(shopProducts.childNodes[0])
    //console.log(image)
    updatetotal();
    
}

function addProductTocart(title,price)
{
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for(var i=0;i<cartItemsNames.length;i++)
    {

        if(cartItemsNames[i].innerText==title)
        {
            alert('you have already add this item to cart')
            return;
        }
    }


var cartBoxContent = `
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- remove cart -->
        <i class='bx bx-trash cart-remove'></i>
`;
//var cartShopBox = document.createElement('div')

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}
function updatetotal()
{
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBoxe = cartBoxes[i]
        var priceElement = cartBoxe.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBoxe.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""))
        var quantity = quantityElement.value
        total = total + price * quantity;
        //total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}


// filters
const filters = document.querySelectorAll(".filter");
const menu = document.querySelectorAll(".package-content")

filters.forEach((filter) => {
    filter.addEventListener("click", menuFilters);
})

function menuFilters() {
    menu.forEach((element)=>{
        element.style.display = "none";
    });
    document.querySelectorAll(this.dataset.sushi).forEach((categ)=>{
        categ.style.display = "grid";
    })
}