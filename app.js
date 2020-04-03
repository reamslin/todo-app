let dataModel = {};

function addNewTodo(e) {
    e.preventDefault();
    if (newItemElement.value !== "") {
        const newItem = document.createElement('li');
        newItem.innerHTML = newItemElement.value;
        todoListElement.appendChild(newItem);
        dataModel[newItemElement.value] = false;
        localStorage.setItem("TODO_LIST", JSON.stringify(dataModel));
        newItemElement.value = '';
    }
}

function clickItem(e) {
    e.target.classList.toggle("complete");
    dataModel[e.target.innerText] = !(dataModel[e.target.innerText]);
    localStorage.setItem("TODO_LIST", JSON.stringify(dataModel));
}

function clearTodoList() {
    todoListElement.remove();
    dataModel = {};
    localStorage.clear();
    newTodoList = document.createElement('ul');
    document.body.appendChild(newTodoList);
    todoListElement = newTodoList;
    todoListElement.addEventListener("click", clickItem);
}

const newItemElement = document.querySelector("#new");
const submitElement = document.querySelector("#submit");
let todoListElement= document.querySelector("ul");
const clearElement = document.querySelector('#clear');
clearElement.addEventListener("click", clearTodoList);
submitElement.addEventListener("click", addNewTodo);
todoListElement.addEventListener("click", clickItem);

const preLoad = localStorage.getItem("TODO_LIST");
if (preLoad) {
    dataModel = JSON.parse(preLoad);
    for (item in dataModel) {
        const newItem = document.createElement('li');
        newItem.innerHTML = item;
        if (dataModel[item]) {
            newItem.classList.add('complete');
        }
        todoListElement.appendChild(newItem);
    }

}
