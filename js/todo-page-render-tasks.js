const theButton = document.querySelector('.add-tasks__field-container--item-vector');
const toDoPageTasks = document.querySelector('.todo-page__tasks');
let addTasksFieldContainerItem = document.querySelector('.add-tasks__field-container--item');

let tasksArray = [];

const tasksAddition = () => {
    let addTasksFieldContainerItemContent = addTasksFieldContainerItem.value.trim();
    let toDoPageTasksHeading = document.querySelector('.todo-page__tasks-heading');

    if (!toDoPageTasksHeading) {
        toDoPageTasksHeading = document.createElement('div');
        toDoPageTasksHeading.classList.add('todo-page__tasks-heading');
        toDoPageTasksHeading.innerHTML = '<p class="todo-page__tasks-heading--article">To Do</p>';
        toDoPageTasks.appendChild(toDoPageTasksHeading);
    }

    const tasksFieldContainer = document.createElement('div');
    tasksFieldContainer.classList.add('tasks__field-container');
    tasksFieldContainer.innerHTML = `
        <div class="tasks__field-container--item-edit hidden">Delete</div>
        <textarea class="tasks__field-container--item">${addTasksFieldContainerItemContent}</textarea>
        <div class="tasks__field-container--items hidden">
            <div class="tasks__field-container--item--change-text-size">
                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white" />
                </svg>
            </div>
            <div class="tasks__field-container--item--change-text-color">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="white" />
                </svg>
            </div>
            <div class="tasks__field-container--item--set-important">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" fill="white" />
                </svg>
            </div>
        </div>`;
    
    toDoPageTasks.appendChild(tasksFieldContainer);
    tasksArray.push(addTasksFieldContainerItemContent);
    addTasksFieldContainerItem.value = ' ';
};

theButton.addEventListener('click', tasksAddition);