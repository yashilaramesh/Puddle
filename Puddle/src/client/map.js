function initMap(){
  var options = {
    center: {lat: 33.7756, lng:-84.3962},
    zoom: 8
  }
  map = new google.maps.Map(document.getElementById("map"),options)

}
window.onload = initMap;
function fetchJson () {
  return fetch('http://localhost:8081/api/reports')
  .then(response => {
    if (!response.ok) {
      console.error('Network response error');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log('Reports data:', data); // Log the reports data
    return data; // Return the reports data for further use
  })
  .catch(error => {
    console.error('Error fetching reports:');
  });


}
const location = [];

//Fetches reports from backend
//take adrress to a position
fetchJson().then(reports => {
  if (reports) {
      reports.forEach(report => {
          // write what to do for each report
          const address = report.location;
          const apiKey = "AIzaSyClxmOnTy2zT4cbTcQd6B5wczbj-aXZ2O4&";
          const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
          fetch(geocodeUrl)
              .then(response => response.json())
              .then(data => {
              if (data.status === "OK") {
                  location.push(data.results[0].geometry.location);
                  // console.log(location);
              } else {
                  console.error("Geocoding failed: " + data.status);
              }
              })
          .catch(error => console.error("Error:", error));
      })
  }
})

