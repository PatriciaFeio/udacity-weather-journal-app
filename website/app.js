/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'f78e3b9790ac303b3d99af99a6e85df9&units=imperial'

// Create a new date instance dynamically with JS
let d = new Date();
let newHour = d.toLocaleString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Submit form element
document.getElementById('generate').addEventListener('click', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getData(baseUrl, zip, apiKey)
    .then(function(data) {
        postData('/add', {
            date:newDate,
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
        document.getElementById('temp').innerHTML = `${allData.temp} °F`;
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${allData.icon}@2x.png`;                
        document.getElementById('description').innerHTML = allData.description;
        document.getElementById('content').innerHTML = `<p>${allData.feelings}</p>`;
        document.getElementById('hour').innerHTML = allData.hour;
    } catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

// Get weather data from api
const getData = async (baseUrl, zip, apiKey) => {
        const response = await fetch(baseUrl + zip + '&appid=' + apiKey);
        try {
            const data = await response.json();
            if (!response.ok) {
                return;
            }
            return data
        } catch(error) {
            console.log("error",error)
            throw error;
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
    } catch(error) {
        console.log("error",error)
    }
};