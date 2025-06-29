 async function getWeather() {
      const apiKey = "WeatherRepoert";
      const city = document.getElementById("cityIn").value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20499cac3b2affa2a903af4884204de0`;


      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        console.log(data);

        document.querySelector(".td").innerHTML = `
          <p class="inline-block text-[1rem]">City: ${data.name}</p>
          <p class="inline-block text-[1rem]">/Temperature: ${Math.round(data.main.temp/10)} °C</p>
          <p class="text-[.9rem]">Weather: ${data.weather[0].description}</p>
        `;
        if(data.weather[0].description=='clear sky'){
          gsap.to("#icon",{
            attr:{
              class:"ri-sun-fill text-[8vh]"
            },
            ease:Power3
          })
        }
         if(data.weather[0].description=='overcast clouds'){
          gsap.to("#icon",{
            attr:{
              class:"ri-sun-cloudy-fill text-[8vh]"
            },
            ease:Power3
          })
          
          
        }
         if(data.weather[0].description=='light rain'||data.weather[0].description=='rain'||data.weather[0].description=='heavy rain'){
          gsap.to("#icon",{
            attr:{
              class:"ri-rainy-fill text-[8vh]"
            },
            ease:Power3
          })
        }

        document.querySelector(".hm").innerHTML=`Humidity </br>level:${data.main.humidity}</br></br>pressure:${data.main.pressure}`;
        document.querySelector(".wi").innerHTML=`Wind </br>speed:${data.wind.speed}</br></br>${data.wind.deg}`
      } catch (error) {
        document.querySelector(".td").innerHTML =` <p>Error: ${error.message}</p>`;
      }
    }

    document.querySelector("#click").addEventListener("click",()=>{
           getWeather();
    })
