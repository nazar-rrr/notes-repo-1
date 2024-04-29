const theButton = document.querySelector('.add-tasks__item--vector');
const toDoPageTasks = document.querySelector('.todo-page__tasks');

let tasksArray = [];

const addingTasks = () => {
    let addTasksItem = document.querySelector('.add-tasks__item--field');
    let addTasksItemContent = addTasksItem.value.trim();
    let tasksHeading = document.querySelector('.todo-page__tasks--heading');

    if (!tasksHeading) {
        tasksHeading = document.createElement('div');
        tasksHeading.classList.add('todo-page__tasks--heading');
        tasksHeading.innerHTML = '<p>To Do</p>';
        toDoPageTasks.appendChild(tasksHeading);
    }

    const tasksItem = document.createElement('div');
    tasksItem.classList.add('tasks__item');
    tasksItem.innerHTML = `
        <div class="tasks__item--edit hidden">Delete</div>
        <textarea class="tasks__item--field">${addTasksItemContent}</textarea>
        <div class="tasks__item--container-vector hidden">
            <div class="container-vector__change-text-size">
                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white" />
                </svg>
            </div>
            <div class="container-vector__change-text-color">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="white" />
                </svg>
            </div>
            <div class="container-vector__set-important">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" fill="white" />
                </svg>
            </div>
        </div>`;

    toDoPageTasks.appendChild(tasksItem);
    tasksArray.push(addTasksItemContent);
    addTasksItem.value = ' ';
};

const removingTasks = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const tasksEditButtonItem = event.target;
        const tasksItem = event.target.closest('.tasks__item');

        tasksEditButtonItem.classList.remove('tasks__item--edit-appear');
        tasksEditButtonItem.classList.add('tasks__item--edit-disappear');
        setTimeout(() => {
            tasksEditButtonItem.classList.add('hidden');
        }, 300);
        setTimeout(() => {
            tasksItem.setAttribute('class', 'tasks__item-disappear')
        }, 300);
        setTimeout(() => {
            tasksItem.classList.add('hidden');
        }, 890)
        setTimeout(() => {
            toDoPageTasks.removeChild(tasksItem);
        }, 800)
    }
}

theButton.addEventListener('click', addingTasks);
document.addEventListener('click', removingTasks);