const btnEl = document.querySelector("button");
const list = document.querySelector("ul");

const modal = document.querySelector(".createModal");
const createBtn = document.querySelector(".createBtn");
const modalBody = document.querySelector(".modalBody");
const modalTitle = document.querySelector(".modalTitle");

btnEl.addEventListener("click", () => {
  modal.showModal();
});

const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  modal.close();
  modalBody.value = "";
  modalTitle.value = "";
});

const listItem = document.createElement("li");

const notesArr = [];

const notesList = JSON.parse(localStorage.getItem("notesArr") || "[]");

console.log(notesList);

const doneBtn = document.createElement("button");
const delBtn = document.createElement("button");

createBtn.addEventListener("click", () => {
  if (!modalTitle.value) {
    alert("Error");
  } else {
    modal.close();

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

    doneBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    doneBtn.addEventListener("click", () => {
      listItemTitle.style.cssText =
        "text-decoration:line-through;   color: gray";
      listItemText.style.cssText =
        "text-decoration:line-through;   color: gray";
    });

    delBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
    list.appendChild(listItem);

    listItemContainer.appendChild(listItemTitle);

    listItemContainer.appendChild(listItemText);

    listItem.appendChild(listItemContainer);

    modalBody.value = "";
    modalTitle.value = "";

    listItem.appendChild(buttonContainer);
    buttonContainer.appendChild(doneBtn);
    buttonContainer.appendChild(delBtn);

    let notes = {
      title: listItemTitle.textContent,
      body: listItemText.textContent,
    };

    notesArr.push(notes);
    localStorage.setItem("notesArr", JSON.stringify(notesArr));
  }
});

notesList.forEach((notes) => {
  let liTags = `<li class="listItem">
  <div class="listItemContainer">
    <h1 class="listItemContainer-title">${notes.title}</h1>
    <p class="listItemContainer-message">${notes.body}</p>
  </div>
  <div class="listItemContainer-button">
    <button><i class="fa-solid fa-circle-check"></i></button
    ><button>
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
</li>
`;

  const liTag = document.createElement("li");
  liTag.innerHTML = liTags;
  list.appendChild(liTag);
  localStorage.setItem("notesArr", JSON.stringify(notesArr));
});

const emptyMessage = document.createElement("p");

emptyMessage.classList.add("emptyMessage");

emptyMessage.textContent = "looks like you don't have plans for today....";
emptyMessage.style.cssText =
  "color: black; opacity: 0.2; font-size: clamp(0.8rem,3vw,1.2rem);  transform: translateY(15vh)";
list.append(emptyMessage);
