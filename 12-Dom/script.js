const elements = document.getElementsByClassName('test');
console.log(elements[2])

const li = document.getElementsByTagName('div')
console.log(li)

const titulo = document.querySelector('.test');
const tituloAll = document.querySelectorAll('.test');
titulo.className = 'titulo'
console.log(tituloAll)

tituloAll.forEach((node) => {
    console.log(node)
})
