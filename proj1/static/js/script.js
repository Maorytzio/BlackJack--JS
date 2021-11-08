//Age In Days:
function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var days = (2021 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode("You are: " + days + " days old");
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}


function reset() {
    document.getElementById('ageInDays').remove();

}


//Cat Generator:
function generateCat() {
    var image = document.createElement('img');
    image.classList.add('magic-cat');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp";
    div.appendChild(image);
}