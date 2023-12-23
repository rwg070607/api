
let city = ''
const limit = 5
let lat = 0
let lon = 0
const API_KEY = 'cecbfdf44e7ce4cac10303f63cf9ad4e'

function city_set() {
    city = document.getElementById('city').value;
}

document.addEventListener('keyup', enter_key)

function enter_key() {
    if (event.keyCode == 13) {
        a();
        document.getElementById('city').value = ''
    }
}

async function a() {
    Response1 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`);
    data = await Response1.json();
    lat = data[0]['lat'];
    lon = data[0]['lon'];
    // console.log(lat);
    // console.log(lon);
    Response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    data = await Response2.json();
    temp = data['main']['temp']-273.15;
    feels_like = data['main']['feels_like']-273.15;
    weather = data['weather'][0]['main'];
    
    // console.log(temp);
    // console.log(weather);
    document.querySelector('.city_name').innerHTML = city;
    document.querySelector('.temp').innerHTML = `현재 기온 : ${temp.toFixed(1)}°C`;
    document.querySelector('.feels_like').innerHTML = `체감 온도 : ${feels_like.toFixed(1)}°C`;
    document.querySelector('.weather').innerHTML = weather;
    
}
