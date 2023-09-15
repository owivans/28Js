const enviar = document.querySelector('#add-person');
const container = document.querySelector('#list-person');
const listPerson = [];

const renderPersona = (infoPersona, index) => {
    console.log(infoPersona)
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const name = infoPersona.name + ' ' + infoPersona.lastName;

    button.className = 'btn btn-link';
    span.textContent = name;
    button.textContent = 'Eliminar';
    button.dataset.persona = index;

    button.addEventListener('click',(event) => {
        const elementToRemove = event.target.dataset.persona;
        listPerson.splice(Number(elementToRemove), 1);
        cleanList();
        renderList(listPerson);
    });

    li.appendChild(span);
    li.appendChild(button);
    container.appendChild(li);
};


const renderList = (listToRender) => {
    console.log(listToRender)
    listToRender.forEach(( persona, index ) => {
        renderPersona(persona, index);
    });
};

const cleanList = () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
        //padre.removeChild(child)
    };
};



enviar.addEventListener('click', () => {
    const inputName = document.querySelector('#name');
    const inputLastName = document.querySelector('#lastName');
    const persona = {
        name: inputName.value,
        lastName: inputLastName.value 
    };
    listPerson.push(persona);
    cleanList();
    renderList(listPerson);
});


const URL_API ='https://rickandmortyapi.com/api/episode';
// then / catch
// const response = fetch('https://rickandmortyapi.com/api/episode',{
//     method: 'GET'
// }).then((response) => response.json())
// .then((json) => console.log(json))
// .catch((error) => {
//     console.log(error)
// });


// Async / await
// try / catch

const getInfo = async() => {
    try {
        // codigo que se ejecutara por default
        const response = await fetch(URL_API);
        console.log(response)
        if(response.status !== 201){
            const parsed = await response.json();
            console.log(parsed)
        }
        
        // throw new Error('este es un eror en el try')
    } catch (error) {
        // codigo a ejecutarse cuando hay un error
        console.error(error, 'xxxx')
    }
};

getInfo()
