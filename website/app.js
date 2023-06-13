/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const units = '&units=metric';
let apiKey = ''

// Create a new date instance dynamically with JS
let d = new Date();
let newHour = d.toLocaleString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Get APIkey
fetch('/key')
.then(res => res.text())
.then(key => {
    apiKey = key
});

// Submit form element
document.getElementById('input-form').addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const city = document.getElementById('cityName').value;
    const feelings = document.getElementById('feelings').value;

    getData(baseUrl, city, apiKey, units)
    .then(function(data) {
        postData('/add', {
            date:newDate,
            city:city,
            icon:data.weather[0].icon,
            temp:data.main.temp,
            description:data.weather[0].description,
            feelings:feelings,
            hour: newHour
        });
        updateUi();
    })
};

// Update UI
const updateUi = async () => {
    const request = await fetch('/all');

    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('city').innerHTML = allData.city;
        document.getElementById('temp').innerHTML = `${allData.temp} °C`;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${allData.icon}@2x.png`;                
        document.getElementById('description').innerHTML = allData.description;
        document.getElementById('content').innerHTML = `<p>${allData.feelings}</p>`;
        document.getElementById('hour').innerHTML = allData.hour;
    } catch(e) {
        console.log(e);
    }
};

// Get weather data from api
const getData = async (baseUrl, city, apiKey, units) => {
        const response = await fetch(baseUrl + city + '&appid=' + apiKey + units);
        try {
            const data = await response.json();
            if (!response.ok) {
                return;
            }
            return data
        } catch(error) {
            console.log(error);
        }
}

// Post weather data from api
const postData = async (url= '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        if (!response.ok) {
            return;
        }
        return newData
    } catch(e) {
        console.log(e);
    }
};