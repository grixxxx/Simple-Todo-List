// const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const list = document.querySelector("ul");
// inputEl.value = "";
// btnEl.addEventListener("click", () => {
//   if (!inputEl.value) {
//     alert("error");
//   } else {
//     const listItem = document.createElement("li");
//     const listItemText = document.createElement("p");
//     const btnContainer = document.createElement("div");
//     listItemText.innerText = inputEl.value;
//     listItemText.setAttribute("contenteditable", "true");
//     listItemText.classList.add("listItemText");
//     listItem.appendChild(listItemText);
//     listItem.classList.add("listItem");
//     list.appendChild(listItem);
//     listItem.appendChild(btnContainer);
//     btnContainer.classList.add("btnContainer");
//     inputEl.value = "";
//     const doneBtn = document.createElement("button");
//     doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
//     btnContainer.appendChild(doneBtn);
//     doneBtn.addEventListener("click", () => {
//       listItemText.style.cssText =
//         "text-decoration:line-through;   color: gray";
//       listItemText.removeAttribute("contenteditable");
//     });
//     const delBtn = document.createElement("button");
//     delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
//     btnContainer.appendChild(delBtn);
//     delBtn.addEventListener("click", () => {
//       list.removeChild(listItem);
//     });
//   }
// });
const modal = document.querySelector(".createModal");
const createBtn = document.querySelector(".createBtn");
const modalBody = document.querySelector(".modalBody");
const modalTitle = document.querySelector(".modalTitle");
btnEl.addEventListener("click", ()=>{
    modal.showModal();
});
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", ()=>{
    modal.close();
    modalBody.value = "";
    modalTitle.value = "";
});
createBtn.addEventListener("click", ()=>{
    const listItem = document.createElement("li");
    listItem.classList.add("listItem");
    const listItemTitle = document.createElement("h1");
    const listItemText = document.createElement("p");
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("listItemContainer");
    listItemTitle.classList.add("listItemContainer-title");
    listItemText.classList.add("listItemContainer-message");
    listItemContainer.appendChild(listItemTitle);
    listItemContainer.appendChild(listItemText);
    listItem.appendChild(listItemContainer);
    listItemTitle.textContent = modalTitle.value;
    listItemText.textContent = modalBody.value;
    list.appendChild(listItem);
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("listItemContainer-button");
    listItem.appendChild(buttonContainer);
    const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    buttonContainer.appendChild(doneBtn);
    buttonContainer.appendChild(delBtn);
    modal.close();
    modalBody.value = "";
    modalTitle.value = "";
    doneBtn.addEventListener("click", ()=>{
        listItemTitle.style.cssText = "text-decoration:line-through;   color: gray";
        listItemText.style.cssText = "text-decoration:line-through;   color: gray";
    });
    delBtn.addEventListener("click", ()=>{
        list.removeChild(listItem);
    });
});

//# sourceMappingURL=index.de5c0784.js.map
