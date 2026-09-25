document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const sameAddressCheckbox = document.getElementById("sameAddress");
    const homeAddress = document.getElementById("homeAddress");
    const postalAddress = document.getElementById("postalAddress");

    // Copy Home Address to Postal Address when checkbox is checked
    sameAddressCheckbox.addEventListener("change", function () {
        if (sameAddressCheckbox.checked) {
            postalAddress.value = homeAddress.value;
            postalAddress.disabled = true;
        } else {
            postalAddress.disabled = false;
        }
    });

    // Display submitted user information with a pop-up confirmation
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate passwords
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Show success pop-up message
        alert("Form submitted successfully! scroll down for details:");

        // Gather form data
        const formData = new FormData(form);
        let output = "<h2>Entered Details:</h2>";

        formData.forEach((value, key) => {
            if (key === "cardNumber") {
                value = "**** **** **** " + value.slice(-4);
            }
            if (key === "password" || key === "confirmPassword") {
                value = "****";
            }
            output += `<strong>${key}:</strong> ${value} <br>`;
        });

        document.getElementById("userData").innerHTML = output;
        document.getElementById("displayData").style.display = "block";
    });
});
