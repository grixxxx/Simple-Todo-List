const modalBtn = document.querySelector(".enterBtn");
const list = document.querySelector("ul");

const modal = document.querySelector(".createModal");
const modalTitle = document.querySelector(".modalTitle");
const modalBody = document.querySelector(".modalBody");
const modalCreateBtn = document.querySelector(".createBtn");

const notesArr = JSON.parse(localStorage.getItem("notesArr") || "[]");

modalBtn.addEventListener("click", () => {
  modal.style.cssText = "animation: fade-in 500ms ease;";
  modal.showModal();
});

const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  modal.style.cssText = "animation: fade-out 300ms ease;";

  setTimeout(() => {
    modal.close();
    modalBody.value = "";
    modalTitle.value = "";
  }, 300);
});

const createBtn = document.querySelector(".createBtn");

function showNotes() {
  notesArr.forEach((note, index) => {
    const listOfItem = `<li class="listItem">
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
              <button onclick ="deleteNote(${index})">Delete</button>
            </ul>
          </div>
        </li>
`;

    list.insertAdjacentHTML("beforeend", listOfItem);
  });
}
showNotes();

function deleteNote(noteId) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this note!",
    buttons: [true, "Yes"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! notes has been deleted!", {
        icon: "success",
        buttons: false,
      });
      setTimeout(() => {
        swal.close();
      }, 1000);

      notesArr.splice(noteId, 1);
      document.querySelectorAll(".listItem").forEach((items) => items.remove());
      localStorage.setItem("notesArr", JSON.stringify(notesArr));
      showNotes();
    }
  });
}

createBtn.addEventListener("click", async () => {
  modal.style.cssText = "animation: fade-out 300ms ease;";

  setTimeout(() => {
    modal.close();
    modalBody.value = "";
    modalTitle.value = "";
  }, 300);

  document.querySelectorAll(".listItem").forEach((items) => items.remove());

  let listItemTitle = modalTitle.value,
    listItemBody = modalBody.value;

  let notes = {
    title: listItemTitle,
    body: listItemBody,
  };

  notesArr.push(notes);
  localStorage.setItem("notesArr", JSON.stringify(notesArr));

  showNotes();
});

const noteReminder = document.querySelector(".note-reminder");

setInterval(() => {
  if (!modalBody.value && !modalTitle.value) {
    modalCreateBtn.setAttribute("disabled", "");
    modalCreateBtn.style.cssText =
      "background-color: transparent; color: #dbdbdb; cursor: not-allowed; ";
  } else {
    modalCreateBtn.removeAttribute("disabled");
    modalCreateBtn.style.cssText = "background-color: #dbdbdb; color: #ff773d";
  }

  const listItem = document.querySelector(".listItem");

  !list.contains(listItem)
    ? (noteReminder.style.display = "block")
    : (noteReminder.style.display = "none");

  console.log(listItem.innerText);
}, 300);

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const ListItemData = document.querySelectorAll(".listItem");

  ListItemData.forEach((filteredNotes) => {
    !filteredNotes.innerText.toLowerCase().includes(searchValue)
      ? filteredNotes.classList.add("hides")
      : filteredNotes.classList.remove("hides");
  });
});
