export default function CleanButton() {
  const cleanButton = document.createElement("button");
  cleanButton.classList.add("btn", "btn__clean");
  cleanButton.innerText = "Limpiar";

  cleanButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("[data-name]").value = "";
    document.querySelector("[data-price]").value = "";
    document.querySelector("[data-image]").value = "";
  });

  return cleanButton;
}
