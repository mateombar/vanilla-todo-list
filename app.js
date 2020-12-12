// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
    // Prevent form from submiting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // Append child
    todoDiv.appendChild(newTodo)
    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    // CLEAR TODOINPUT VALUE
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

    // DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        // GET THE PARENT ELEMENT
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        // WAIT and only run when above animation completes
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }

    // CHECK MARK 
    if (item.classList[0] === 'complete-btn') {
        // GET THE PARENT ELEMENT
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}