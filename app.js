var inputText = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#translate-button");
var outputDiv = document.querySelector("#output-div");

buttonTranslate.addEventListener("click", function translate() {

    var text = inputText.value;
    var url = "https://api.funtranslations.com/translate/australian.json?text=" + text;
    console.log(text);
    
    fetch(url)
    .then(function responseHandler(response) { return response.json();})
    .then(function setOutputWithJSON(json) { outputDiv.innerText = json.contents.translated;})
    .catch(function errorLogger(error) {
        console.log(error);
    });

});