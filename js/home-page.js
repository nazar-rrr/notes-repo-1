const theBody = document.body;
const theHomePage = document.querySelector(".home-page");
const theButton = document.querySelector(".home-page__button");

const createToDoPage = () => {
    const newContent = createNewContent('move-to-todo');
    insertElementAtBeginning(newContent, theBody);
    theButton.removeEventListener("click", createToDoPage);
}

const createToDoArrow = () => {
    const newContent = createNewContent('move-to-todo-arrow');
    insertElementAtBeginning(newContent, theBody);
    theButton.removeEventListener("click", createToDoArrow);
}

const createNewContent = (className) => {
    const newContent = document.createElement('div');
    newContent.innerHTML = `
        <h2>New Content</h2>
        <p>This is some new content added dynamically using JavaScript.</p>`;
    newContent.classList.add(className);
    return newContent;
}

const insertElementAtBeginning = (element, parent) => {
    parent.insertBefore(element, parent.firstChild);
}

const removeHomePage = () => {
    theHomePage.remove();
}

theButton.addEventListener("click", createToDoPage);
theButton.addEventListener("click", createToDoArrow);
theButton.addEventListener("click", removeHomePage);