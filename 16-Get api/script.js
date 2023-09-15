const URL_API ='https://rickandmortyapi.com/api/episode';
const contentList = document.querySelector('#content-list');

const renderEpisode = (name) => {
    const li = document.createElement('li');
    li.textContent = name;
    contentList.appendChild(li);
};

const renderList = (list) => {
    list.forEach((episode) => {
        console.log(episode.name)
        renderEpisode(episode.name)
    });
};

const getInfoApi = async(url) => {
    const response = await fetch(url, {
        method: 'GET'
    });
    const parsed = await response.json()
    renderList(parsed.results);
    console.log(parsed)
};
getInfoApi(URL_API)
