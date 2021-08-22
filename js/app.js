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
// memory option 8GB
document.getElementById('memory-8GB').addEventListener('click', function () {
    const extMemoryCost = amountField('extra-memory-cost');
    extMemoryCost.innerText = 0;
    const extStoragePrice = Price('extra-storage-cost');
    const deliveryPrice = Price('deliver-field');
    const totalPriceField = amountField('total-price');
    const finalPriceField = amountField('final-price');
    totalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice;
    finalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice;
});
// memory option 16GB
document.getElementById('memory-16GB').addEventListener('click', function () {
    const extMemoryCostId = amountField('extra-memory-cost');
    extMemoryCostId.innerText = 180;
    const extStoragePrice = Price('extra-storage-cost');
    const deliveryPrice = Price('deliver-field');
    const totalPriceField = amountField('total-price');
    const finalPriceField = amountField('final-price');
    totalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice + 180;
    finalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice + 180;
});
// storage option 256GB
document.getElementById('storage-256GB').addEventListener('click', function () {
    const extStorageCost = amountField('extra-storage-cost');
    extStorageCost.innerText = 0;
    const extMemoryPrice = Price('extra-memory-cost');
    const deliveryPrice = Price('deliver-field');
    const totalPriceField = amountField('total-price');
    const finalPriceField = amountField('final-price');
    totalPriceField.innerText = 1299 + deliveryPrice + extMemoryPrice + 0;
    finalPriceField.innerText = 1299 + deliveryPrice + extMemoryPrice + 0;
});
// storage option 512GB
document.getElementById('storage-512GB').addEventListener('click', function () {
    const extStorageCost = amountField('extra-storage-cost');
    extStorageCost.innerText = 100;
    const extMemoryCost = Price('extra-memory-cost');
    const totalPriceText = amountField('total-price');
    const deliveryPrice = Price('deliver-field');
    const finalPriceField = amountField('final-price');
    totalPriceText.innerText = 100 + 1299 + extMemoryCost + deliveryPrice;
    finalPriceField.innerText = 100 + 1299 + extMemoryCost + deliveryPrice;
});
// storage option 1T
document.getElementById('storage-1T').addEventListener('click', function () {
    const extStorageCost = amountField('extra-storage-cost');
    extStorageCost.innerText = 180;
    const extMemoryCost = Price('extra-memory-cost');
    const totalPriceText = amountField('total-price');
    const deliveryPrice = Price('deliver-field');
    const finalPriceField = amountField('final-price');
    totalPriceText.innerText = 180 + 1299 + extMemoryCost + deliveryPrice;
    finalPriceField.innerText = 180 + 1299 + extMemoryCost + deliveryPrice;
});
// delivery option $20
document.getElementById('delivery-cost').addEventListener('click', function () {
    const extDeliveryCost = document.getElementById('deliver-field');
    extDeliveryCost.innerText = 20;
    const extStoragePrice = Price('extra-storage-cost');
    const extMemoryPrice = Price('extra-memory-cost');
    const totalPriceField = amountField('total-price');
    const finalPriceField = amountField('final-price');
    totalPriceField.innerText = 1299 + extStoragePrice + extMemoryPrice + 20;
    finalPriceField.innerText = 1299 + extStoragePrice + extMemoryPrice + 20;
});
// delivery option free
document.getElementById('delivery-free').addEventListener('click', function () {
    const extDeliveryCost = document.getElementById('deliver-field');
    extDeliveryCost.innerText = 0;
    const extStoragePrice = Price('extra-storage-cost');
    const extMemoryPrice = Price('extra-memory-cost');
    const totalPriceField = amountField('total-price');
    const finalPriceField = amountField('final-price');
    totalPriceField.innerText = 1299 + extStoragePrice + extMemoryPrice;
    finalPriceField.innerText = 1299 + extStoragePrice + extMemoryPrice;
});

// vat apply 

document.getElementById('code-apply-btn').addEventListener('click', function () {
    const totalPrice = Price('total-price');
    const codeInput = document.getElementById('code-input').value;
    const totalPriceField = amountField('final-price');
    if (codeInput == 'stevekaku') {
        const priceAfterDiscount = totalPrice - ((totalPrice * 20) / 100);
        totalPriceField.innerText = priceAfterDiscount;
    }

});
