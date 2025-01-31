(function () {
    emailjs.init("-64f8-RpmtD8S5nRU"); // Replace with your EmailJS user ID
})();

function sendOrder() {
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        product: document.getElementById('product').value,
    };

    emailjs
        .send("service_n9ihqi7", "template_8binl1i", templateParams)
        .then((response) => {
            alert("Order placed successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send the order. Please try again.");
            console.error("FAILED...", error);
        });
}

function selectLaptop(name, details) {
    // Redirect to Order Now section
    window.location.href = "#order";

    // Populate the form with selected product details
    document.getElementById("product").value = `${name} - ${details}`;
}
