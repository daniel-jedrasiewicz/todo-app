let todoInput 
let errorInfo
let addBtn
let ulList

const main = () => {
    prepareDOMEelements()
    prepareDOMEvents()
}

const prepareDOMEelements = () => {
todoInput = document.querySelector('.todo-input')
errorInfo = document.querySelector('.error-info')
addBtn = document.querySelector('.btn-add')
ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)

}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        const newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)

        createToolsArea(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = (newTodo) => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn,editBtn,deleteBtn)
}


document.addEventListener('DOMContentLoaded', main)