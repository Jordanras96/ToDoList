const taskList = document.querySelector('#taskList')
const newDivFirst = document.createElement('div')
const newInput = document.createElement('input')
const newDivSecond = document.createElement('div')
const newDivThird = document.createElement('div')
const addBtn = document.querySelector('#addBtn')

function addTask() {
    newDivFirst.classList.add('collapse', 'collapse-arrow', 'bg-base-200', 'my-10');
    newInput.setAttribute('type','radio');
    newInput.setAttribute("placeholder", "Add a Task");
    newInput.setAttribute('name','my-accordion-2');
    newInput.setAttribute('checked','checked');
    newDivSecond.classList.add('collapse-title', 'text-xl', 'font-medium');
    newDivThird.classList.add('collapse-content');

    taskList.appendChild(newDivFirst.append(newInput,newDivSecond,newDivThird))
}
    addBtn.addEventListener("click", function(){
        document.getElementById("taskList").innerHTML = addTask()
    })

