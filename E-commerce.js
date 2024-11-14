
document.addEventListener('DOMContentLoaded', () => {

    // NAME FIRST  LETTER CHANGE   CODE & CUSTOME INPUT GETTING CODE 

    let customerName = prompt('PLEASE TYPE YOUR NAME :');
    let customerLocation = prompt('PLEASE TYPE YOUR ADDRESS , LOCATION & PINCODE :')

    let firstLetterSlice = customerName.slice(0, 1);
    let capsFirstLetter = firstLetterSlice.toUpperCase();
    let restOfName = customerName.slice(1, customerName.length);
    let capsCustomerName = capsFirstLetter + restOfName;

    let locationFirstLetter = customerLocation.slice(0, 1);
    let locationCapsFirstLetter = locationFirstLetter.toUpperCase();
    let locationRestOfName = customerLocation.slice(1, customerLocation.length);
    let capsCustomerLocation = locationCapsFirstLetter + locationRestOfName;

    // ADD CART REMOVER CART CODE

    let cartCount = 0;


    // NAME FIRST  LETTER CHANGE   CODE & CUSTOME INPUT GETTING CODE 

    document.querySelector("#customername").innerHTML = ('Hello,  ' + capsCustomerName);
    document.querySelector("#customerlocation").innerHTML = (capsCustomerLocation);


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




});
