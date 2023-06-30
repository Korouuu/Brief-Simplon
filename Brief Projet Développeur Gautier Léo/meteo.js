fetch("./conf.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const ville = data.city;
        var apiKey = '4a244243530bcdec8100418403d763ed';
        let apiCall = "https://api.openweathermap.org/data/2.5/weather?q="
                + ville 
                +",fr&units=metric&lang=fr&appid="
                + apiKey;
        let meteo = {
                fetchMeteo: function () {
                        fetch(apiCall)
                            .then(response => response.json())
                            .then(data => {
                                const nomVille = document.getElementById('name');
                                const temperature = document.getElementById('main.temp');
                                const tempsActuelDescription = document.getElementById('weather.description');
                                const humidite = document.getElementById('main.humidity');
                                nomVille.textContent = data.name;
                                temperature.textContent = data.main.temp + '°C';
                                tempsActuelDescription.textContent = data.weather[0].description;
                                humidite.textContent = "L'humidité est de " + data.main.humidity + '%';
                            })
                            .catch(error => {
                                console.log('Impossible de répondre à votre demande.', error);
                            });
                    }
                };
                
                meteo.fetchMeteo();
            });

            
            
            
            