var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
var namesByLastLetter = {};
  for (var i = 0; i < names.length; i++) {
    var lastLetter = names[i].charAt(names[i].length - 1).toLowerCase();
    if (!namesByLastLetter[lastLetter]) {
      namesByLastLetter[lastLetter] = [];
    }
    namesByLastLetter[lastLetter].push(names[i]);
  }

  console.log("Селекціонування імен за останньою літерою:");
  for (var letter in namesByLastLetter) {
    console.log(letter + ": " + namesByLastLetter[letter].join(", "));
  }
  var threshold = 300;
  console.log("Вибір на основі суми ASCII із порогом " + threshold);
  for (var i = 0; i < names.length; i++) {
    var asciiSum = calculateAsciiSum(names[i]);
    if (asciiSum > threshold) {
      helloSpeaker.speak(names[i]);
    } else {
      byeSpeaker.speak(names[i]);
    }
  }
  function calculateAsciiSum(name) {
    var sum = 0;
    for (var j = 0; j < name.length; j++) {
      sum += name.charCodeAt(j);
    }
    return sum;
  }
  

