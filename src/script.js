function showAnswer(response) {
  let generatingIndicator = document.querySelector("p");
  generatingIndicator.classList.add("hidden");

  new Typewriter("#joke-output", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 15,
  });
}

function generateJoke(event) {
  let apiKey = "e49t4e467d35faocb8ec3a1644a604fa";
  let context =
    "You are a standup comedian and you are trying to test your jokes for your upcoming show. Your mission is to generate a simple joke that will make everyone laugh. Make sure to split up each line with a <br/>. Please make sure to NOT REPEAT THE SAME JOKE! Please avoid any jokes abour scarecrows and scientists.";
  let prompt =
    "Generate a different joke that you haven't mentioned in the last responses!";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let generatingIndicator = document.querySelector("p");
  generatingIndicator.innerHTML = "Generating your joke 🙈";

  axios.get(apiUrl).then(showAnswer);
}

let jokeElement = document.querySelector("#joke-button");
jokeElement.addEventListener("click", generateJoke);
