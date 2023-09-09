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


  const test = {
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Deluxe)",
    duration: "3:53",
    album_cover: "https://i.scdn.co/image/ab67616d0000b273a0aea3805ed6a87aa394c796"
  };

  const container = document.querySelector('#container');
  container.dataset.example = 'jaja'

  const renderSong = (songInfo) => {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = songInfo.title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = songInfo.album;

    const btn = document.createElement('a');
    btn.className = 'btn btn-primary';
    btn.textContent = songInfo.duration;

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = songInfo.album_cover;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
    card.dataset.example = 'jaja'

    const col = document.createElement('div');
    col.className = 'col';

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(btn)

    card.appendChild(img)
    card.appendChild(cardBody)

    col.appendChild(card)

    container.appendChild(col)
    
  };

    const renderList = (list) => {

      list.songs.forEach(( song ) => {
        renderSong(song);
      });

    };

  //renderList(playlist)
  const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', (event) => {
  console.log(event)
});

document.addEventListener('scroll', (event) => {
  console.log(event)
})

const input = document.querySelector('#inputEmail')
console.log(input)

input.addEventListener('keyup', (event) => {
  console.log(event.target.value)
});
