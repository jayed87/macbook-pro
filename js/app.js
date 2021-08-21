// inner text return
function Price(id) {
    const productPriceId = document.getElementById(id);
    const productPrice = parseFloat(productPriceId.innerText);
    return productPrice;
}
// vat
// function vat(id) {
//     const =
// }
// memory option 8GB
document.getElementById('memory-8GB').addEventListener('click', function () {
    const extMemoryCost = document.getElementById('extra-memory-cost');
    extMemoryCost.innerText = 0;
    const extStoragePrice = Price('extra-storage-cost');
    const deliveryPrice = Price('deliver-field');
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = 1299 + extStoragePrice + deliveryPrice;
    // console.log(totalPrice);
});
// memory option 16GB
document.getElementById('memory-16GB').addEventListener('click', function () {
    const extMemoryCostId = document.getElementById('extra-memory-cost');
    extMemoryCostId.innerText = 180;
    const basePriceText = document.getElementById('base-price');
    const basePrice = parseFloat(basePriceText.innerText);
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = 180 + basePrice;
});
// storage option 256GB
document.getElementById('storage-256GB').addEventListener('click', function () {
    const extStorageCost = document.getElementById('extra-storage-cost');
    extStorageCost.innerText = 0;
});
// storage option 512GB
document.getElementById('storage-512GB').addEventListener('click', function () {
    const extStorageCost = document.getElementById('extra-storage-cost');
    extStorageCost.innerText = 100;
    const extMemoryCostId = document.getElementById('extra-memory-cost');
    const extMemoryPrice = parseFloat(extMemoryCostId.innerText);
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = 100 + 1299 + extMemoryPrice;
});
// storage option 1T
document.getElementById('storage-1T').addEventListener('click', function () {
    const extStorageCost = document.getElementById('extra-storage-cost');
    extStorageCost.innerText = 180;
    const extMemoryCostId = document.getElementById('extra-memory-cost');
    const extMemoryPrice = parseFloat(extMemoryCostId.innerText);
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = 180 + 1299 + extMemoryPrice;
});
// delivery option $20
document.getElementById('delivery-cost').addEventListener('click', function () {
    const extDeliveryCost = document.getElementById('deliver-field');
    extDeliveryCost.innerText = 20;
    const extStoragePrice = Price('extra-storage-cost');
    const extMemoryPrice = Price('extra-memory-cost');
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = 1299 + extStoragePrice + extMemoryPrice + 20;
});
// delivery option free
document.getElementById('delivery-free').addEventListener('click', function () {
    const extDeliveryCost = document.getElementById('deliver-field');
    extDeliveryCost.innerText = 0;
    const extStoragePrice = Price('extra-storage-cost');
    const extMemoryPrice = Price('extra-memory-cost');
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = 1299 + extStoragePrice + extMemoryPrice;
});
