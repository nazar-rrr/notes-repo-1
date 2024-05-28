const addTasks = () => {
    const tasksItem = document.createElement('div');
    addTasksFieldContent = addTasksField.value.trim();
    const taskContent = `
    <div class="tasks__item--edit hidden">Edit</div>
    <textarea class="tasks__item--field">${addTasksFieldContent}</textarea>
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
    </div>`

    const renderTask = () => {
        manipulateVariableClasses(tasksItem, 'add', 'tasks__item')
        tasksItem.innerHTML = taskContent;
    };

    const pushTask = () => {
        theTasksContainer.appendChild(tasksItem);
        tasksItem.setAttribute('id', `${itemNumber}`)
        itemNumber++;
    };

    renderTask();
    pushTask();

    tasksArray.push(tasksItem);
    addTasksField.value = '';
    manipulateTasksHeading();
};

const removeTasks = (event) => {
    if (event.target.matches('.item--delete__button')) {
        const manipulateContainerItems = () => {
            spliceTasks();
            desktopDevice ? manipulateDesktopContainer() : manipulateTabletContainer();
        };

        const manipulateDesktopContainer = () => {
            removeTasksEditItemButton();
            removeItemDelete();
            removeItemSetImportant();
            removeItemChangeTextSize();
            setTimeout(() => removeTasksItem(), 300);
        };

        const removeTasksEditItemButton = () => {
            removeTasksItems(tasksEditItemButton, 'tasks__item--edit-appear', 'tasks__item--edit-disappear', 'hidden');
        };

        const removeItemDelete = () => {
            removeTasksItems(itemDelete, 'vectors-container__item-appear', 'vectors-container__item-disappear', 'hidden');
        };

        const removeItemSetImportant = () => {
            removeTasksItems(itemSetImportant, 'vectors-container__item-appear', 'vectors-container__item-disappear', 'hidden');
        };

        const removeItemChangeTextSize = () => {
            removeTasksItems(itemChangeTextSize, 'vectors-container__item-appear', 'vectors-container__item-disappear', 'hidden');
        };

        const removeTasksItem = () => {
            tasksItem.setAttribute('class', 'tasks__item-disappear');
            setTimeout(() => tasksItem.classList.add('hidden'), 500);
            setTimeout(() => theTasksContainer.removeChild(tasksItem), 500);
        };

        const manipulateTabletContainer = () => {

        };

        const removeTasksItems = (items, classToRemove, classToAdd, additionalClass) => {
            items.forEach(item => {
                if (item.classList.contains(classToRemove)) manipulateVariableClasses(item, 'remove', classToRemove);
                manipulateVariableClasses(item, 'add', classToAdd);
                setTimeout(() => manipulateVariableClasses(item, 'add', additionalClass), 300);
            });
        };

        const spliceTasks = () => {
            tasksArray.splice(tasksArray.indexOf(tasksItem), 1);
        };

        const desktopDevice = window.innerWidth > 1250;
        const tasksItem = desktopDevice ? event.target.closest('.tasks__item') : document.querySelectorAll('.tasks__item');
        const tasksEditItemButton = document.querySelectorAll('.tasks__item--edit');
        const itemDelete = document.querySelectorAll('.vectors-container__item--delete');
        const itemSetImportant = document.querySelectorAll('.vectors-container__item--set-important');
        const itemChangeTextSize = document.querySelectorAll('.vectors-container__item--change-text-size');

        manipulateContainerItems();
        manipulateTasksHeading();
    };
};

const manipulateTasksHeading = () => {
    tasksArray.length === 0 ? setTimeout(() => removeTasksHeading(), 600) : renderTasksHeading();
};

const renderTasksHeading = () => {
    theTasksHeading.classList.contains('todo-page__tasks--heading-disappear') ? manipulateVariableClasses(theTasksHeading, 'remove', 'todo-page__tasks--heading-disappear') : null;
    theTasksHeading.setAttribute('class', 'todo-page__tasks--heading');
    manipulateVariableClasses(theTasksHeading, 'remove', 'hidden');
    manipulateVariableClasses(theTasksHeading, 'add', 'todo-page__tasks--heading-appear');
};

const removeTasksHeading = () => {
    manipulateVariableClasses(theTasksHeading, 'remove', 'todo-page__tasks--heading-disappear');
    theTasksHeading.setAttribute('class', 'todo-page__tasks--heading-disappear');
    setTimeout(() => manipulateVariableClasses(theTasksHeading, 'add', 'hidden'), 700);
};

const manipulateVariableClasses = (element, action, className) => {
    element.classList[action](className);
};

const theButton = document.querySelector('.add-tasks__item--vector');
const theTasksHeading = document.querySelector('.todo-page__tasks--heading');
const theTasksContainer = document.querySelector('.todo-page__tasks');
const addTasksField = document.querySelector('.add-tasks__item--field');

const tasksArray = [];

let itemNumber = 1;
let addTasksFieldContent = '';

theButton.addEventListener('click', addTasks);
document.addEventListener('click', removeTasks);
