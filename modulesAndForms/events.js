// Trabajando con módulos
import validatePromo from "./validate.js";

const btnPromo = document.querySelector("[data-promo]");

btnPromo.addEventListener('click', validatePromo);