$(document).ready(function () {
     $('#add-button').click(function (event){
       $("#weatherInfoDiv").show();
       var zipCode = getZipCode();
       var pictureCounter = 0;
       var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
       $.ajax({
           type:'GET',
           url:'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + "&APPID=69241a59898e1f53f27afabafa51c0e8&units=imperial",
           success:function(forcast){
               $.each(forcast.list, function(index, weather){
                  
                   var cityName = forcast.city.name;
                   var currentIcon = weather.weather["0"].icon;
                   var currentDesc = weather.weather["0"].description;
                   var currentMain = weather.weather["0"].main;
                   var currentTemp = forcast.list["0"].main.temp;
                   var currentHumidity = forcast.list["0"].main.humidity;
                   var currentWindSpeed = forcast.list["0"].wind.speed;
                   $("#temperature").text("Temperature: " + currentTemp);
                   $("#humidity").text("Humidity: " + currentHumidity + "%");
                   $("#wind").text("Wind: " + currentWindSpeed + " mph");
                   $("#cityName").text(" " + cityName);
                   $("#currentPhoto").attr("src","http://openweathermap.org/img/w/" + currentIcon + ".png");
                   $("#currentPhoto").attr('height','115');
                   $("#currentPhoto").attr('width','115');
                   $("#currentText").text(currentMain + ": " +  currentDesc);
                   var currentDate = new Date(forcast.list[1].dt_txt);
                   var currentDate2 = new Date(forcast.list[9].dt_txt);
                   var currentDate3 = new Date(forcast.list[17].dt_txt);
                   var currentDate4 = new Date(forcast.list[25].dt_txt);
                   var currentDate5 = new Date(forcast.list[33].dt_txt);
                   
                   $("#dayOne").text(month[(currentDate.getUTCMonth())] + " " + currentDate.getUTCDate() +"th" );
                   $("#dayTwo").text(month[(currentDate2.getUTCMonth())] + " " + currentDate2.getUTCDate() +"th" );
                   $("#dayThree").text(month[(currentDate3.getUTCMonth())] + " " + currentDate3.getUTCDate() +"th" );
                   $("#dayFour").text(month[(currentDate4.getUTCMonth())] + " " + currentDate4.getUTCDate() +"th" );
                   $("#dayFive").text(month[(currentDate5.getUTCMonth())] + " " + currentDate5.getUTCDate() +"th" );
                   $("#imageOne").attr("src","http://openweathermap.org/img/w/" + forcast.list[1].weather[0].icon + ".png");
                   $("#imageOne").attr('height','115');
                   $("#imageOne").attr('width','115');
                   $("#imageTwo").attr("src","http://openweathermap.org/img/w/" + forcast.list[9].weather[0].icon + ".png");
                   $("#imageTwo").attr('height','115');
                   $("#imageTwo").attr('width','115');
                   $("#imageThree").attr("src","http://openweathermap.org/img/w/" + forcast.list[17].weather[0].icon + ".png");
                   $("#imageThree").attr('height','115');
                   $("#imageThree").attr('width','115');
                   $("#imageFour").attr("src","http://openweathermap.org/img/w/" + forcast.list[25].weather[0].icon + ".png");
                   $("#imageFour").attr('height','115');
                   $("#imageFour").attr('width','115');
                   $("#imageFive").attr("src","http://openweathermap.org/img/w/" + forcast.list[33].weather[0].icon + ".png");
                   $("#imageFive").attr('height','115');
                   $("#imageFive").attr('width','115');
                   $("#textOne").text(forcast.list[1].weather[0].main);
                   $("#textTwo").text(forcast.list[9].weather[0].main);
                   $("#textThree").text(forcast.list[17].weather[0].main);
                   $("#textFour").text(forcast.list[25].weather[0].main);
                   $("#textFive").text(forcast.list[33].weather[0].main);
                   $("#tempOne").text("H " + forcast.list["1"].main.temp_max + " L " + forcast.list[1].main.temp_min);
                   $("#tempTwo").text("H " + forcast.list["9"].main.temp_max + " L " + forcast.list[9].main.temp_min);
                   $("#tempThree").text("H " + forcast.list["17"].main.temp_max + " L " + forcast.list[17].main.temp_min);
                   $("#tempFour").text("H " + forcast.list["25"].main.temp_max + " L " + forcast.list[25].main.temp_min);
                   $("#tempFive").text("H " + forcast.list["33"].main.temp_max + " L " + forcast.list[33].main.temp_min);
                   
               });
           },
            error: function(){
            $('#errorMessages')
                .append($('<li>')
                .attr({class:'list-group-item list-group-item-danger'})
                .text('Error calling web service. Please try again later.'));
        }
           
       })
          
          
    });
});
function getZipCode(){
    var zipCode = $('#enter-zipcode').val();
    var validEntry = $.isNumeric("#enter-zipcode").valueOf;
    if(validEntry == false){
        $('#errorMessages')
                .append($('<li>')
                .attr({class:'list-group-item list-group-item-danger'})
                .text('Please enter a valid zip code'));
       }
    return zipCode;
}
function setShit(){
    
}