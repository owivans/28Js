const URL_API ='https://js-4ecd3-default-rtdb.firebaseio.com/';
const contentList = document.querySelector('#list-person');
const enviar = document.querySelector('#add-person');

const cleanList = () => {
    while(contentList.firstChild) {
        contentList.removeChild(contentList.firstChild)
        //padre.removeChild(child)
    };
};

const deletePersona = async(id) => {
    console.log(id)
    const url = URL_API + id + '.json'
    const deleted = await fetch(url, {
        method: 'DELETE'
    });
    if(deleted.status === 200) {
        getInfo();
    };
};

const createPersona = async(persona) => {
    const url = URL_API + '.json'
    const create = await fetch(url, { 
        method:'POST',
        body: JSON.stringify(persona)
    });
    if(create.status === 200){
        getInfo()
    }
};

enviar.addEventListener('click', () => {
    const inputName = document.querySelector('#name');
    const inputLastName = document.querySelector('#lastName');
    const persona = {
        name: inputName.value,
        lastName: inputLastName.value 
    };
    createPersona(persona);
    
});

const renderPersona = (infoPersona, index) => {
    console.log(infoPersona)
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttonDelete = document.createElement('button');
    const buttonEdit = document.createElement('button');
    const name = infoPersona.name + ' ' + infoPersona.lastName;

    buttonDelete.className = 'btn btn-link';
    buttonEdit.className = 'btn btn-link';
    span.textContent = name;
    buttonDelete.textContent = 'Eliminar';
    buttonEdit.textContent = 'Editar';
    buttonDelete.dataset.persona = infoPersona.id;
    buttonEdit.dataset.persona = infoPersona.id;

    buttonDelete.addEventListener('click',(event) => {
        const elementToRemove = event.target.dataset.persona;
        deletePersona(elementToRemove);
    });

    buttonEdit.addEventListener('click', (event) => {
        console.log(window)
        const elementToEdit = event.target.dataset.persona;

        //window.location.href = 'http://127.0.0.1:5500/17-Crud/update/'
        //window.location.href = 'http://127.0.0.1:5500/17-Crud/update/?id=' + elementToEdit + '&test=hola';
        window.location.href = 'http://127.0.0.1:5500/17-Crud/update/?id=' + elementToEdit;
    });

    li.appendChild(span);
    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit);
    contentList.appendChild(li);
};


const renderList = (listToRender) => {
    listToRender.forEach(( persona, index ) => {
        renderPersona(persona, index);
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

const getInfo = async() => {
    try {
        // codigo que se ejecutara por default
        const url = URL_API + '.json'
        const response = await fetch(url);
        console.log(response)
        if(response.status !== 201){
            const parsed = await response.json();
            const responseParsered = parserResponseFireBase(parsed);
            cleanList()
            renderList(responseParsered);
        }
        
        // throw new Error('este es un eror en el try')
    } catch (error) {
        // codigo a ejecutarse cuando hay un error
        console.error(error, 'xxxx')
    }
};

getInfo()