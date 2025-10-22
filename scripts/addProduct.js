document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('addProductForm');
    const errorMsg = document.getElementById('errorMsg');

    if (!addProductForm) return;

    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = document.getElementById('newName');
        const priceInput = document.getElementById('newPrice');
        const descInput = document.getElementById('newDesc');

        const name = (nameInput?.value || '').trim();
        const price = (priceInput?.value || '').trim();
        const desc = (descInput?.value || '').trim();

        if (!name || !price || isNaN(price) || parseFloat(price) <= 0) {
            if (errorMsg) errorMsg.textContent = 'Vui lòng nhập tên và giá hợp lệ!';
            return;
        }

        if (errorMsg) errorMsg.textContent = '';

        const newItem = document.createElement('article');
        newItem.className = 'product-item';
        newItem.innerHTML = '\n            <h3 class="product-name">' + name + '</h3>\n            <p class="product-desc">' + desc + '</p>\n            <p class="product-price">Giá: ' + (parseFloat(price).toLocaleString()) + '₫</p>\n        ';

        const productList = document.getElementById('product-list');
        if (productList) {
            productList.prepend(newItem);
        }

        addProductForm.reset();
        addProductForm.classList.add('hidden');
        addProductForm.style.display = 'none';

        alert('Đã thêm sản phẩm thành công!');
    });
});


