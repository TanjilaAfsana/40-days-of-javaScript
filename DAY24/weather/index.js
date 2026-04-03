const API_KEY = 'bb50d3fd528b9502336c66451691d301';
//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

document.querySelector('#searchBtn').addEventListener('click', ()=>{
    const city = document.querySelector('#cityInput').value;

    if(city){
        queryWeather(city);
    }

    document.querySelector('#cityInput').value= "";
    
});


const queryWeather = async (city) => {
    try{

        showLoading();

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if(!response.ok) throw new Error(`${city} is not found`);

        const data = await response.json();

        displayWeather(data);
        

    }catch(err){
        showError(err.message);

    }finally{
        hideLoading();
    }
}


function showLoading(){
    const loading = document.querySelector('#loading');
    loading.innerHTML = '⌛ Loading...';

}

function hideLoading(){
    const loading = document.querySelector('#loading');
    loading.innerHTML = '';

}


function displayWeather(data){
    const html = `
    <h1>${data.name}</h1>
    <p>🌡️ Temparature:${data.main.temp} </p>
    <p>Feels Like ${data.main.feels_like}</p>
    <p>Humidity ${data.main.humidity}</p>
    <p>🌥️ Condition: ${data.weather[0].main} </p>
    <p>🌥️ Weather: ${data.weather[0].description}</p>
    <p>🎐Wind Speed: ${data.wind.speed} </p>
    <img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"alt= "Weather icon">
    `

    document.querySelector('#result').innerHTML = html;
}


function showError(msg){
    const result = document.querySelector('#result');
    result.innerHTML = `<p style = 'color: red'>${msg}</p>`
}
































/* const queryWeather = async (city) => {
    try {
        showLoading();
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!res.ok) throw new Error ("City not found");

        const data = await res.json();
        displayWeather(data);
    }catch(err){
        showError(err.message);

    } finally {
        hideLoading();
    }

}

function weatherApp(){
    searchBtn.addEventListener('click', ()=>{
        const city = inputCity.value;

        if (city){
            queryWeather(city);
        }
       
    });
    

}

weatherApp()

function showLoading() {
    document.querySelector('#loading').innerHTML = '⌛ Loading...';
}

function hideLoading(){
    document.querySelector('#loading').innerHTML = '';
}

function displayWeather(data) {
    const html = `

        <h2>${data.name}</h2>
        <p>🌡️ Temp: ${data.main.temp}oC</p>
        <p>🌥️ Condition: ${data.weather[0].description}</p>
        <img >
    
    `;
    document.querySelector('#result').innerHTML = html;
}

function showError(message){
    document.querySelector('#result').innerHTML = `<p style = "color:red;">❎ ${message}</p>`;
} */