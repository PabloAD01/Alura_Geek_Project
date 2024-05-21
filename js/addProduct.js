import { APIConnection } from "./APIConnection.js";

const formulario = document.querySelector("[data-form]");
const requiredFields = document.querySelectorAll("[required]");

function showError(input, message) {
  input.setCustomValidity(message);
  const errorSpan = document.querySelector(`#error-${input.id}`);
  errorSpan.textContent = message;
  input.classList.add("input-error");
}

function clearError(input) {
  input.setCustomValidity("");
  const errorSpan = document.querySelector(`#error-${input.id}`);
  errorSpan.textContent = "";
  input.classList.remove("input-error");
}

function validateFields() {
  let isValid = true;

  requiredFields.forEach((field) => {
    const value = field.value.trim();
    field.value = value;

    if (!value) {
      showError(field, `${field.placeholder} es requerido`);
      isValid = false;
    } else {
      clearError(field);
    }

    if (field.id === "price" && (isNaN(value) || parseFloat(value) <= 0)) {
      showError(field, "El precio debe ser un número positivo");
      isValid = false;
    }

    if (field.id === "image" && !isValidURL(value)) {
      showError(field, "La URL de la imagen no es válida");
      isValid = false;
    }
  });

  return isValid;
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

async function createProduct(event) {
  event.preventDefault();

  if (!validateFields()) {
    return;
  }

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  try {
    await APIConnection.sendProduct(name, price, image);
  } catch (error) {
    alert(error);
  }
}

formulario.addEventListener("submit", createProduct);

// Add blur event listener for each required field to validate on the fly
requiredFields.forEach((field) => {
  field.addEventListener("blur", () => validateFields());
});
