const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const list = document.querySelector("ul");

inputEl.value = "";

btnEl.addEventListener("click", () => {
  if (!inputEl.value) {
    alert("error");
  } else {
    const listItem = document.createElement("li");
    listItem.innerText = inputEl.value;
    list.appendChild(listItem);

    inputEl.value = "";

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
      listItem.style.cssText = "text-decoration:line-through;   color: gray";
    });

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    listItem.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  }
});
