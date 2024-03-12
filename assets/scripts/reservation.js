(function() {
    // Initialize EmailJS with your public key
    emailjs.init({
        publicKey: "uzZPcXhAKZZ3GQpzM",
    });

    // Function to handle form submission
    function handleFormSubmission() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Get the selected payment method
            var paymentMethod = document.querySelector('input[name="payment"]:checked');
            if (paymentMethod) {
                var selectedPayment = paymentMethod.value;
                // Set the value of the hidden input field with the selected payment method
                document.getElementById('payment_method').value = selectedPayment;
            }
            // Send the form using EmailJS
            emailjs.sendForm('service_0b6kg78', 'template_21q20uk', this)
                .then(function() {
                    console.log('SUCCESS!');
                    // Optionally, display a success message to the user
                }, function(error) {
                    console.log('FAILED...', error);
                    // Optionally, display an error message to the user
                });
        });
    }

    // Execute the form submission handling function when the window loads
    window.onload = function() {
        handleFormSubmission();
    };
})();
