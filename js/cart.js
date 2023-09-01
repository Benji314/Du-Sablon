/**
 * Calcul le total d'une ligne en prenant en compte la quantité et le prix unitaire
 * @param tr_cart_product (element html tr)
 */
function calculTotalCart() {
    // 1 - Calcul des données
    let total = 0;
    document.querySelectorAll('#cart .cart_product').forEach(function (tr_cart_product) {
        total += parseFloat(tr_cart_product.querySelector('.total_price').dataset.totalPrice);
    })

    // 1bis: Prendre en compte le delivery
    let delivery_choice_selected = document.querySelector('#cart .delivery_choice:checked');
    total += delivery_choice_selected ? parseInt(delivery_choice_selected.value) : 0;

    // 2 - Ecriture de la donnée
    let formattedTotal = total.toFixed(2); // 2 décimales
    document.querySelector('#cart .total_cart').textContent = formattedTotal + '€';
}

function calculTotalCartProduct(tr_cart_product) {
    // 1 - Calcul des données
    let quantity = tr_cart_product.querySelector('.quantity input').value;
    let price_unit = tr_cart_product.querySelector('.price_unit').dataset.price;
    let total = quantity * price_unit;

    // 2 - Ecriture des données
    let formattedTotal = total.toFixed(2); // 2 décimales
    tr_cart_product.querySelector('.total_price').textContent = formattedTotal + "€"
    tr_cart_product.querySelector('.total_price').dataset.totalPrice = formattedTotal;
}

function removeCartProduct(tr_cart_product) {
    tr_cart_product.remove();
    calculTotalCart();
}

function manageCartProductEvent(tr_cart_product) {
    
    // 1 - Gestion du changement de quantité
    tr_cart_product.querySelector('.quantity').addEventListener('change', function (event) {
        if (event.target.value <= 0) {
            removeCartProduct(tr_cart_product);
        } else {
            calculTotalCartProduct(tr_cart_product);
            calculTotalCart();
        }
    });

    // 2 - Gestion de la suppression
    tr_cart_product.querySelector('.delete .btn').addEventListener('click', function () {
        removeCartProduct(tr_cart_product);
    });
}

function manageDeliveryChange() {
    document.querySelectorAll('#cart .delivery_choice').forEach(function (delivery_choice) {
        delivery_choice.addEventListener('change', function (e) {
            calculTotalCart();
        });
    })
}

function calculTotalCartProductAndManageEvents() {
    let tr_cart_products = document.querySelectorAll('#cart .cart_product');
    tr_cart_products.forEach(function (tr_cart_product) {
        // Calcul du total à l'initialisation et gestion des evenements
        calculTotalCartProduct(tr_cart_product);
        manageCartProductEvent(tr_cart_product);
    });
}

function generateCartProductsHtml(cart_products) {
    let tbody = document.querySelector('#cart tbody');
    cart_products.forEach(function (cart_product) {
        tbody.innerHTML += `
            <tr class="cart_product">
                <td><a href=""><img src="${cart_product.path_img}" alt=""></a></td>
                <td>${cart_product.name}</td>
                <td class="price_unit" data-price="${cart_product.unitPrice}">${cart_product.unitPrice} €</td>
                <td class="quantity">
                    <input type="number" value="${cart_product.quantity}"/>
                </td>
                <td class="total_price"></td>
                <td class="delete"><button class="btn">X</button></td>
            </tr>
        `
    })
}

function init(cart_data) {
    // 1 - Création de l'HTML
    generateCartProductsHtml(cart_data.products)

    // 2 - Lancement des calculs et de la réactivité du js
    calculTotalCartProductAndManageEvents()

    calculTotalCart();

    manageDeliveryChange();
}

fetch('/json/cart.json')
    .then((response) => response.json())
    .then((cart_data) => init(cart_data))