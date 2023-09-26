const inp = document.getElementById("inputt");
const but = document.getElementById("buttonn");
const ull = document.getElementById("list");

function add() {
  const task = inp.value;
  if (task.trim() !== "") {
    const Item = document.createElement("li");
    Item.textContent = task;
    ull.appendChild(Item);
    inp.value = "";
  }
}

but.addEventListener("click", add);

inp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    add();
  }
});
