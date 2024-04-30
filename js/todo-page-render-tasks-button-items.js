const manipulateTasksButtonItems = (event) => {
    if (event.target.matches('.tasks__item--edit')) {
        const itemSetImportant = document.querySelector('.vectors-container__item--set-important');
        const itemChangeTextSize = document.querySelector('.vectors-container__item--change-text-size');
        const itemDelete = document.querySelector('.vectors-container__item--delete');

        if (itemSetImportant.classList.contains('hidden') && itemChangeTextSize.classList.contains('hidden') && itemDelete.classList.contains('hidden')) {
            if (itemSetImportant.classList.contains('item--vectors-container-disappear') && itemChangeTextSize.classList.contains('item--vectors-container-disappear') && itemDelete.classList.contains('item--vectors-container-disappear')) {
                itemSetImportant.classList.remove('item--vectors-container-disappear');
                itemChangeTextSize.classList.remove('item--vectors-container-disappear');
                itemDelete.classList.remove('item--vectors-container-disappear');
            }

            itemSetImportant.classList.remove('hidden');
            itemDelete.classList.remove('hidden');
            itemChangeTextSize.classList.remove('hidden');

            itemSetImportant.classList.add('item--vectors-container-appear');
            itemChangeTextSize.classList.add('item--vectors-container-appear');
            itemDelete.classList.add('item--vectors-container-appear');
        } else {
            if (itemSetImportant.classList.contains('item--vectors-container-appear') && itemChangeTextSize.classList.contains('item--vectors-container-appear') && itemDelete.classList.contains('item--vectors-container-appear')) {
                itemSetImportant.classList.remove('item--vectors-container-appear');
                itemChangeTextSize.classList.remove('item--vectors-container-appear');
                itemDelete.classList.remove('item--vectors-container-appear');
            }

            itemSetImportant.classList.add('item--vectors-container-disappear');
            itemChangeTextSize.classList.add('item--vectors-container-disappear');
            itemDelete.classList.add('item--vectors-container-disappear');

            setTimeout(() => {
                itemSetImportant.classList.add('hidden');
                itemDelete.classList.add('hidden');
                itemChangeTextSize.classList.add('hidden');
            }, 300);
        }
    }
};

document.addEventListener('click', manipulateTasksButtonItems);