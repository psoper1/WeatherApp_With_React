// let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=82d10d8b9124f9ece3e56c62befeda72`;
let zipCode = document.getElementById("inputField");
let btn = document.getElementById("submitZip");
let cityInfo = document.getElementById("city");
let wTemp = document.getElementById("temperature");
let wConditions = document.getElementById("wConditions");
let image = document.getElementById("img");



// let state = [{
//     cityInfo: "",
//     wTemp: "",
//     wConditions: "",
// }]

btn.addEventListener('click', function getAPIdata() {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=82d10d8b9124f9ece3e56c62befeda72`)
        .then(response => {
            cityInfo.innerText = response.data.name;
            wTemp.innerText = Math.round(response.data.main.temp * 9 / 5 - 459.67) + "°F";
            wConditions.innerText = response.data.weather[0].main;
            image.src = ""
            console.log(response.data.name);


        })
        .catch(error => alert("Looks like you picked yourself a bouquet of Oopsie Daisies and didn't enter a valid ZIP Code!", error));

})