const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-container");
const addItemOverlay = document.getElementById("addItemOverlay");
const addItemOverlayBG = document.getElementById("addItemOverlayBG");

function AddTask(){
    DisableOverlay();
    if(inputBox.value === ''){
        alert("You Must Write Something");
    }
    else{    
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = '';
}

function EnableOverlay(){
    addItemOverlay.style.display = "inline-block";
    addItemOverlayBG.style.display = "inline-block";
}

function DisableOverlay(){
    addItemOverlay.style.display = "none";
    addItemOverlayBG.style.display = "none";
}
