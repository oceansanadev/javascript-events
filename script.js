function mouseOver(event) {
  event.target.classList.toggle("active");
}

function mouseOut(event) {
  event.target.classList.toggle("active");
}

function mouseClick(event) {
  event.target.classList.toggle("active");
}

function mouseDoubleClick(event) {
  event.target.classList.toggle("active");
}

function inputOnFocus(event) {
  event.target.classList.toggle("active");
}

function inputOnBlur(event) {
  const text = event.target.value;
  event.target.value = text.toUpperCase();
}
