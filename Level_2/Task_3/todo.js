const inputList = document.getElementById("inp-list");
const listContainer = document.getElementById("task-list");

function addTask(){
    if(inputList.value == ''){
        alert("You Must Write Something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputList.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputList.value ="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'SPANN'){
        e.target.parentElement.edit();
    }
});
