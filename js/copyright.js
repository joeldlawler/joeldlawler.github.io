"use strict";

class getYear {
  // Get the HTML span in the footer.
  constructor() {
    this.copyrightYear = document.getElementById("copyright-year");
    this.errorMesage = document.getElementById("errorMesage");
    this.doesNotExist = document.getElementById("doesNotExist");
  }
  // Get the current year from date.
  setYear() {
    try {
      const year = new Date().getFullYear();
      this.copyrightYear.textContent = year;
      // Uncomment the below to see error message. 
      // this.doesNotExist.textContent = "This is not the div you're looking for.."
    } catch (error) {
      this.setError(error);
    }
  }
  // Display error message,
  setError(message) {
    this.errorMesage.innerHTML = (message || "").toString();
  }
}
// Add year to copyright in the footer.
document.addEventListener("DOMContentLoaded", () => {
  const year = new getYear();
  year.setYear();
});
