const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('[data-search-key]');
    let productFound = false;

    products.forEach(product => {
        const searchKey = product.getAttribute('data-search-key').toLowerCase();
        if (searchKey.includes(query)) {
            product.scrollIntoView({ behavior: 'smooth' });
            productFound = true;
        }
    });

    if (!productFound) {
        alert('Cake not found!');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        const products = document.querySelectorAll('[data-search-key]');
        let productFound = false;

        products.forEach(product => {
            const searchKeys = product.getAttribute('data-search-key').toLowerCase().split(', ');
            if (searchKeys.some(key => key.includes(query))) {
                product.scrollIntoView({ behavior: 'smooth' });
                productFound = true;
            }
        });

        if (!productFound) {
            alert('Cake not found!');
        }
    }
});