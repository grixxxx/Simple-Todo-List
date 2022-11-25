const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const list = document.querySelector("ul");

inputEl.value = "";

btnEl.addEventListener("click", () => {
  if (!inputEl.value) {
    alert("error");
  } else {
    const listItem = document.createElement("li");
    const listItemText = document.createElement("p");
    const btnContainer = document.createElement("div");
    listItemText.innerText = inputEl.value;
    listItemText.classList.add("listItemText");
    listItem.appendChild(listItemText);
    listItem.classList.add("listItem");
    list.appendChild(listItem);
    listItem.appendChild(btnContainer);
    btnContainer.classList.add("btnContainer");

    inputEl.value = "";

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    btnContainer.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
      listItemText.style.cssText =
        "text-decoration:line-through;   color: gray";
    });

    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnContainer.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  }
});
