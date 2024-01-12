
const inputBox=document.querySelector("#searchValue");
const inputBtn=document.querySelector(".search-icon");

inputBtn.addEventListener("click",()=>{
    getWeather(inputBox.value);
    inputBox.value="";
});
window.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        getWeather(inputBox.value);
        inputBox.value="";
    }
})
async function getWeather(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=302a107bf38ea70569a9e5e52f716f26&units=metric`);
    const data=await response.json();
    
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".speed").innerHTML=data.wind.speed+" km\h";

    if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather img").src="./images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        document.querySelector(".weather img").src="./images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        document.querySelector(".weather img").src="./images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".weather img").src="./images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        document.querySelector(".weather img").src="./images/mist.png";
    }
}

