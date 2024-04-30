const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const tasksItem = event.target.closest('.tasks__item');
        
        const itemSetImportant = tasksItem.querySelector('.vectors-container__item--set-important');
        const itemChangeTextSize = tasksItem.querySelector('.vectors-container__item--change-text-size');
        const itemDelete = tasksItem.querySelector('.vectors-container__item--delete');

         const renderVectorContainerItems = (element, action, className) => {
            element.classList[action](className);
        };

        if (itemSetImportant.classList.contains('hidden') && itemChangeTextSize.classList.contains('hidden') && itemDelete.classList.contains('hidden')) {
            renderVectorContainerItems(itemSetImportant, 'remove', 'item--vectors-container-disappear');
            renderVectorContainerItems(itemChangeTextSize, 'remove', 'item--vectors-container-disappear');
            renderVectorContainerItems(itemDelete, 'remove', 'item--vectors-container-disappear');

            renderVectorContainerItems(itemSetImportant, 'remove', 'hidden');
            renderVectorContainerItems(itemDelete, 'remove', 'hidden');
            renderVectorContainerItems(itemChangeTextSize, 'remove', 'hidden');

            renderVectorContainerItems(itemSetImportant, 'add', 'item--vectors-container-appear');
            renderVectorContainerItems(itemChangeTextSize, 'add', 'item--vectors-container-appear');
            renderVectorContainerItems(itemDelete, 'add', 'item--vectors-container-appear');
        } else {
            renderVectorContainerItems(itemSetImportant, 'add', 'item--vectors-container-disappear');
            renderVectorContainerItems(itemChangeTextSize, 'add', 'item--vectors-container-disappear');
            renderVectorContainerItems(itemDelete, 'add', 'item--vectors-container-disappear');

            setTimeout(() => {
                renderVectorContainerItems(itemSetImportant, 'add', 'hidden');
                renderVectorContainerItems(itemDelete, 'add', 'hidden');
                renderVectorContainerItems(itemChangeTextSize, 'add', 'hidden');
            }, 300);
        }
    }
};

document.addEventListener('click', manipulateTasksButtonItems);