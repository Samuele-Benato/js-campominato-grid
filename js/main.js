const button = document.getElementById("pulsante");
const grid = document.getElementById("griglia");
const difficult = document.getElementById("difficoltà");

button.addEventListener("click", function () {
  let colonne = 10;

  if (difficult.value == "1") {
    grid.classList.add("difficult_easy");
    colonne = 10;
  }
  if (difficult.value == "2") {
    grid.classList.add("difficult _medium");
    colonne = 9;
  }
  if (difficult.value == "3") {
    grid.classList.add("difficult _hard");
    colonne = 7;
  }
  generaGriglia();

  return colonne;
});

function generaGriglia() {
  grid.innerHTML = "";
  for (let i = 1; i <= colonne * colonne; i++) {
    const cell = generaCella(i);
    grid.append(cell);
  }
}

function generaCella() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerText = i;

  cell.addEventListener("click", function () {
    this.classList.add("azure");
    console.log(i);
  });
  return cell;
}
