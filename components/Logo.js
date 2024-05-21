export default function Logo() {
  const heartsNumberArray = [0, 1, 2];

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo__container");

  heartsNumberArray.forEach(() => {
    const img = document.createElement("img");
    img.src = "./images/Pixel_Red_Heart.png";
    img.alt = "Pixel Heart";
    img.width = 24;

    logoContainer.appendChild(img);
  });
  const text = document.createElement("h1");
  text.innerText = "AluraGeek";
  text.style.fontSize = "24px";

  logoContainer.appendChild(text);

  return logoContainer;
}
