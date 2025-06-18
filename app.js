const addBtn = document.querySelector(".add-button");
const openModalBtn = document.querySelector(".add-task");
const modal = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".close-btn");
const inputField = document.querySelector(".my-input");
const bottomSection = document.querySelector(".bottom-section");

let currentSpan = null;

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

addBtn.addEventListener("click", handleAddOrUpdate);

function closeModal() {
  modal.classList.remove("show");
  inputField.value = "";
  addBtn.textContent = "Add";
  currentSpan = null;
}

function handleAddOrUpdate() {
  const taskText = inputField.value.trim();
  if (taskText === "") {
    alert("Your input is empty. Please write something!");
    return;
  }

  if (addBtn.textContent === "Update" && currentSpan) {
    currentSpan.textContent = taskText;
    closeModal();
    return;
  }

  createTaskElement(taskText);
  closeModal();
}

function createTaskElement(text) {
  const box = document.createElement("div");
  box.className = "box";

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  label.appendChild(checkbox);
  label.appendChild(span);
  li.appendChild(label);
  ul.appendChild(li);
  box.appendChild(ul);

  const lineSection = document.createElement("div");
  lineSection.className = "line-section";
  const line = document.createElement("div");
  line.className = "line";
  lineSection.appendChild(line);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";

  const editBtn = document.createElement("i");
  editBtn.className = "fa-solid fa-pen-to-square btn-cmn";
  editBtn.title = "Edit";
  editBtn.addEventListener("click", () => {
    currentSpan = span;
    inputField.value = span.textContent;
    addBtn.textContent = "Update";
    modal.classList.add("show");
  });

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-regular fa-trash-can btn-cmn";
  deleteBtn.title = "Delete";
  deleteBtn.addEventListener("click", () => {
    box.remove();
    lineSection.remove();
  });

  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);
  box.appendChild(buttonsDiv);

  bottomSection.appendChild(box);
  bottomSection.appendChild(lineSection);
}
