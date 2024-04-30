const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const button = event.target;
        const parentTask = button.closest('.tasks__item');
        
        const itemSetImportant = parentTask.querySelector('.vectors-container__item--set-important');
        const itemChangeTextSize = parentTask.querySelector('.vectors-container__item--change-text-size');
        const itemDelete = parentTask.querySelector('.vectors-container__item--delete');

        const toggleVisibility = (element, action, className) => {
            element.classList[action](className);
        };

        const toggleClassList = (element, action, className) => {
            element.classList[action](className);
        };

        if (itemSetImportant.classList.contains('hidden') && itemChangeTextSize.classList.contains('hidden') && itemDelete.classList.contains('hidden')) {
            toggleClassList(itemSetImportant, 'remove', 'item--vectors-container-disappear');
            toggleClassList(itemChangeTextSize, 'remove', 'item--vectors-container-disappear');
            toggleClassList(itemDelete, 'remove', 'item--vectors-container-disappear');

            toggleVisibility(itemSetImportant, 'remove', 'hidden');
            toggleVisibility(itemDelete, 'remove', 'hidden');
            toggleVisibility(itemChangeTextSize, 'remove', 'hidden');

            toggleClassList(itemSetImportant, 'add', 'item--vectors-container-appear');
            toggleClassList(itemChangeTextSize, 'add', 'item--vectors-container-appear');
            toggleClassList(itemDelete, 'add', 'item--vectors-container-appear');
        } else {
            toggleClassList(itemSetImportant, 'add', 'item--vectors-container-disappear');
            toggleClassList(itemChangeTextSize, 'add', 'item--vectors-container-disappear');
            toggleClassList(itemDelete, 'add', 'item--vectors-container-disappear');

            setTimeout(() => {
                toggleVisibility(itemSetImportant, 'add', 'hidden');
                toggleVisibility(itemDelete, 'add', 'hidden');
                toggleVisibility(itemChangeTextSize, 'add', 'hidden');
            }, 300);
        }
    }
};

document.addEventListener('click', manipulateTasksButtonItems);