function addToDo() {
    const inputValue = document.getElementById('todoInput').value
    if (inputValue.trim() !== '') {
        const ul = document.getElementById('todoList')
        const li = document.createElement('li')

        li.innerHTML = `${inputValue} <button onclick="deleteTodo(this)">წაშლა</button>`

        const newBtn = li.querySelector('button');
        newBtn.classList.add('delete')

        ul.appendChild(li)
    }

    document.getElementById('todoInput').value = ''

}


function deleteTodo(icon) {
    const li = icon.parentNode
    li.parentNode.removeChild(li)
}