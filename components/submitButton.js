export default function SubmitButton() {
  const submitButton = document.createElement("button");
  submitButton.classList.add("btn", "btn__submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Enviar";

  return submitButton;
}
