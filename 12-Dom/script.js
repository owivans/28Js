// const elements = document.getElementsByClassName('test');
// console.log(elements[2])

// const li = document.getElementsByTagName('div')
// console.log(li)

// const titulo = document.querySelector('test');
// const tituloAll = document.querySelectorAll('.test');
// titulo.className = 'titulo'
// console.log(tituloAll)

// tituloAll.forEach((node) => {
//     console.log(node)
// })

const subtitulo = document.querySelector('#subtitulo');
console.log(subtitulo)

const h2 = document.createElement('h2');
h2.textContent = 'Hola';
console.log(h2)


subtitulo.appendChild(h2)
//subtitulo.insertBefore(h2)
//nododestino.appendChild(nodoAintroducir)
const containerList = document.querySelector('#container-list');

const showElement = (persona) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.className = 'list-item';
    span.className = 'text-item';
    span.textContent = persona;
    li.appendChild(span);

    containerList.appendChild(li);
};
// showElement('Ivan')
// showElement('Yovani')
// showElement('Luis')

const listNames = ['Freddy', 'Penny', 'Gerald', 'Gelga', 'Arnold'];

listNames.forEach((item) => {
    showElement(item)
});

// NO USAR innerHTML!!!!!!!!!!
//document.body.innerHTML = '<div><span>hola</span><h1>asdasd</h1></div>'

-Mostrar en el dom una lista de canciones con toda la info disponible

let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      },
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      },
    },
    {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      },
    },
    {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      },
    },
    {
      name: "Daze",
      band: "Poets_of_the_Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      },
    },
    {
      name: "The Sweet Scape",
      band: "Poets_of_the_Fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      },
    },
  ];