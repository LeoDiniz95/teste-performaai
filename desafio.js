function getProducts(pProducts) {

    pProducts.forEach(objects => {
        document.querySelector('#showcase').innerHTML += '<li>' +
        '<div class="product">' +
        '<div class="img_container">' +
        '<img src="' + objects.images.main + '" alt class="img">' +
        '<div class="overlay">' +
        '<img src="' + objects.images.alt + '" alt class="img">' +
        '</div>' +
        '</div>' +
        '<h5>' + objects.name + '</h5>' +
        '<h3>' + objects.price + '</h3>' +
        '<h6>' + objects.installment.quantity + ' de ' + objects.installment.value + ' sem juros</h6>' +
        '<button>Comprar</button>' +
        '</div>' +
        '</li>';
    });
}