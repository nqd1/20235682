document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function searchProducts() {
        const searchTerm = (searchInput?.value || '').toLowerCase().trim();
        const items = document.querySelectorAll('.product-item');

        items.forEach(function(item) {
            const nameEl = item.querySelector('.product-name');
            const productName = (nameEl?.textContent || '').toLowerCase();
            if (productName.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', searchProducts);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});


