const ul = document.querySelector('ul')
const inputText = document.querySelector('.text')
const inputSubmit = document.querySelector('.submit')


inputSubmit.addEventListener('click', () => {
    if (inputText.value !== '') {
        const li = document.createElement('li')
	    li.innerHTML = `<span class="task-span"><input type="checkbox" class="checkbox">${inputText.value}</span> 
            <i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i>`

	    li.classList.add('item', 'list')
	    ul.prepend(li)
        inputText.value = ''
        inputText.focus()
    } else;
})

ul.addEventListener('click', event => {
    const clickedElement = event.target
    const parentElement = clickedElement.parentElement
    const firstChildParentElement = parentElement.firstChild
    
    //botão de apagar
    if (clickedElement.className === 'fa-solid fa-trash') {
        parentElement.remove()        
    }

    //botão de editar
    if (clickedElement.className === 'fa-solid fa-pen-to-square') {
        let valueToEdit = firstChildParentElement.textContent
        inputText.value = valueToEdit
        parentElement.remove()
        inputText.focus()
    }
})

