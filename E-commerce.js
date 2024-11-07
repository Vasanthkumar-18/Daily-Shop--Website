// NAME FIRST  LETTER CHANGE   CODE & CUSTOME INPUT GETTING CODE 

let customername = prompt('PLEASE TYPE YOUR NAME :');
let customerlocation = prompt('PLEASE TYPE YOUR ADDRESS , LOCATION & PINCODE :')

let firstletter = customername.slice(0, 1);
let capsfirstletter = firstletter.toUpperCase();
let restofname = customername.slice(1, customername.length);
let customername1 = capsfirstletter + restofname;

let locationfirstletter = customerlocation.slice(0, 1);
let locationcapsfirstletter = locationfirstletter.toUpperCase();
let locationrestofname = customerlocation.slice(1, customerlocation.length);
let customerlocation1 = locationcapsfirstletter + locationrestofname;

// ADD CART REMOVER CART CODE

let cartCount = 0;


// NAME FIRST  LETTER CHANGE   CODE & CUSTOME INPUT GETTING CODE 

document.getElementById("customername").innerHTML = ('Hello,  ' + customername1);
document.getElementById("customerlocation").innerHTML = (customerlocation1);


// ADD CART REMOVER CART CODE IN ALL PRDUCTS 

document.querySelectorAll(' .add-cart , .add-cart1').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === 'Add To Cart') {
            button.innerText = 'Remove To Cart';
            cartCount++;
            alert(' Yay! Your Item is Now in Your Cart! 🛍️ 🛒');
        } else {
            button.innerText = 'Add To Cart';
            cartCount--;
            if (cartCount < 0) cartCount = 0;
            alert('Cart Update: Item Removed🙁;');
        }
        if (cartCount === 0) {
            button.innerText = 'Add To Cart';
        }
        document.querySelector('.cart-count').innerText = cartCount;
    });
});
