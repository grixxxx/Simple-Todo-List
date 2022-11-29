const modalBtn = document.querySelector(".enterBtn");
const list = document.querySelector("ul");

const modal = document.querySelector(".createModal");
const modalBody = document.querySelector(".modalBody");
const modalTitle = document.querySelector(".modalTitle");

const notesArr = JSON.parse(localStorage.getItem("notesArr") || "[]");

modalBtn.addEventListener("click", () => {
  modal.showModal();
});

const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  modal.close();
  modalBody.value = "";
  modalTitle.value = "";
});

const createBtn = document.querySelector(".createBtn");

function showNotes() {
  notesArr.forEach((note) => {
    let listOfItem = `<li class="listItem">
  <div class="listItemContainer">
    <h1 class="listItemContainer-title">${note.title}</h1>

    <p class="listItemContainer-message">${note.body}</p>
  </div>

  <div class="listItemContainer-button">
    <button><i class="fa-solid fa-circle-check"></i></button>
    <button><i class="fa-solid fa-trash"></i></button>
  </div>
</li>
`;

    list.insertAdjacentHTML("beforeend", listOfItem);
  });
}
showNotes();

createBtn.addEventListener("click", () => {
  if (!modalTitle.value) {
    alert("Error");
  } else {
    modal.close();
    document.querySelectorAll(".listItem").forEach((items) => items.remove());

    let listItemTitle = modalTitle.value,
      listItemText = modalBody.value;

    let notes = {
      title: listItemTitle,
      body: listItemText,
    };

    notesArr.push(notes);
    localStorage.setItem("notesArr", JSON.stringify(notesArr));

    showNotes();

    modalBody.value = "";
    modalTitle.value = "";
  }
});
