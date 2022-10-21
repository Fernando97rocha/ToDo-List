const ul = document.querySelector('ul')
const inputText = document.querySelector('.text')
const inputSubmit = document.querySelector('.submit')


inputSubmit.addEventListener('click', () => {
    if (inputText.value !== '') {
        const li = document.createElement('li')
        li.textContent = `${inputText.value}`
        li.classList.add('item')
        ul.append(li)
    } else;
    inputText.value = ''
})

const lis = ul.children



