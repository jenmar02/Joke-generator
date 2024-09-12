function showAnswer(response) {
  alert(response.data.answer);
}
let apiKey = "e49t4e467d35faocb8ec3a1644a604fa";

let context = "Be polite and provide a very short answer/";
let prompt = "When was AI first created?";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("processing");
axios.get(apiUrl).then(showAnswer);
