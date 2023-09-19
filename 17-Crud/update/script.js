const URL_API ='https://js-4ecd3-default-rtdb.firebaseio.com/';
const search = window.location.search;
const url = new URLSearchParams(search);
const ID_PERSONA = url.get('id');

const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastName');
const buttonSave = document.querySelector('#add-person');


const updatePersona = async() => {
    const persona = {
        name: 'Editado',
        lastName: 'Elemento'
    };

    const url = URL_API + ID_PERSONA + '.json';
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(persona)
    });
    if(response.status === 200){
        window.location.href = 'http://127.0.0.1:5500/17-Crud/create/'
    }
};

buttonSave.addEventListener('click', () => {
    updatePersona()
});


const getInfoById = async() => {
    const url = URL_API + ID_PERSONA + '.json';
    const info = await fetch(url);
    const parsed = await info.json();
    console.log(parsed)
    inputName.value = parsed.name;
    inputLastName.value = parsed.lastName;
};

getInfoById()