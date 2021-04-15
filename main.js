let share = document.querySelector(".share-icon");
let pop = document.querySelector(".pop-up");

share.addEventListener("click", () => {
  if (pop.style.display === "none") {
    pop.style.display = "flex";
    pop.style.cursor = "default";
  } else {
    pop.style.display = "none";
  }
});
