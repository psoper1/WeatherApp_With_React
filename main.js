let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=82d10d8b9124f9ece3e56c62befeda72`;
let zipCode = "inputField";
let btn = "submitZip";
let cityInfo = document.getElementById("city");
let wTemp = document.getElementById("temperature");
let wConditions = document.getElementById("wConditions");

let state = [{
    cityInfo: "",
    wTemp: "",
    wConditions: "",
}]

