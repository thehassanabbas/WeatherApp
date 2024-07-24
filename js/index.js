function weatherApp() {
    let checkCityName = document.getElementById("temp1").value;

    axios.get(`https://api.weatherapi.com/v1/current.json?key=c483dffa34e34669a6891716242407&q=${checkCityName}&aqi=yes`)
        .then(function (response) {
            // handle success
            // console.log(response);

            let weather1 = response.data.current.temp_c;
            // console.log(weather1)
            document.getElementById("tempDisplay").innerHTML = (`Today, the weather of ${checkCityName} is ${weather1}`);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}