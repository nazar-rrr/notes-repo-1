const theBody = document.querySelector("body");
const theHomePage = document.querySelector(".home-page");
const theButton = document.querySelector(".home-page__button");

const toDoRendering = () => {
    const toDoHeading = document.createElement("div");
    toDoHeading.classList.add("todo-heading");
    toDoHeading.innerHTML = `
        <svg class="todo-page__heading--arrow" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.02723e-07 17L27 2.27757L27 31.7224L2.02723e-07 17Z" fill="white" />
        </svg>
        <p class="todo-page__heading--article">To Do</p>
    `;
    theBody.appendChild(toDoHeading);
}

const toDoItemsRendering = () => {
    const toDoField = document.createElement("div");
    toDoField.classList.add("todo-field");
    toDoField.innerHTML = `
    <div class="todo-field__vector">
        <svg class="todo-field__vector" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0V30M0 15L30 15" stroke="white" stroke-width="3"/>
        </svg>
    </div>
    `;
    theBody.appendChild(toDoField);
}

const removeHomePage = () => {
    theHomePage.remove();
}

const launchListeners = () => {
    toDoRendering();
    for (let i = 0; i < 3; i++) {
        toDoItemsRendering();
    }
    removeHomePage();
}

theButton.addEventListener("click", launchListeners);