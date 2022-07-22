const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const addBtn2 = document.querySelector(".btn-add2");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
  
  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  } else {
    alert("No dejar campo de texto vacio")
  }
});

addBtn2.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
  
  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  } else {
    alert("No dejar campo de texto vacio")
  }
});



function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete fa-solid fa-trash-can";

  deleteBtn.addEventListener("mouseover", () => {
    deleteBtn.className = "btn-delete fa-solid fa-trash";
  })
  deleteBtn.addEventListener("mouseout", () => {
    deleteBtn.className = "btn-delete fa-solid fa-trash-can";
  })

  
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "flex";
    }
  });

  return deleteBtn;
}
