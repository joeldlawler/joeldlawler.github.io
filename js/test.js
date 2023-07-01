'use strict';


class Test {
    constructor() {
        /* 
        I changed this.testResults = document.getElementsByClassName('test-results'); 
        to this.testResults = document.getElementById('test-results'); because the original code had a missing [0]. 
        Additionally, I prefer to call the elements explicitly by ID rather than class to avoid confusion.
        */ 
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

        this.locationName.innerHTML = location;
        this.conditionResults.innerHTML = condition;
        this.tempResults.innerHTML = 'Temp:' + temp_f  + '&deg;F';
        this.iconResults.src = 'https:' + icon;
    }
}