const btnEl = document.querySelector("button");
const list = document.querySelector("ul");
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
const listItem = document.createElement("li");
createBtn.addEventListener("click", ()=>{
    if (!modalTitle.value) alert("Error");
    else {
        const listItem = document.createElement("li");
        listItem.classList.add("listItem");
        const listItemTitle = document.createElement("h1");
        listItemTitle.classList.add("listItemContainer-title");
        const listItemText = document.createElement("p");
        listItemText.classList.add("listItemContainer-message");
        listItemTitle.textContent = modalTitle.value;
        listItemText.textContent = modalBody.value;
        const listItemContainer = document.createElement("div");
        listItemContainer.classList.add("listItemContainer");
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("listItemContainer-button");
        const doneBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        list.appendChild(listItem);
        listItemContainer.appendChild(listItemTitle);
        listItemContainer.appendChild(listItemText);
        listItem.appendChild(listItemContainer);
        listItem.appendChild(buttonContainer);
        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(delBtn);
        list.removeChild(emptyMessage);
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
    }
});
const emptyMessage = document.createElement("p");
emptyMessage.classList.add("emptyMessage");
emptyMessage.textContent = "looks like you don't have plans for today....";
emptyMessage.style.cssText = "color: black; opacity: 0.2; font-size: 0.8rem";
if (!list.contains(listItem)) list.appendChild(emptyMessage);

//# sourceMappingURL=index.de5c0784.js.map
