const ul = document.querySelector('ul')
const inputText = document.querySelector('.text')
const inputSubmit = document.querySelector('.submit')


inputSubmit.addEventListener('click', () => {
    if (inputText.value !== '') {
        const li = document.createElement('li')
	    li.innerHTML = `<span class="task-span"><input type="checkbox" class="checkbox">${inputText.value}</span> <button class="edit-button">Editar</button><button class="delete-button">x</button>`

	    li.classList.add('item', 'list')
	    ul.prepend(li)
        inputText.value = ''
    } else;
})

ul.addEventListener('click', event => {
    const clickedElement = event.target
    const parentElement = clickedElement.parentElement
    const firstChildParentElement = parentElement.firstChild
    
    //botão de apagar
    if (clickedElement.className === 'delete-button') {
        parentElement.remove()        
    }

    //botão de editar
    if (clickedElement.className === 'edit-button') {
        let valueToEdit = firstChildParentElement.textContent
        inputText.value = valueToEdit
        parentElement.remove()
    }
})

