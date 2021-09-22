//console.log("hi Shariq");

// //input
// var promptInput = prompt("what is your name");
// //processing
// var welcomeMsg= "Thank you for visiting " + promptInput;
// //output
// alert(welcomeMsg);

var btnTranslate= document.querySelector("#btn-translate");
var textAreaInput= document.querySelector("#textArea");
var divOutput= document.querySelector("#outputDiv");
var serverUrl="https://api.funtranslations.com/translate/minion.json";
//console.log(textAreaInput);
// console.log(textAreaInput.value);

// divOutput.innerText="Hello";

//divOutput.innerText= textAreaInput.value;

function getServerUrl(text){
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured!!" +error);
    alert("Something went wrong. Please try again after some time.")
}

btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler(){
    //divOutput.innerText="Hello " + textAreaInput.value;
    //divOutput.innerText= textAreaInput.value;
    var inputText= textAreaInput.value;
    fetch(getServerUrl(inputText))  
    .then(response=>response.json())
    //.then(json=>console.log(json)) displaying json response
    .then(json => {
        var translatedText= json.contents.translated;
        divOutput.innerText= translatedText;
    })
    .catch(errorHandler)
}
