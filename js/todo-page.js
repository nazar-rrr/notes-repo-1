const theButton = document.querySelector('.add-tasks__field-container--item-vector')
const toDoPageTasks = document.querySelector('.todo-page__tasks');
const addTasksFieldContainerItem = document.querySelector('.add-tasks__field-container--item');
const addTasksFieldContainerItemContent = addTasksFieldContainerItem.textContent;

let tasksArray = [];

const tasksAddition = () => {
    const tasksFieldContainer = document.createElement('div');
    tasksFieldContainer.classList.add('tasks__field-container');
    tasksFieldContainer.innerHTML = `
        <div class="tasks__field-container--item-edit">Edit</div>
        <textarea class="tasks__field-container--item" readonly></textarea>
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

    const tasksFieldContainerItem = tasksFieldContainer.querySelector('.tasks__field-container--item-edit');
    tasksFieldContainerItem.textContent = addTasksFieldContainerItemContent;

    toDoPageTasks.appendChild(tasksFieldContainer);
    tasksArray.push(addTasksFieldContainerItemContent);

}

theButton.addEventListener('click', tasksAddition)


const tasksRemoving = () => {

}


