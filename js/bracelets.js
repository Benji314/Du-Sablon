
/* function generateBraceletProductsHtml(products) {
    let bracelet = document.querySelectorAll('.bracelet');
    products.forEach(function (bracelet_product) {
        bracelet.innerHTML += `

    <div class="row row_class2">
        <div class="col-md-3 col_class bracelet_class">
            <div class="bracelets">
                <a href=""><img src="${bracelet_product.path_img}" alt=""></a>
                <h1>${bracelet_product.name}</h1>
                <a href="">
                    <p>Du Sablon</p>
                </a>
                <h2>€ ${bracelet_product.unitPrice}</h2>
                <button class="buy_btn">ACHETER</button>
            </div>
        </div>
    </div>
    `
    })
}

function init(bracelet_data) {
    // 1 - Création de l'HTML
    generateBraceletProductsHtml(bracelet_data.products)

}

fetch('/json/bracelets.json')
    .then((response) => response.json())
    .then((bracelet_data) => init(bracelet_data)) */



/* function generateBraceletProductsHtml(products) {
    let bracelets = document.querySelectorAll('.bracelet');

    products.forEach(function (bracelet_product) {
        // Crée une div pour chaque produit et ajoute le contenu
        let productDiv = document.createElement('div');
        productDiv.classList.add('row', 'row_class2');
        productDiv.innerHTML = `
                <div class="col-md-3 col_class bracelet_class">
                    <div class="bracelets">
                        <a href=""><img src="${bracelet_product.path_img}" alt=""></a>
                        <h1>${bracelet_product.name}</h1>
                        <a href="">
                            <p>Du Sablon</p>
                        </a>
                        <h2>€ ${bracelet_product.unitPrice}</h2>
                        <button class="buy_btn">ACHETER</button>
                    </div>
                </div>
            `;

        // Ajoute le produit à chaque élément de la liste bracelets
        bracelets.forEach(function (bracelet) {
            bracelet.appendChild(productDiv.cloneNode(true));
        });
    });
} */

function generateBraceletProductsHtml(products) {
    let braceletsContainer = document.querySelector('.bracelets_container');
    
    let productsHtml = ''; // Stocke le contenu HTML des produits
    let productsCount = 0; // Compte les produits ajoutés
    
    products.forEach(function (bracelet_product) {
        if (productsCount % 4 === 0) {
            // Nouvelle row pour chaque 4ème produit
            productsHtml += '</div><div class="row row_class2">';
        }
        
        productsHtml += `
            <div class="col-md-3 col_class bracelet_class">
                <div class="bracelets">
                    <a href="/html/detailproduit.html?id=${bracelet_product.id}"><img src="${bracelet_product.path_img}" alt=""></a>
                    <h1>${bracelet_product.name}</h1>
                    <p>Du Sablon</p>
                    <h2>€ ${bracelet_product.unitPrice}</h2>
                    <a href="/html/detailproduit.html?id=${bracelet_product.id}"><button class="buy_btn">ACHETER</button></a>
                </div>
            </div>
        `;
        
        productsCount++;
    });
    
    // Ajoute le contenu HTML à la container des bracelets
    braceletsContainer.innerHTML = productsHtml;
}

function init(bracelet_data) {
    generateBraceletProductsHtml(bracelet_data.products);
}

fetch('/json/bracelets.json')
    .then((response) => response.json())
    .then((bracelet_data) => init(bracelet_data));



