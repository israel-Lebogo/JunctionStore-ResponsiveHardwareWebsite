

// Registration: confirm the two password fields match
function validateForm() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}

// Registration: copy the home address into the postal address when ticked
function copyAddressToPostal() {
    const sameAddress = document.getElementById("sameAddress");
    const homeAddress = document.getElementById("homeAddress");
    const postalAddress = document.getElementById("postalAddress");

    if (!sameAddress || !homeAddress || !postalAddress) return;

    if (sameAddress.checked) {
        postalAddress.value = homeAddress.value;
        
        postalAddress.readOnly = true;
    } else {
        postalAddress.readOnly = false;
    }
}

const homeAddressField = document.getElementById("homeAddress");
if (homeAddressField) {
    homeAddressField.addEventListener("input", () => {
        const sameAddress = document.getElementById("sameAddress");
        if (sameAddress && sameAddress.checked) {
            copyAddressToPostal();
        }
    });
}


function getSelectedCard() {
    const checked = document.querySelector('input[name="credit"]:checked');
    return checked ? checked.value : "";
}

// Luhn checksum: returns true if the card number passes the check
function luhnCheck(number) {
    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = Number(number.charAt(i));
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// Payment validation checks

// Name on the card
function validateName() {
    const cardName = document.getElementById("cardName");
    if (!cardName) return;

    const message = cardName.value.trim() === "" ? "Enter your name as it appears on the card" : "";
    cardName.setCustomValidity(message);
}

// Credit card type selected
function validateCard() {
    const cards = document.querySelectorAll('input[name="credit"]');
    if (cards.length === 0) return;

    const message = getSelectedCard() === "" ? "Select your credit card" : "";
    cards[0].setCustomValidity(message);
}

// Card number
function validateNumber() {
    const cNum = document.getElementById("cardNumber");
    if (!cNum) return;

    
    const digits = cNum.value.replace(/\s/g, "");
    let message = "";

    if (digits === "") {
        message = "Enter your card number";
    } else if (!/^\d{13,19}$/.test(digits)) {
        message = "Enter a valid card number";
    } else if (!luhnCheck(digits)) {
        message = "Enter a legitimate card number";
    } else if (getSelectedCard() === "amex" && digits.length !== 15) {
        message = "Amex card numbers have 15 digits";
    }

    cNum.setCustomValidity(message);
}

// Expiry month
function validateMonth() {
    const month = document.getElementById("expMonth");
    if (!month) return;

    const message = month.selectedIndex === 0 ? "Select the expiration month" : "";
    month.setCustomValidity(message);
}

// Expiry year
function validateYear() {
    const year = document.getElementById("expYear");
    if (!year) return;

    const message = year.selectedIndex === 0 ? "Select the expiration year" : "";
    year.setCustomValidity(message);
}

// CVC: 4 digits for Amex, 3 digits for other cards
function validateCVC() {
    const cvc = document.getElementById("cvc");
    if (!cvc) return;

    const card = getSelectedCard();
    let message = "";

    if (cvc.value.trim() === "") {
        message = "Enter your CVC number";
    } else if (card === "amex" && !/^\d{4}$/.test(cvc.value)) {
        message = "Enter a 4-digit number";
    } else if (card !== "amex" && !/^\d{3}$/.test(cvc.value)) {
        message = "Enter a 3-digit number";
    }

    cvc.setCustomValidity(message);
}

// Run all payment checks when the submit button is clicked.
const subButton = document.getElementById("subButton");
if (subButton) {
    subButton.addEventListener("click", () => {
        validateName();
        validateCard();
        validateNumber();
        validateMonth();
        validateYear();
        validateCVC();
    });
}
