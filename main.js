let url = `https://api.openweathermap.org/data/2.5/weather?zip=40515&appid=82d10d8b9124f9ece3e56c62befeda72`;
let zipCode = document.getElementById("inputField");
let btn = document.getElementById("submitZip");
let cityInfo = document.getElementById("city");
let wTemp = document.getElementById("temperature");
let wConditions = document.getElementById("wConditions");



// let state = [{
//     cityInfo: "",
//     wTemp: "",
//     wConditions: "",
// }]

zipCode.addEventListener('click', function getAPIdata() {

    axios.get(url)
        .then(response => {
            cityInfo = response.data.name;
            console.log(response.data.name);

        })
        .catch(error => alert("Looks like you picked yourself a bouquet of Oopsie Daisies and didn't enter a valid ZIP Code!", error));

})