'use strict';


class Test {
    constructor() {
        // I fixed the getElements call 
        this.locationName = document.getElementById('weather-location');
        this.conditionResults = document.getElementById('weather-condition');
        this.testResults = document.getElementById('test-results');
        this.tempResults = document.getElementById('weather-temp');
        this.iconResults = document.getElementById("weather-icon");
    }

    async run() {
        // The API key that was supplied (25e989bd41e3e24ce13173d8126e0fd6) has been disabled.
        // I signed up and got a new one.  
        const apiKey = '4a0f5995b38241f19e683718233006'; 
        const city = 'Brentwood, TN';
        // The 'try' was missing so I added it. 
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
            this.setResults(response.data);
          } catch (error) {
            this.setError(error);
          }
    }

    setError(message) {
        // TODO: Format the error
        this.testResults.innerHTML = (message || '').toString();
    }

    setResults(results) {
        // Retrieve the temp_f value from the JSON object
        var condition = results.current.condition.text
        var icon = results.current.condition.icon
        var temp_f = results.current.temp_f;
        var location = results.location.name;

        this.locationName.innerHTML = (location || '').toString();
        this.conditionResults.innerHTML = (condition || '').toString();
        this.tempResults.innerHTML = 'Temp:' + (temp_f || '').toString() + '&deg;F';
        this.iconResults.src = 'https:' + (icon || '').toString();
    }
}