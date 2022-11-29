const modalBtn = document.querySelector("button");
const list = document.querySelector("ul");
const modal = document.querySelector(".createModal");
const modalBody = document.querySelector(".modalBody");
const modalTitle = document.querySelector(".modalTitle");
modalBtn.addEventListener("click", ()=>{
    modal.showModal();
});
const emptyMessage = document.createElement("p");
emptyMessage.classList.add("emptyMessage");
emptyMessage.textContent = "looks like you don't have plans for today....";
emptyMessage.style.cssText = "color: black; opacity: 0.2; font-size: clamp(0.8rem,3vw,1.2rem);  transform: translateY(15vh); position: absolute; left: 0; right: 0 ;";
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", ()=>{
    modal.close();
    modalBody.value = "";
    modalTitle.value = "";
});
const listItem = document.createElement("li");
const notesArr = JSON.parse(localStorage.getItem("notesArr") || "[]");
const createBtn = document.querySelector(".createBtn");
createBtn.addEventListener("click", ()=>{
    if (!modalTitle.value) alert("Error");
    else {
        modal.close();
        const doneBtn = document.createElement("button"), delBtn = document.createElement("button");
        const listItem = document.createElement("li"), listItemTitle = document.createElement("h1"), listItemText = document.createElement("p");
        listItem.classList.add("listItem");
        listItemTitle.classList.add("listItemContainer-title");
        listItemText.classList.add("listItemContainer-message");
        listItemTitle.textContent = modalTitle.value;
        listItemText.textContent = modalBody.value;
        const listItemContainer = document.createElement("div"), buttonContainer = document.createElement("div");
        listItemContainer.classList.add("listItemContainer");
        buttonContainer.classList.add("listItemContainer-button");
        doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        doneBtn.addEventListener("click", ()=>{
            listItemTitle.style.cssText = "text-decoration:line-through;   color: gray";
            listItemText.style.cssText = "text-decoration:line-through;   color: gray";
        });
        //TODO:
        delBtn.addEventListener("click", ()=>{
            list.removeChild(listItem);
        });
        list.appendChild(listItem);
        listItemContainer.appendChild(listItemTitle);
        listItemContainer.appendChild(listItemText);
        listItem.appendChild(listItemContainer);
        listItem.appendChild(buttonContainer);
        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(delBtn);
        modalBody.value = "";
        modalTitle.value = "";
        //FIXME:
        let notes = {
            title: listItemTitle.textContent,
            body: listItemText.textContent
        };
        notesArr.push(notes);
        localStorage.setItem("notesArr", JSON.stringify(notesArr));
    }
});
notesArr.forEach((notes)=>{
    const liTag = document.createElement("li");
    liTag.classList.add("listItem");
    liTag.innerHTML = `
  <div class="listItemContainer">
    <h1 class="listItemContainer-title">${notes.title}</h1>
    <p class="listItemContainer-message">${notes.body}</p>
  </div>
  <div class="listItemContainer-button">
    <button><i class="fa-solid fa-circle-check"></i></button>
    <button><i class="fa-solid fa-trash"></i></button>
  </div>
`;
    list.appendChild(liTag);
    localStorage.setItem("notesArr", JSON.stringify(notesArr));
});
list.appendChild(emptyMessage);
if (list) list.appendChild(emptyMessage);
else list.removeChild(emptyMessage);

//# sourceMappingURL=index.de5c0784.js.map
