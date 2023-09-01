const cart_products = {
    "products": [
        {
            "path_img": "img/R1241.001.png",
            "name": "Graine de café",
            "unitPrice": 20,
            "quantity": 1
        },
        {
            "name": "Produit2",
            "unitPrice": 12,
            "quantity": 1,
            "path_img": "img/R1153.001.png"
        },
        {
            "name": "Produit3",
            "unitPrice": 15,
            "quantity": 1,
            "path_img": "img/R1128.001.png"
        }
    ],
    "customer": {} | null,
    "delivery_id": 3
}


// async function getProducts() {
//     const response = await fetch('products.json')
//         .then(response => response.json())
//         .then(products => {
//             products.forEach(product => {
//                 document.querySelector('#cart tbody').innerHTML += `<tr class="cart_product">
//                     <td><a href=""><img src="${product.path_img}" alt=""></a></td>
//                     <td>${product.name}</td>
//                     <td class="price_unit" data-price="${product.unitPrice}">${product.unitPrice}€</td>
//                     <td class="quantity">
//                         <input type="number" value="${product.quantity}" />
//                     </td>
//                     <td class="total_price"></td>
//                     <td class="delete"><button class="btn">X</button></td>
//                 </tr>`
//             })
//         })
//         .catch(error => console.error(error));
// }
// getProducts();

function createProductList() {
    let productListHTML = ``;
    cart_products.products.forEach(function (product) {

        productListHTML += `
            < tr class="cart_product" >
                <td><a href=""><img src="${product.path_img}" alt=""></a></td>
                <td>${product.name}</td>
                <td class="price_unit" data-price="${product.unitPrice}">${product.unitPrice}€</td>
                <td class="quantity">
                    <input type="number" value="${product.quantity}"/>
                </td>
                <td class="total_price"></td>
                <td class="delete"><button class="btn">X</button></td>
            </ > `
    })

    document.querySelector('#cart tbody').innerHTML += productListHTML
}






// cart_products.products.forEach(function (cart_product) {
//     let tbody = document.querySelector('#cart tbody');

//     tbody.innerHTML = "<tr><td> <img src=" + cart_product.path_img + " alt=''> </td></tr>";
// })


// createProductList();
init();





