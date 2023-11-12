const buttonElement = document.getElementById("btn")
const jokeElement = document.getElementById("joke")

const apiKey = "w7vX1hlXcBh17R4WDLar1Q==SpBxamj8n1qDKD9E";

const option = {
    method : "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

    try {
        
    

    jokeElement.innerText = "Upadating.....";
    buttonElement.disable = true;
    buttonElement.innerText = "Loading";

    const response = await fetch(apiUrl , option)
    const data = await response.json();

    buttonElement.disable = false;
    buttonElement.innerText = "Tell Me a Joke";

    jokeElement.innerText = data[0].joke;
    } catch (error) {
        jokeElement.innerText = "An error happened , try again later";
        console.log(error);
        buttonElement.disable = false;
        buttonElement.innerText = "Tell Me a Joke";
    }
}


buttonElement.addEventListener( "click" , getJoke )