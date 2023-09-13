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

