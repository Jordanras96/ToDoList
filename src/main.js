import "./style.css";
import MCDatepicker from "mc-datepicker";

const collectionList = document.querySelector("#collectionList");
const addCollectionBtn = document.querySelector("#addBtn");
const addTaskBtn = document.querySelector("#addTaskBtn");

//datepicker
const picker = MCDatepicker.create({
  el: "#datepicker",
  dateFormat: "dd-mm-yy",
  customWeekDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  customMonths: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  autoClose: true,
  closeOnBlur: true,
  showCalendarDisplay: false,
  selectedDate: new Date(),
  theme: {
    theme_color: "#9C27B0",
    main_background: "#f5f5f6",
    active_text_color: "rgb(242, 242, 242)",
    inactive_text_color: "rgba(242, 242, 242, 0.5)",
    display: {
      foreground: "rgba(255, 255, 255, 0.8)",
      background: "#38ada9",
    },
    picker: {
      foreground: "rgba(0, 0, 0)",
      background: "#000000",
    },
    picker_header: {
      active: '#818181',
      inactive: 'rgba(0, 0, 0, 0.2)'
  }
  },
  
});

const date = picker.getDate();
console.log("la date est " + date);

// addTask
function addTask() {
// let taskName = document.getElementById('task-name').value;
// if (taskName == "") return alert("Please enter a name for your task");
// let tasksList = JSON.parse(localStorage.getItem("tasks")); // get the list of all tasks from local storage and parse it to an array
// else if (!picker) return alert("Please select the due date of this task")
// else{
//   tasksList.push({id : tasksList[tasksList.length - 1].id+1 , title : taskName, completed :false
//     }) ;
//     }
 let taskName = document.getElementById("taskNameInput").value;
 if (taskName == ""  ) {
  alert ("please fill in all fields")
    }
    else {
      let taskList = JSON.parse(LocalStorage.getItem("taskName"));      
  };
  if (!picker) {
    alert("please sleect the due date of this task")
  } else {
    taskList.push ({
      id: tas
    })
  }
 }



// collection
function addCollection() {
  let nameCollection = document.querySelector("#newCollection").value;
  const accordionInput = document.createElement("input");
  const spanDiv = document.createElement("span");
  const taskModalAddLabel = document.createElement("label");
  const taskAddImg = document.createElement("img");
  const globalDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const controler = document.createElement("div");
  const createModal = document.createElement("div");
  const taskModalToggleAdd = document.createElement("input");
  const taskDiv = document.createElement("div");

  globalDiv.classList.add("collapse", "collapse-arrow", "bg-base-200", "my-10");
  accordionInput.type = "radio";
  accordionInput.placeholder = "Add a Task";
  accordionInput.name = "my-accordion-2";
  accordionInput.setAttribute("checked", "checked");
  titleDiv.classList.add("collapse-title", "text-xl", "font-medium", "capitalize");
  titleDiv.textContent = nameCollection;
  contentDiv.classList.add("collapse-content");
  controler.id = "control";
  controler.classList.add("flex", "justify-end", "items-center");
  createModal.classList.add("tooltip", "tooltip-info", "tooltip-left");
  createModal.setAttribute("data-tip", "Add Task");
  taskModalAddLabel.id = "addTask";
  taskModalAddLabel.classList.add("btn");
  taskModalAddLabel.setAttribute("for", "my_modal_7");
  taskAddImg.src = "./src/assets/addTask.gif";
  taskAddImg.alt = "Animate add task icon";
  taskAddImg.classList.add("w-10");
  taskModalToggleAdd.id = "my_modal_7";
  taskModalToggleAdd.type = "checkbox"
  taskModalToggleAdd.classList.add("modal-toggle");
  taskDiv.classList.add("relative", "w-full", "max-w-md", "max-h-full");


  taskModalAddLabel.appendChild(taskAddImg);
  createModal.append(taskModalAddLabel, taskModalToggleAdd, taskDiv);
  controler.appendChild(createModal);
  globalDiv.append(accordionInput, titleDiv, contentDiv, controler);
  titleDiv.appendChild(spanDiv);
  contentDiv.appendChild(spanDiv);
  collectionList.appendChild(globalDiv);

  document.querySelector("#newCollection").value = "";
}
// écoute btn addcallection
addCollectionBtn.addEventListener("click", function () {
  addCollection();
});
addTaskBtn.addEventListener("click", function () {
  addTask();
})