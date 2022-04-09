console.log('client side js rendering')
// fetch('http://puzzle.mead.io/puzzle').then(response => {
//     response.json().then(data => {
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageone = document.querySelector('#message-1');
const messagetwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    fetch('/weather?address='+location).then(response => {
    response.json().then(data => {
        if(data.error) {
            messageone.textContent = data.error;
            messagetwo.textContent = '';
        } else {
            messageone.textContent = '';
            messagetwo.textContent = data.location + data.forcastData.weather_descriptions +  data.forcastData.tempurature_out+data.forcastData.feelslike;
        }
     
    })
})
})