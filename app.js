$("#jelly-fish").append(jellyFish);

const jellyTokens = nlp(jellyFish);

console.log(typeof(jellyTokens));

const jellyString = JSON.stringify(jellyTokens, undefined, 4);

const jellyJSON = JSON.parse(jellyString);

$("#jelly-json").append(jellyJSON);