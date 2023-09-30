const URL_API ='https://rickandmortyapi.com/api/episode';
const contentList = document.querySelector('#content-list');

const renderEpisode = (name) => {
    const li = document.createElement('li');
    li.textContent = name;
    contentList.appendChild(li);
};

const renderList = (list) => {
    list.forEach((episode) => {
        renderEpisode(episode.name)
    });
};

const getInfoApi = async(url) => {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        const parsed = await response.json()
        renderList(parsed.results);
    } catch (error) {
        console.error(error)
    }
    
};
getInfoApi(URL_API);

const URL_FIREBASE = 'https://js-4ecd3-default-rtdb.firebaseio.com/.json';

const getPersonasById = async(id, action) => {
    try {
        const URL_FIREBASE_PERSONA = 'https://js-4ecd3-default-rtdb.firebaseio.com/-NeLqB-P5BANlJFh5mkj.json';

        const response = await fetch(URL_FIREBASE_PERSONA,  {
            method: 'GET'
        });
        const parsed = await response.json();
        console.log(parsed)

    } catch (error) {
        console.error(error)
    }
};
getPersonasById()

const persona = {
    name:'Freddy',
    lastName: 'Krueger'
};
console.log(persona)
console.log(JSON.stringify(persona))

const postPersonas = async() => {
    const response = await fetch(URL_FIREBASE, {
        method: 'POST',
        headers: { 'Content-type': 'application/json;charset=UTF-8',},
        body: JSON.stringify(persona),
    });
};


const parserResponseFireBase = (response) => {
    const parsedResponse = []
        for(const key in response ){
            const element = {
                id: key,
                lastName: response[key].lastName,
                name: response[key].name
            };
            parsedResponse.push(element)
        };
    return parsedResponse;
};


const getPersonasApi = async() => {
    try {
        const response = await fetch(URL_FIREBASE, {
            method: 'GET'
        });
        const parsed = await response.json();
        const result = parserResponseFireBase(parsed);
        console.log(result)

    } catch (error) {
        console.error(error)
    }
};
getPersonasApi()


// {
//     "-NeLqB-P5BANlJFh5mkj": {
//         "lastName": "Krueger",
//         "name": "Freddy"
//     },
//     "-NeLsTnvI648S4C0PAk8": {
//         "lastName": "Krueger",
//         "name": "Freddy"
//     },
//     "-NeLtAF3fUGBbp6y8vIH": {
//         "lastName": "Kruguer",
//         "name": "Freddy"
//     }
// }


[
    {
        id: "-NeLqB-P5BANlJFh5mkj",
        name: 'as',
        lastName: ''
    }
]