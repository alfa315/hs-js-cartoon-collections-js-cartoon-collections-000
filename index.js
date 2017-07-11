function dwarfRollCall(dwarves) {
  var emptyArray = []
	for (var i = 0; i <dwarves.length; i++){
		emptyArray.push(`${i+1}. ${dwarves[i]}`)
	}
	return `${emptyArray.join(' ')}`
}


function summonCaptainPlanet(planeteerCalls){
  var emptyCallArray = []
  for(var i = 0; i < planeteerCalls.length; i++){
    emptyCallArray.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return emptyCallArray
}


function longPlaneteerCalls(words) {
  var emptyWordsArray = []
  for (var i = 0; i < words.length; i++){
    emptyWordsArray.push(words[i].length)
  }
  function elementCount(element){
    return element >= 5
  }
  return emptyWordsArray.some(elementCount)
}


function findTheCheese (foods) {
  const typesOfCheese = ['cheddar', 'gouda', 'camembert']
  for(var i = 0; i < foods.length; i++){
    for(var j = 0; j < typesOfCheese.length; j++){
      if (foods[i] === typesOfCheese[j]){
        return foods[i]
      }
    }
  }
  return 'no cheese!'
}
