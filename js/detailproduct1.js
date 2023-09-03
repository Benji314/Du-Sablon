/* 
function generateDetailProductHtml(products) {
    let detail_product = document.querySelector('.detail_product');
    products.forEach(function (product) {
        detail_product.innerHTML += `

        <div class="row row_class">
        <div class="col-md-6 col_class">
            <div class="graine-cafe">
                <a href=""><img src="${product.path_img1}" alt=""></a>
            </div>
        </div>
        <div class="col-md-5 offset-md-1 col_class description_product">
            <h1>${product.name}</h1>
            <p>
            ${product.description}
            </p>
            <h2>€ ${product.unitPrice} <span class="incl_tva">incl. TVA</span></h2>
            <div class="add_cart_div">
                <button class="add_cart_button">AJOUTER AU PANIER </button>
            </div>
            <div class="flex share_div">
                <i class="fa-solid fa-share-nodes"></i>
                <h3>PARTAGER</h3>
                <span class="vertical-line2"></span>
                <p>Ref. ${product.ref}</p>
            </div>

        </div>

    </div>

    <div class="row row_class">
        <div class="col-md-3 col_class">
            <a href=""><img src="${product.path_img2}" alt=""></a>
        </div>
        <div class="col-md-3 col_class">
            <a href=""><img src="${product.path_img3}" alt=""></a>
        </div>

    </div>

    <div class="row row_class">
        <div class="col-md-6 col_class">
            <a href=""><img src="${product.path_img4}" alt=""></a>
        </div>

    </div>
        `
    })
}

function init(detail_data) {
    // 1 - Création de l'HTML
    generateDetailProductHtml(detail_data.products)

}

/* fetch('/json/products.json')
    .then((response) => response.json())
    .then((detail_data) => init(detail_data)) */


/* const url = new URL(window.location.href);
const id = url.searchParams.get("id");


fetch(`/json/product${id}.json`)
    .then((response) => response.json())
    .then((detail_data) => generateDetailProductHtml(detail_data));  */


function generateDetailProductHtml(product) {
    let detail_product = document.querySelector('.detail_product');

    detail_product.innerHTML = `
            <div class="row row_class">
                <div class="col-md-6 col_class">
                    <div class="graine-cafe">
                        <a href=""><img src="${product.path_img1}" alt=""></a>
                    </div>
                </div>
                <div class="col-md-5 offset-md-1 col_class description_product">
                    <h1>${product.name}</h1>
                    <p>${product.description}</p>
                    <h2>€ ${product.unitPrice} <span class="incl_tva">incl. TVA</span></h2>
                    <div class="add_cart_div">
                        <button class="add_cart_button">AJOUTER AU PANIER </button>
                    </div>
                    <div class="flex share_div">
                        <i class="fa-solid fa-share-nodes"></i>
                        <h3>PARTAGER</h3>
                        <span class="vertical-line2"></span>
                        <p>Ref. ${product.ref}</p>
                    </div>
                </div>
            </div>
            <div class="row row_class">
                <div class="col-md-3 col_class">
                    <a href=""><img src="${product.path_img2}" alt=""></a>
                </div>
                <div class="col-md-3 col_class">
                    <a href=""><img src="${product.path_img3}" alt=""></a>
                </div>
            </div>
            <div class="row row_class">
                <div class="col-md-6 col_class">
                    <a href=""><img src="${product.path_img4}" alt=""></a>
                </div>
            </div>
        `;
}

function init(detail_data, productId) {

    const product = detail_data.products.find(product => product.id === productId);

    if (product) {
        generateDetailProductHtml(product);
    } else {
        console.error("Erreur de chargement");
    }
}

/* // Obtenir l'ID du produit depuis l'URL :
function getProductIdFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('id');
}

const productId = getProductIdFromUrl(); */

const productId = 1; 

fetch('/json/products.json')
    .then((response) => response.json())
    .then((detail_data) => init(detail_data, productId));
