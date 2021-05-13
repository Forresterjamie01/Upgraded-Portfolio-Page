console.log("JS loaded")

$("#Submit-button").on("click", function(event){
   event.preventDefault();
    console.log("On click",  )
    $.ajax({
        url:"https://maps.googleapis.com/maps/api/js?key=AIzaSyChU75kqtn6lGo5K5V78e5A_9OuCIJ8dYI&callback=initMap",
        method: "GET"
    }).then(function(apiresult){
        console.log(apiresult)
    })
    //Get Google API key, Copy sample code and try displaying google maps
})
