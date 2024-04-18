const theButton = document.querySelector('.field-container__item--edit');
const fieldContainerItems = document.querySelector('.field-container__items');

const manipulateFieldContainerItems = () => {
    if (fieldContainerItems.classList.contains('hidden')) {
        if (fieldContainerItems.classList.contains('field-container__items-disappear')) {
            fieldContainerItems.classList.remove('field-container__items-disappear');
        }
        fieldContainerItems.classList.remove('hidden');
        fieldContainerItems.classList.add('field-container__items-appear');
    }

    else {
        if (fieldContainerItems.classList.contains('field-container__items-appear')) {
            fieldContainerItems.classList.remove('field-container__items-appear');
        }
        fieldContainerItems.classList.add('field-container__items-disappear');
        setTimeout(() => {
            fieldContainerItems.classList.add('hidden');
        }, 300)
    }
}

theButton.addEventListener('click', manipulateFieldContainerItems)