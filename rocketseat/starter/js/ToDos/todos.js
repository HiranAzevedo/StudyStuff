var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector("#app button");
console.log(inputElement);

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDo() {
    listElement.innerHTML = '';
    var count = 0;

    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        linkElement.href = "#"
        linkElement.id = count;
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        count++;
    }
}

function addTodo() {

    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';

    renderToDo();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderToDo();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function load

buttonElement.onclick = addTodo;

renderToDo();