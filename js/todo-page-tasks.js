const theButton = document.querySelector('.add-tasks__item--vector');
const toDoPageTasks = document.querySelector('.todo-page__tasks');
const addTasksItem = document.querySelector('.add-tasks__item--field');

let addTasksItemContent = '';
let tasksHeading = document.querySelector('.todo-page__tasks--heading');

const tasksArray = [];

const manipulateTasksHeading = () => {
    if (tasksArray.length === 0) {
        setTimeout(() => {
            tasksHeading.setAttribute('class', 'todo-page__tasks--heading-disappear');
            setTimeout(() => {
                tasksHeading.classList.add('hidden');
            }, 700)
        }, 600)
    } else {
        tasksHeading.classList.remove('hidden');
    }
};

const addingTasks = () => {
    addTasksItemContent = addTasksItem.value.trim();

    if (tasksArray.length === 0) {
        tasksHeading = document.createElement('div');
        tasksHeading.classList.add('todo-page__tasks--heading');
        tasksHeading.innerHTML = '<p>To Do</p>';
        toDoPageTasks.appendChild(tasksHeading);
    }

    const tasksItem = document.createElement('div');
    tasksItem.classList.add('tasks__item');
    tasksItem.innerHTML = `
        <div class="tasks__item--edit hidden">Edit</div>
        <textarea class="tasks__item--field">${addTasksItemContent}</textarea>
        <div class="tasks__item--vectors-container hidden"> 
        <div class="vectors-container__item--set-important hidden">
        <svg class="item--set-important" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="item--set-important__button" width="20" height="20" fill="white" />
        </svg>
        <p class="item--set-important__article hidden">Set Important</p> 
        </div>
        <div class="vectors-container__item--change-text-size hidden">
        <svg class="item--change-text-size" width="21" height="21" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="item--change-text-size__button" cx="10" cy="10" r="10" fill="white" />
        </svg>
        <p class="item--change-text-size__article hidden">Change Size</p> 
        </div>
        <div class="vectors-container__item--delete hidden">
        <svg class="item--delete" width="20" height="23" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="item--delete__button" d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white" />
        </svg>
        <p class="item--delete__article hidden">Delete</p> 
        </div>
        </div>`;

    toDoPageTasks.appendChild(tasksItem);
    tasksArray.push(tasksItem);
    addTasksItem.value = '';

    manipulateTasksHeading();
};

const removingTasks = (event) => {
    if (event.target.matches('.item--delete__button')) {
        const tasksItem = document.querySelectorAll('.tasks__item');
        const tasksEditItemButton = document.querySelectorAll('.tasks__item--edit');

        const itemDelete = document.querySelectorAll('.vectors-container__item--delete');
        const itemSetImportant = document.querySelectorAll('.vectors-container__item--set-important');
        const itemChangeTextSize = document.querySelectorAll('.vectors-container__item--change-text-size');

        tasksArray.splice(tasksArray.indexOf(tasksItem), 1);

        const renderVectorContainerItems = (element, action, className) => {
            element.classList[action](className);
        };

        itemDelete.forEach(deleteItem => {
            if (deleteItem.classList.contains('item--vectors-container-appear')) {
                renderVectorContainerItems(deleteItem, 'remove', 'item--vectors-container-appear');
            }

            renderVectorContainerItems(deleteItem, 'add', 'item--vectors-container-disappear');
            setTimeout(() => {
                renderVectorContainerItems(deleteItem, 'add', 'hidden');
            }, 300);
        });

        itemSetImportant.forEach(setImportantItem => {
            if (setImportantItem.classList.contains('item--vectors-container-appear')) {
                renderVectorContainerItems(setImportantItem, 'remove', 'item--vectors-container-appear');
            }

            renderVectorContainerItems(setImportantItem, 'add', 'item--vectors-container-disappear');
            setTimeout(() => {
                renderVectorContainerItems(setImportantItem, 'add', 'hidden');
            }, 300);
        });

        itemChangeTextSize.forEach(changeTextSizeItem => {
            if (changeTextSizeItem.classList.contains('item--vectors-container-appear')) {
                renderVectorContainerItems(changeTextSizeItem, 'remove', 'item--vectors-container-appear');
            }

            renderVectorContainerItems(changeTextSizeItem, 'add', 'item--vectors-container-disappear');
            setTimeout(() => {
                renderVectorContainerItems(changeTextSizeItem, 'add', 'hidden');
            }, 300);
        });

        tasksEditItemButton.forEach(editButtonItem => {
            if (editButtonItem.classList.contains('tasks__item--edit-appear')) {
                editButtonItem.classList.remove('tasks__item--edit-appear');
            }

            editButtonItem.classList.add('tasks__item--edit-disappear');
            setTimeout(() => {
                editButtonItem.classList.add('hidden');
            }, 300);
        });

        setTimeout(() => {
            tasksItem.forEach((arg) => {
                arg.setAttribute('class', 'tasks__item-disappear');
                setTimeout(() => {
                    arg.classList.add('hidden');
                }, 500);

                setTimeout(() => {
                    toDoPageTasks.removeChild(arg);
                }, 500);
            }, 300);
        });
        manipulateTasksHeading();
    };
};

theButton.addEventListener('click', addingTasks);
document.addEventListener('click', removingTasks);