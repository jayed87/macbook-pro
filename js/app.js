// inner text return
function Price(id) {
    const productPriceId = document.getElementById(id);
    const productPrice = parseFloat(productPriceId.innerText);
    return productPrice;
}
// vat
function amountField(id) {
    const field = document.getElementById(id);
    return field;
}
function macBookPriceCalculation() {
    const extMemoryCost = Price('extra-memory-cost');
    const extStoragePrice = Price('extra-storage-cost');
    const deliveryPrice = Price('deliver-field');
    const totalPriceField = amountField('total-price');
    const finalPriceField = amountField('final-price');
    totalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice + extMemoryCost;
    finalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice + extMemoryCost;
}
// memory option 8GB
document.getElementById('memory-8GB').addEventListener('click', function () {
    const extMemoryCost = amountField('extra-memory-cost');
    extMemoryCost.innerText = 0;
    macBookPriceCalculation();
});
// memory option 16GB
document.getElementById('memory-16GB').addEventListener('click', function () {
    const extMemoryCostId = amountField('extra-memory-cost');
    extMemoryCostId.innerText = 180;
    macBookPriceCalculation();
});
// storage option 256GB
document.getElementById('storage-256GB').addEventListener('click', function () {
    const extStorageCost = amountField('extra-storage-cost');
    extStorageCost.innerText = 0;
    macBookPriceCalculation();
});
// storage option 512GB
document.getElementById('storage-512GB').addEventListener('click', function () {
    const extStorageCost = amountField('extra-storage-cost');
    extStorageCost.innerText = 100;
    macBookPriceCalculation();
});
// storage option 1T
document.getElementById('storage-1T').addEventListener('click', function () {
    const extStorageCost = amountField('extra-storage-cost');
    extStorageCost.innerText = 180;
    macBookPriceCalculation();
});
// delivery option $20
document.getElementById('delivery-cost').addEventListener('click', function () {
    const extDeliveryCost = amountField('deliver-field');
    extDeliveryCost.innerText = 20;
    macBookPriceCalculation();
});
// delivery option free
document.getElementById('delivery-free').addEventListener('click', function () {
    const extDeliveryCost = amountField('deliver-field');
    extDeliveryCost.innerText = 0;
    macBookPriceCalculation();
});

// vat apply 

document.getElementById('code-apply-btn').addEventListener('click', function () {
    const totalPrice = Price('total-price');
    const codeInputField = document.getElementById('code-input');
    const codeInput = codeInputField.value;
    const finalPriceField = amountField('final-price');
    if (codeInput == 'stevekaku') {
        const priceAfterDiscount = totalPrice - ((totalPrice * 20) / 100);
        finalPriceField.innerText = priceAfterDiscount;
        codeInputField.value = '';
    }



});
