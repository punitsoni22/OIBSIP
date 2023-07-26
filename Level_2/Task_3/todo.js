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

        // let em = document.createElement("em");
        // em.innerHTML = "EDIT";
        // li.appendChild(em);
        
        let task_edit = document.createElement("button");
        task_edit.classList.add('edit');
        task_edit.innerText = 'Edit';
        li.appendChild(task_edit);
    }
    inputList.value ="";
}

const task_input = document.createElement('input');
task_input.classList.add('text');
task_input,type = 'text';
task_input.value = "task";
task_input.setAttribute('readonly', 'readonly');
task_input.appendChild(task_input);

task_edit.addEventListener('click', (e) => {
    if(task_edit.innerText.toLowercase() === "edit"){
        task_edit.innerText = 'Save';
        task_input.removeAttribute("readonly");
        task_input.focus();
    } else{
        task_edit.innerText = 'Edit';
        task_input.setAttribute("readonly", "readonly");
    }
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
});

