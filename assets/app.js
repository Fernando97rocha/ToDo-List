const ul = document.querySelector('ul')
const inputText = document.querySelector('.text')
const inputSubmit = document.querySelector('.submit')


inputSubmit.addEventListener('click', () => {
    if (inputText.value !== '') {
        const li = document.createElement('li')
	    li.innerHTML = `<input type="checkbox"><span>${inputText.value}</span> <button>x</button>`

	    li.classList.add('item', 'list')
	    ul.append(li)
        inputText.value = ''
    } else;
})

ul.addEventListener('click', event => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'BUTTON') {
        clickedElement.parentElement.remove()        
    }
})
