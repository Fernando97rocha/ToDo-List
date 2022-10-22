const ul = document.querySelector('ul')
const inputText = document.querySelector('.text')
const inputSubmit = document.querySelector('.submit')


inputSubmit.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = `${inputText.value}`
    li.classList.add('item')
    ul.append(li)
    
    inputText.value = ''
})

ul.addEventListener('click', event => {
    const clickedElement = event.target

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})