fetch('products.json')
    .then((response) => response.json())
    .then((cart_data) => init(cart_data))


//init();