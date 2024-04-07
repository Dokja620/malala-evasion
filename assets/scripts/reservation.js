(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const islandSelect = document.getElementById("pick-one");
        const optional1Checkbox = document.getElementById("quad");
        const optional2Checkbox = document.getElementById("bivouac");
        const optional1 = document.getElementById("optional-1");
        const optional2 = document.getElementById("optional-2");
        const priceInput = document.querySelector('input[name="price"]');
        const clientNumberInput = document.getElementById("client-number");
        const form = document.getElementById('contact-form'); // Define form here
        const sendButton = document.querySelector('.send button'); // Adjust the selector if necessary

        const updatePrice = () => {
            const selectedOption = islandSelect.value;
            let price = 0;

            optional1.style.display = "none";
            optional2.style.display = "none";

            if (selectedOption === "tour de l'ile") {
                optional1.style.display = "block";
            } else if (selectedOption === "Nosy Iranja") {
                optional2.style.display = "block";
            }

            const basePrices = {
                "Nosy komba et Nosy Tanikely": 55,
                "Nosy Iranja": 55,
                "Nosy Sakatia": 35,
                "Lokobe": 50,
                "tour de l'ile": 65,
                "Circuit Nord": 125
            };

            price = basePrices[selectedOption] || 0;

            if (selectedOption === "Nosy Iranja" && optional2Checkbox.checked) {
                price += 100; // Add bivouac price
            } else if (selectedOption === "tour de l'ile" && optional1Checkbox.checked) {
                price += 60; // Add quad price
            }

            const clientNumber = Math.min(Math.max(parseInt(clientNumberInput.value) || 0, 0), 20);
            price *= clientNumber;

            priceInput.value = price.toFixed(2) + "€";
        };

        const handleFormSubmission = () => {
            const paymentMethod = document.querySelector('input[name="payment"]:checked');
            const selectedPayment = paymentMethod ? paymentMethod.value : "";
        
            const islandChoice = document.getElementById("pick-one").value;
            const quadIncluded = islandChoice === "tour de l'ile";
            const bivouacIncluded = islandChoice === "Nosy Iranja";
            const selectedExtras = [];

            if (quadIncluded && document.getElementById('quad').checked) {
                selectedExtras.push("Location quad (+60€/quad)");
            }
            if (bivouacIncluded && document.getElementById('bivouac').checked) {
                selectedExtras.push("Nuité Bivouac (+100€/2jours)");
            }

            const extrasText = selectedExtras.join(', '); // Join selected extras with comma if there are multiple

            // Set the value of the hidden input field with the selected payment method
            document.getElementById('payment_method').value = selectedPayment;

            emailjs.sendForm('service_9doetb9', 'template_ori2jxv', form, {
                "last-name": document.getElementById("last-name").value,
                "first-name": document.getElementById("first-name").value,
                "email": document.getElementById("email").value,
                "number": document.getElementById("number").value,
                "client-number": document.getElementById("client-number").value,
                "island-choice": islandChoice,
                "excursion-date": document.getElementsByName("excursion-date")[0].value,
                "price": priceInput.value,
                "payment_method": selectedPayment,
                "extra": extrasText // Include selected extras in the email template
            }).then(
                () => {
                    console.log('SUCCESS!');
                    // Display the popup
                    document.querySelector('.popup').style.display = 'block';
                },
                error => console.log('FAILED...', error)
            );
        };

        // Attach event listener to the "D'accord" button
        document.getElementById('confirmation-btn').addEventListener('click', function() {
            // Reset the form
            document.getElementById('contact-form').reset();
            // Hide the popup
            document.querySelector('.popup').style.display = 'none';
        });

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                handleFormSubmission();
            });
        };

        sendButton.addEventListener('click', function() {
            this.classList.add('zoom-effect');
            // Remove the class after animation ends to allow re-triggering
            this.addEventListener('animationend', () => {
                this.classList.remove('zoom-effect');
            });
        });

        islandSelect.addEventListener("change", updatePrice);
        optional1Checkbox.addEventListener("change", updatePrice);
        optional2Checkbox.addEventListener("change", updatePrice);
        clientNumberInput.addEventListener("input", updatePrice);
        form.addEventListener('submit', event => {
            event.preventDefault();
            handleFormSubmission();
        });
    });

    // Initialize EmailJS with your public key
    emailjs.init({
        publicKey: "xuXsm2F6jTKUdHcRu",
    });
})();

document.getElementById('quad').addEventListener('change', function() {
    document.getElementById('option1').checked = this.checked;
});

document.getElementById('bivouac').addEventListener('change', function() {
    document.getElementById('option2').checked = this.checked;
});
