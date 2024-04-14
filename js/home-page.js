const theBody = document.querySelector('body');
const theHomePage = document.querySelector('.home-page');
const moveToTheToDoPage = document.querySelector('.home-page__heading-button');

const removeHomePage = () => {
    theHomePage.remove();
}

const renderToDoPage = () => {
     const createElements = (elementType, className) => {
        const element = document.createElement(elementType);
        element.setAttribute('class', className);
        return element;
    }

    const theToDoPage = createElements('section', 'todo-page');
    const toDoHeading = createElements('div', 'todo-page__heading');
    const toDoHeadingArticle = createElements('p', 'todo-page__heading--article');
    const toDoHeadingButton = createElements('div', 'todo-page__heading--button');
    const toDoFieldContainer = createElements('div', 'todo-page__field-container');
    const toDoFieldItem = createElements('textarea', 'field-container__item');
    const toDoFieldEdit = createElements('div', 'field-container__item--edit');
    const toDoFieldChangeFontSize = createElements('div', 'field-container__item--change-text-size');
    const toDoFieldChangeColor = createElements('div', 'field-container__item--change-text-color');
    const toDoFieldSetAsImportant = createElements('div', 'field-container__item--set-important');
    const toDoAddFieldContainer = createElements('div', 'add-field__item--edit');
    const toDoAddField = createElements('div', 'todo-page__add-field');
    const toDoAddFieldArticle = createElements('div', 'todo-page__add-field');
    const toDoAddFieldEdit = createElements('div', 'add-field__item--edit');
    const toDoAddFieldChangeFontSize = createElements('div', 'add-field__item--change-text-size');
    const toDoAddFieldChangeColor = createElements('div', 'add-field__item--change-text-color');
    const toDoAddFieldSetAsImportant = createElements('div', 'add-field__item--set-important');

    toDoHeadingButton.innerHTML = `
      <svg class="todo-page__heading--button" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.02723e-07 17L27 2.27757L27 31.7224L2.02723e-07 17Z" fill="white" />
      </svg>
    `;
    toDoHeadingArticle.innerHTML = `
      To Do
    `;

    toDoFieldEdit.innerHTML = `
      Edit
    ` ;
    toDoFieldChangeFontSize.innerHTML = `
      <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
      </svg>
    `;
    toDoFieldChangeColor.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="white"/>
      </svg>
    `;
    toDoFieldSetAsImportant.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" fill="white"/>
      </svg>
    `;

    toDoAddFieldArticle.innerHTML = `
      Give New Task
    `
    toDoAddFieldEdit.innerHTML = `
      Edit
    ` ;
    toDoAddFieldChangeFontSize.innerHTML = `
      <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 13L-1.14193e-06 25.1244L-8.1987e-08 0.875644L21 13Z" fill="white"/>
      </svg>
    `;
    toDoAddFieldChangeColor.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="white"/>
      </svg>
    `;
    toDoAddFieldSetAsImportant.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" fill="white"/>
      </svg>
    `;

    theToDoPage.appendChild(toDoHeading);
    theToDoPage.appendChild(toDoFieldContainer);
    theToDoPage.appendChild(toDoAddFieldContainer);

    toDoHeading.appendChild(toDoHeadingButton);
    toDoHeading.appendChild(toDoHeadingArticle);

    toDoFieldContainer.appendChild(toDoFieldItem);
    toDoFieldContainer.appendChild(toDoFieldEdit);
    toDoFieldContainer.appendChild(toDoFieldChangeFontSize);
    toDoFieldContainer.appendChild(toDoFieldChangeColor);
    toDoFieldContainer.appendChild(toDoFieldSetAsImportant);

    toDoAddFieldContainer.appendChild(toDoAddField);
    toDoAddFieldContainer.appendChild(toDoAddFieldEdit);
    toDoAddFieldContainer.appendChild(toDoAddFieldArticle);
    toDoAddFieldContainer.appendChild(toDoAddFieldChangeFontSize);
    toDoAddFieldContainer.appendChild(toDoAddFieldChangeColor);
    toDoAddFieldContainer.appendChild(toDoAddFieldSetAsImportant);

    theBody.appendChild(toDoFieldContainer);
}

const launchListeners = () => {
    removeHomePage();
    renderToDoPage()
}

moveToTheToDoPage.addEventListener('click', launchListeners);
