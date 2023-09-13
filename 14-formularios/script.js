// const checkbox = document.querySelector('#checkbox');
// const genderList = document.querySelectorAll('input[name="gender"]')
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const checkbox = document.querySelector('#checkbox');
    const genderList = document.querySelector('input[name="gender"]:checked')
    const select = document.querySelector('#select');

    console.log(genderList.value)
    console.log(select.value)
    console.log(checkbox.checked)

    const result = {
        genderList: genderList.value,
        select: select.value,
        checkbox: checkbox.checked,
    }
    console.log(result)
    genderList.value = 'other'
});

// checkbox.addEventListener('click', (event) => {
//     console.log(event)
// });
// console.log(genderList)
// genderList.forEach((input)=> {
//     input.addEventListener('change', (event) =>{
//         console.log(event.target.value)
//     });
// });


// gender.addEventListener('change', (event) => {
//     console.log(gender.value)
// });

