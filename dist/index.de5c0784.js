const modalBtn = document.querySelector(".enterBtn");
const list = document.querySelector("ul");
const modal = document.querySelector(".createModal");
const modalBody = document.querySelector(".modalBody");
const modalTitle = document.querySelector(".modalTitle");
const modalCreateBtn = document.querySelector(".createBtn");
const notesArr = JSON.parse(localStorage.getItem("notesArr") || "[]");
modalBtn.addEventListener("click", ()=>{
    modal.showModal();
});
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", ()=>{
    modal.close();
    modalBody.value = "";
    modalTitle.value = "";
});
const createBtn = document.querySelector(".createBtn");
function showNotes() {
    notesArr.forEach((note, index)=>{
        let listOfItem = `<li class="listItem">
          <div class="listItemContainer">
            <h1 class="listItemContainer-title">${note.title}</h1>

            <p class="listItemContainer-message">${note.body}</p>
          </div>

          <div class="listItemContainer-button">
            <button class="listItemMenu">
              <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="4.06422" cy="3.55263" rx="3.07045" ry="3.55263" fill="#333333" fill-opacity="0.5"/>
<ellipse cx="12.6615" cy="3.55263" rx="3.07045" ry="3.55263" fill="#333333" fill-opacity="0.5"/>
<ellipse cx="21.2588" cy="3.55263" rx="3.07045" ry="3.55263" fill="#333333" fill-opacity="0.5"/>
</svg>

            </button>
            <ul class="sidebarMenu">
              <li>Edit</li>
              <li onclick="deleteNote(${index})">Delete</li>
            </ul>
          </div>
        </li>
`;
        list.insertAdjacentHTML("beforeend", listOfItem);
    });
}
showNotes();
function deleteNote(noteId) {
    notesArr.splice(noteId, 1);
    document.querySelectorAll(".listItem").forEach((items)=>items.remove());
    localStorage.setItem("notesArr", JSON.stringify(notesArr));
    showNotes();
}
createBtn.addEventListener("click", ()=>{
    if (!modalBody.value) alert("Error");
    else {
        modal.close();
        document.querySelectorAll(".listItem").forEach((items)=>items.remove());
        let listItemTitle = modalTitle.value, listItemText = modalBody.value;
        let notes = {
            title: listItemTitle,
            body: listItemText
        };
        notesArr.push(notes);
        localStorage.setItem("notesArr", JSON.stringify(notesArr));
        showNotes();
        modalBody.value = "";
        modalTitle.value = "";
    }
});
setInterval(()=>{
    if (!modalBody.value && !modalTitle.value) {
        modalCreateBtn.setAttribute("disabled", "");
        modalCreateBtn.style.cssText = "background-color: transparent; color: #dbdbdb; cursor: not-allowed; ";
    } else {
        modalCreateBtn.removeAttribute("disabled");
        modalCreateBtn.style.cssText = "background-color: #dbdbdb; color: #ff773d";
    }
}, 500);

//# sourceMappingURL=index.de5c0784.js.map
