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

//-Mostrar en el dom una lista de canciones con toda la info disponible

const playlist = {
    name: "Mis Canciones Favoritas",
    description: "Una selección de mis canciones favoritas de diferentes géneros",
    songs: [
      {
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Deluxe)",
        duration: "3:53",
        album_cover: "https://i.scdn.co/image/ab67616d0000b273a0aea3805ed6a87aa394c796"
      },
      {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
        duration: "5:54",
        album_cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Bohemian_Rhapsody_music_video_still.png/220px-Bohemian_Rhapsody_music_video_still.png"
      },
      {
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:20",
        album_cover: "https://www.plymouthsouth.com/wp-content/uploads/2020/04/After-Hours-pic-900x900.jpg"
      },
      {
        title: "Don't Start Now",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        duration: "3:03",
        album_cover: "https://ss365.liverpool.com.mx/xl/1095757037.jpg"
      }
    ]
  };