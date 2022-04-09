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
const wetherInfo = document.querySelector('#wether-info');
const weatherTitle = document.querySelector('#weather-title');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    fetch('/weather?address='+location).then(response => {
    response.json().then(data => {
        console.log(data)
        if(data.error) {
            messageone.textContent = data.error;
            messagetwo.textContent = '';
            wetherInfo.style.display = "none";
        } else {
            wetherInfo.style.display = "block";
            messageone.textContent = '';
            weatherTitle.textContent = 'Weather forecast for: '+data.location;
            messagetwo.textContent = 'weather desc: '+data.forcastData.weather_descriptions +' | temperature outside: '+  data.forcastData.tempurature_out+' | feelslike: '+data.forcastData.feelslike;
        }
     
    })
})
})