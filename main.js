import Logo from "./components/Logo.js";
import submitButton from "./components/submitButton.js";
import cleanButton from "./components/cleanButton.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

header.appendChild(Logo());
footer.appendChild(Logo());

const formButtons = document.getElementsByClassName("form__buttons")[0];
formButtons.appendChild(submitButton());
formButtons.appendChild(cleanButton());
