// amount set default 
function amountZero(getId) {
    document.getElementById(getId).innerText = 0;
    totalPrice()
}
// Amount Increment
function amountplus(getId, increaseDecrease) {
    if (increaseDecrease == true) {
        document.getElementById(getId).innerText = 180;
    } else {
        document.getElementById(getId).innerText = 100;
    }
    totalPrice()
}


// totalCalculation
function getTotalInput(inputID) {
    const price = document.getElementById(inputID);
    const priceInput = price.innerText;
    const priceAmount = parseFloat(priceInput);
    return priceAmount;
}

function totalPrice() {
    //    best Price 
    const basePrice = getTotalInput('bestPrice');

    //    best Price 
    const memoryPrice = getTotalInput('memoryCost');
    //    storageCost
    const storagePrice = getTotalInput('storageCost');
    //    deliveryCharge
    const deliveryCost = getTotalInput('deliveryCharge');
    const totalAmount = basePrice + memoryPrice + storagePrice + deliveryCost;

    document.getElementById('totalPrice').innerText = totalAmount;
    document.getElementById('total').innerText = totalAmount;

}


// coupon Apply 
function applyCoupon() {
    const totalProductPrice = getTotalInput('total'); //input Total Price
    const couponInputs = document.getElementById('couponInput').value; //input coupon code

    if (couponInputs == 'stevekaku') {
        const discount = totalProductPrice / 20; //discount 20%
        const totalPrice = totalProductPrice - discount; //get Total after Discout
        document.getElementById('total').innerText = totalPrice; //set Total Value
        document.getElementById('couponInput').value = "";
        document.getElementById('couponInput').disabled = true; //input field for one time

        // Message 
        document.getElementById('notifySuccess').style.display = 'block';
        document.getElementById('notify').style.display = 'none';
    } else if (couponInputs == '') {

        // Message 
        document.getElementById('notify').style.display = 'block';
        document.getElementById('notifySuccess').style.display = 'none';
    }

}

// event handler for 8gb memory button
document.getElementById('memory8Gb').addEventListener('click', function() {

    amountZero('memoryCost');

})



// event handler for 16gb memory button
document.getElementById('memory16Gb').addEventListener('click', function() {

    amountplus('memoryCost', true);

})


// event handler for 256GB SSD Storgae
document.getElementById('storage256gb').addEventListener('click', function() {

    amountZero('storageCost');

})

// event handler for 512GB SSD Storgae
document.getElementById('storage512gb').addEventListener('click', function() {

    amountplus('storageCost', false);

})



// event handler for 1TB SSD Storgae
document.getElementById('storage1tb').addEventListener('click', function() {

    amountplus('storageCost', true);

})

// event handler for 256GB SSD Storgae
document.getElementById('storage256gb').addEventListener('click', function() {

    amountZero('storageCost');

})


// event handler for Free Prime Delivery
document.getElementById('freeDelivery').addEventListener('click', function() {

    amountZero('deliveryCharge');

})


// event handler for $20 Delivery Charge
document.getElementById('deliveryCostApplied').addEventListener('click', function() {
        document.getElementById('deliveryCharge').innerText = 20;
        totalPrice()

    })
    // event handler for Apply Coupon
document.getElementById('applyCoupon').addEventListener('click', function() {

    applyCoupon()

})