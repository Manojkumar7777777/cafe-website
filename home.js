let totalItems = 0;
        let totalBill = 0;

        // Function to update the cart summary display
        function updateCartSummary() {
            document.getElementById("total-items").textContent = totalItems;
            document.getElementById("total-bill").textContent = totalBill;
        }

        // Adding click event listeners to "Add Cart" buttons
        document.querySelectorAll(".button-order").forEach(button => {
            button.addEventListener("click", () => {
                const itemPrice = parseInt(button.getAttribute("data-price"));
                totalItems++;
                totalBill += itemPrice;
                updateCartSummary();
            });
        });