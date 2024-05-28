const renderVectorContainerItems = (element, action, className) => {
    element.classList[action](className);
};

const renderTasksEditButtonItem = (event) => {
    if (event.target.matches('.tasks__item')) {
        const tasksEditButtonItem = event.target.querySelector('.tasks__item--edit');
        tasksEditButtonItem.setAttribute('id', `${event.target.id}`)
        renderVectorContainerItems(tasksEditButtonItem, 'remove', 'hidden');
        renderVectorContainerItems(tasksEditButtonItem, 'remove', 'tasks__item--edit-disappear');
        renderVectorContainerItems(tasksEditButtonItem, 'add', 'tasks__item--edit-appear');
    }
};

const removeTasksEditButtonItem = (event) => {
    const tasksEditButtonItem = document.querySelectorAll('.tasks__item--edit');
    const vectorsContainerItems = document.querySelectorAll('.vectors-container__item--set-important, .vectors-container__item--change-text-size, .vectors-container__item--delete');

    vectorsContainerItems.forEach(item => {
        if (!item.classList.contains('hidden')) {
            renderVectorContainerItems(item, 'remove', 'vectors-container__item-appear');
            renderVectorContainerItems(item, 'add', 'vectors-container__item-disappear');
            setTimeout(() => {
                item.classList.add('hidden');
            }, 300);
        }
    });

    tasksEditButtonItem.forEach(buttonItem => {
        renderVectorContainerItems(buttonItem, 'remove', 'tasks__item--edit-appear');
        renderVectorContainerItems(buttonItem, 'add', 'tasks__item--edit-disappear');
        setTimeout(() => {
            buttonItem.classList.add('hidden');
        }, 300);
    });
};

document.addEventListener('mouseover', renderTasksEditButtonItem);
document.addEventListener('mouseleave', removeTasksEditButtonItem);