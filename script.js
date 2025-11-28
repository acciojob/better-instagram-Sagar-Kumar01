let parent = document.getElementById("parent");
let images = document.getElementsByClassName("image");

let dragged = null;

// Convert HTMLCollection to Array
[...images].forEach((value) => {

  value.addEventListener("dragstart", (e) => {
    dragged = e.target;
  });

  value.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  value.addEventListener("drop", handleDrop);
});

function handleDrop(e) {
  e.preventDefault();

  let target = e.target;

  if (dragged !== target) {
    let temp = document.createElement("div");

    dragged.before(temp);
    target.before(dragged);
    temp.replaceWith(target);
  }
}
