const button = document.querySelector(".btn");
button.onclick = generateSquare;

let isGenerated = false;

function createBoxElement() {
  const container = document.querySelector(".container");
  for (let i = 0; i < 25; i++) {
    const div = document.createElement(`div`);
    div.classList.add("box");
    container.append(div);
    div.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

function generateSquare() {
  if (!isGenerated) {
    createBoxElement();
    isGenerated = true;
  }
  getBlockInterval();
}

function getBlockInterval() {
  setInterval(() => {
    for (let i of document.querySelectorAll(".box")) {
      i.style.backgroundColor = getRandomColor();
    }
  }, 1000);
}
