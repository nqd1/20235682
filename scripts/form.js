document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('addProductBtn');
    const addProductForm = document.getElementById('addProductForm');
    const cancelBtn = document.getElementById('cancelBtn');
    const errorMsg = document.getElementById('errorMsg');

    function hideForm() {
        if (!addProductForm) return;
        addProductForm.classList.add('hidden');
        addProductForm.style.display = 'none';
    }

    function showForm() {
        if (!addProductForm) return;
        addProductForm.classList.remove('hidden');
        addProductForm.style.display = 'block';
    }

    if (addProductBtn && addProductForm) {
        addProductBtn.addEventListener('click', function() {
            if (addProductForm.classList.contains('hidden')) {
                showForm();
            } else {
                hideForm();
            }
        });
    }

    if (cancelBtn && addProductForm) {
        cancelBtn.addEventListener('click', function() {
            hideForm();
            addProductForm.reset();
            if (errorMsg) errorMsg.textContent = '';
        });
    }
});


