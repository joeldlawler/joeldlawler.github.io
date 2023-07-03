// I changed this to Weather from Test to make the code more readable and 
// also test is too common which might cause issues elsewhere.  

"use strict";

class Weather {
  constructor() {
    /* 
    *  I changed this.testResults = document.getElementsByClassName('test-results'); 
    *  to this.testResults = document.getElementById('test-results'); because the original code had a missing [0]. 
    *  Additionally, I prefer to call the elements explicitly by ID rather than class to avoid confusion.
    */
    this.locationName = document.getElementById("weather-location");
    this.conditionResults = document.getElementById("weather-condition");
    this.errorMesage = document.getElementById("errorMesage");
    this.tempResults = document.getElementById("weather-temp");
    this.iconResults = document.getElementById("weather-icon");
  }

  // Renamed this from run to getWeather 
  async getWeather(zipCode) {
    /* 
    * The API key that was supplied (25e989bd41e3e24ce13173d8126e0fd6) has been disabled.
    * I signed up and got a new one.
    */
    const apiKey = "4a0f5995b38241f19e683718233006";
    // I moved the url to a variable
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zipCode}`;
    // This can be uncommented and the below active url commented out to simulate an error.
    // const url = `https://https://httpstat.us/500`;

    // The 'try' was missing so I added it.
    try {
      const response = await axios.get(
        url
      );
      this.setResults(response.data);
    } catch (error) {
      this.setError(error);
    }
  }

  // Display error message,
  setError(message) {
    this.errorMesage.textContent = (message || "").toString();
  }

  setResults(results) {
    // Retrieve the values from the JSON object
    let condition = results.current.condition.text;
    let icon = results.current.condition.icon;
    let temp_f = results.current.temp_f;
    let location = results.location.name;

     // Set the values in html elemements
    this.locationName.textContent = location;
    this.conditionResults.textContent = condition;
    this.tempResults.innerHTML = "Temp:" + temp_f + "&deg;F";
    this.iconResults.src = "https:" + icon;
  }
}
