const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-container");
const addItemOverlay = document.getElementById("addItemOverlay");
const addItemOverlayBG = document.getElementById("addItemOverlayBG");

function addTask() {
  disableOverlay();

  const taskText = inputBox.value.trim(); // Trim to remove leading and trailing whitespaces

  if (!taskText) {
    alert("You must write something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = taskText;

    const removeButton = document.createElement("span");
    removeButton.innerHTML = "X";
    removeButton.onclick = function () {
      li.remove();
      saveData();
    };

    li.appendChild(removeButton);
    listContainer.appendChild(li);
    saveData();
  }

  inputBox.value = "";
}

function enableOverlay() {
  addItemOverlay.style.display = "inline-block";
  addItemOverlayBG.style.display = "inline-block";
}

function disableOverlay() {
  addItemOverlay.style.display = "none";
  addItemOverlayBG.style.display = "none";
}

listContainer.addEventListener("click", function (e) {
  const target = e.target;

  if (target.tagName === "LI") {
    target.classList.toggle("completed");
    saveData();
  } else if (target.tagName === "SPAN") {
    target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("loadList", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("loadList") || ""; // Default to an empty string if there's no saved data
}

loadData();
