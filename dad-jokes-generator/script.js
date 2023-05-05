const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apiKey = "+dGM0wRn23dMrBkrhyDuKQ==MhqLnIhoGmdEW4lI";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit= 1"
async function getJoke() {


    try {
        jokeEl.innerText = "Updating...."
        btnEl.disable = true;
        btnEl.innerText = "Loading....";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        btnEl.innerText = "Error Occured, try again later!";
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";
        console.log(Error);
    }


}

btnEl.addEventListener("click", getJoke)