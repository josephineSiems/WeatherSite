window.onload = wetterTime("Hamburg");

function wetterParse(wetterJSON){
    let main = wetterJSON.main;
    let weather = wetterJSON.weather[0];
    console.log(weather);

    showIcon(weather.icon)
    showTemp(main.temp);
    showTempMax(main.temp_max);
    showTempMin(main.temp_min);
    showCity(wetterJSON.name)
    showDesc(weather.description);
    showHumidity(main.humidity);


}


function showIcon(message){
    document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + message + "@2x.png"

}

function showTemp(message){
    document.getElementById('Temp').textContent = message  + "°C" ;
}

function showTempMax(message){
    document.getElementById('TempMax').textContent = "Max: " + message + "°C";
}

function showTempMin(message){
    document.getElementById('TempMin').textContent = "Min: " + message + "°C";
}

function showCity(message){
    document.getElementById('City').textContent = message;
}

function showDesc(message){
    document.getElementById('Desc').textContent = message;
}

function showHumidity(message){
    document.getElementById('Humidity').textContent = "Humidity: " + message + "%";
}


function wetterTime(city){
        console.log("yes");
        let cityInput = city.toLowerCase();
        let from = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=c1e2120945a0c1d7a5ca12a57d5f4179&units=metric";
        let url = new URL(from);

        fetch(url)
        .then(res => res.json())
        .then(out => wetterParse(out))
        .catch(err => { throw err }); 

    }

const butt = document.getElementById('change');
butt.addEventListener('click',function(){
    let cityInput = document.getElementById('cityInput').value;
    console.log(cityInput);
    wetterTime(cityInput);

});

