let isEmpty = true;
let timesClicked = 0;

const validatePromo = (e) => {
    e.preventDefault();
    const code = document.querySelector("[data-code]").value;

    checkFieldsAreEmpty();
    timesClicked++;
    console.log(timesClicked);

    if (!code && isEmpty) {
        const message = document.querySelector("[data-promo-error]");
        e.target.classList.remove("btn-secondary");
        e.target.classList.add("btn-danger");
        message.textContent = "No debe dejar vacío este campo.";
        message.classList.add("text-danger");
        return false;
    }

    if (code.length > 2 && code === '123' && !isEmpty) {
        const message = document.querySelector("[data-promo-error]");
        e.target.classList.toggle("btn-danger");
        e.target.classList.toggle("btn-secondary");
        e.target.classList.add("btn-success");
        message.textContent = "Código válido. Aplicado 10% de descuento.";
        message.classList.toggle("text-danger");
        message.classList.remove("text-danger");
        message.classList.add("text-success");
        return true;
    }
}

const getFormRequiredElements = () => {
    const requiredItems = document.querySelectorAll('[required]');
    const elements = {};

    requiredItems.forEach(item => {
        const itemId = item.getAttribute('id');
        elements[itemId] = item;
    });

    return Object.values(elements);
}

const checkFieldsAreEmpty = () => {
    const requiredItems = getFormRequiredElements();

    for (const item of requiredItems) {
        if (item.value === "") {
            isEmpty = true;
            notifyThatFieldIsEmpty(item);
        } else {
            isEmpty = false;
            removeFieldErrorMessage(item);
        }
    }
}

const notifyThatFieldIsEmpty = (item) => {
    const errorMessage = document.createElement("span");
    errorMessage.textContent = "Este elemento no puede quedar vacío";
    errorMessage.classList.add("text-danger");
    item.parentNode.appendChild(errorMessage);
}

const removeFieldErrorMessage = (item) => {
    const errorMessage = item.parentNode.querySelector(".text-danger");
    if (errorMessage) {
        errorMessage.remove();
    }
}

export default validatePromo;
