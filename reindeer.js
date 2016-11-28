var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

var pairing = function() {
  var pair = "";
  for(var i = 0; i < colors.length; i++) {
    for(var j = 0; j < reindeer.length; j++) {
      pair += "<li>" + colors[i] + " " + reindeer[j] + " </li>";
    }
  }
  debugger
  return pair;
}
hohohoElement.innerHTML = pairing();
