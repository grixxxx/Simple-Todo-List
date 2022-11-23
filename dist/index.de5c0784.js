const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const list = document.querySelector("ul");
inputEl.value = "";
btnEl.addEventListener("click", ()=>{
    if (!inputEl.value) alert("error");
    else {
        const listItem = document.createElement("li");
        const btnContainer = document.createElement("div");
        listItem.innerText = inputEl.value;
        listItem.classList.add("listItem");
        list.appendChild(listItem);
        listItem.appendChild(btnContainer);
        btnContainer.classList.add("btnContainer");
        inputEl.value = "";
        const doneBtn = document.createElement("button");
        doneBtn.innerText = "Done";
        btnContainer.appendChild(doneBtn);
        doneBtn.addEventListener("click", ()=>{
            listItem.style.cssText = "text-decoration:line-through;   color: gray";
        });
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        btnContainer.appendChild(delBtn);
        delBtn.addEventListener("click", ()=>{
            list.removeChild(listItem);
        });
    }
});

//# sourceMappingURL=index.de5c0784.js.map
