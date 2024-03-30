/**
 * @description Get mammal data from mammals.json file and write it to mammalDataFromJSON
 */
/*
    //This works only when files located in server

let mammalDataFromJSON;

(async function getMammalDataFromJSON () {
    fetch('./mammal.json', {mode:'no-cors'})
    .then(response => response.json())
    .then(mammals => {mammalDataFromJSON = mammal.Mammals});})();
*/

//Base mammals data

/**
 * @description Create mammal data
 * @returns {object} Object that contains array with mammal objects
 */
function mammalData() {
  const mammals = {
    Mammals: [
      {
        species: 'Capybara',
        weight: 51,
        height: 55,
        diet: 'Herbavore',
        where:
          'South America and inhabit dense forests near bodies of water such as rivers, lakes, and ponds',
        years: '9 years',
        fact: 'Capybaras are the largest rodents in the world',
      },
      {
        species: 'Macaque Monkey',
        weight: 10,
        height: 50,
        diet: 'Omnivore',
        where:
          'Asia, Africa, and parts of Europe in forests, mountains and urban areas',
        years: '30 years',
        fact: 'Macaques are highly social animals, living in groups known as troops up to several dozen spieces',
      },
      {
        species: 'Hedgehog',
        weight: 1,
        height: 25,
        diet: 'Omnivore',
        where:
          'Europe, Asia, and Africa in orests, grasslands, meadows and gardens',
        years: '7 years',
        fact: 'Hedgehogs are known for their unique defense mechanism of rolling into a tight ball to protect themselves from predators',
      },
      {
        species: 'Brown Bear',
        weight: 435,
        height: 120,
        diet: 'Omnivore',
        where:
          'North America, Europe, and Asia in forests, mountains, tundra and grasslands',
        years: '30 years',
        fact: 'Despite their name, brown bears can range in color from almost black to blonde or light brown',
      },
      {
        species: 'Meerkat',
        weight: 0.9,
        height: 30,
        diet: 'Omnivore',
        where: 'Southern Africa in deserts and grasslands',
        years: '14 years',
        fact: 'Meerkats are highly social animals that live in groups called mobs or gangs, which can consist of up to 30 individuals',
      },
      {
        species: 'Giraffe',
        weight: 1000,
        height: 550,
        diet: 'Herbavore',
        where: 'Africa in savannas, grasslands and open woodlands',
        years: '25 years',
        fact: 'Giraffes have incredibly long necks, which can reach up to 2 meters in length',
      },
      {
        species: 'Elephant',
        weight: 4500,
        height: 325,
        diet: 'Herbavore',
        where: 'Africa and Asia in savannas, forests and grasslands ',
        years: '70 years',
        fact: 'Elephants have the largest brains of any land animal. They are highly intelligent',
      },
      {
        species: 'Blue whale',
        weight: 150000,
        height: 3000,
        diet: 'Carnivore',
        where: 'Oceans and seas worldwide',
        years: '90 years',
        fact: 'The heart of a blue whale is enormous, weighing as much as a small car and beating only a few times per minute',
      },
    ],
  };

  return mammals.Mammals;
}

// Create Mammal Constructor
// Create Mammal Compare Method 1,2,3,

/**
 * @description Create mammal object with comparison methods
 * @constructor
 * @param {object} data Object that contains information about mammal
 */
class MammalConstructor {
  constructor(data) {
    this.species = data.species;
    this.weight = Math.round(data.weight);
    this.height = Math.round(data.height);
    this.diet = data.diet;
    this.where = data.where;
    this.years = data.years;
    this.fact = data.fact;
  }

  /**
   * @description Method that compare weight of human and mammal
   * @param {number} humanWeight
   * @returns {string} String with the result of comparison
   */
  compareWeight(humanWeight) {
    const weightComparison =
      this.weight > humanWeight
        ? `${this.species} heavier than you for ${(
            this.weight - humanWeight
          ).toFixed(0)}kg and his weight is ${(
            this.weight / humanWeight
          ).toFixed(1)} times more then yours`
        : this.weight < humanWeight
        ? `Wow, ${this.species} lighter than you for ${(
            humanWeight - this.weight
          ).toFixed(0)}kg and his weight is ${(
            humanWeight / this.weight
          ).toFixed(1)} times less then yours`
        : `Wow, you weight is the same as ${this.species} weight`;
    return weightComparison;
  }

  /**
   * @description Method that compare height of human and mammal
   * @param {number} humanHeight
   * @returns {string} String with the result of comparison
   */
  compareHeight(humanHeight) {
    const heightComparison =
      this.height > humanHeight
        ? `${this.species} taller than you for ${(
            this.height - humanHeight
          ).toFixed(0)}cm and his height is ${(
            this.height / humanHeight
          ).toFixed(1)} times more then yours`
        : this.height < humanHeight
        ? `Wow, ${this.species} lower than you for ${(
            humanHeight - this.height
          ).toFixed(0)}cm and his height is ${(
            humanHeight / this.height
          ).toFixed(1)} times less then yours`
        : `Wow, you height is the same as ${this.species} height`;
    return heightComparison;
  }

  /**
   * @description Method that compare diet of human and mammal
   * @param {string} humanDiet
   * @returns {string} String with the result of comparison
   */
  compareDiet(humanDiet) {
    const dietComparison =
      this.diet === 'Carnivore'
        ? humanDiet === 'Herbavore'
          ? `${this.species} is carnivore and you are herbavore, you prefer another type of food `
          : humanDiet === 'Carnivore'
          ? `${this.species} is carnivore like you and you both prefer meet `
          : humanDiet === 'Omnivore'
          ? `${this.species} is carnivore and you are omnivore, you both prefer meet, but you also like veggies`
          : ''
        : this.diet === 'Herbavore'
        ? humanDiet === 'Herbavore'
          ? `${this.species} is herbavore like you and you both don't eat meet `
          : humanDiet === 'Carnivore'
          ? `${this.species} is herbavore and you are carnivore, you prefer another type of food `
          : humanDiet === 'Omnivore'
          ? `${this.species} is herbavore and you are omnivore, you both prefer veggies, but you also like meet`
          : ''
        : this.diet === 'Omnivore'
        ? humanDiet === 'Herbavore'
          ? `${this.species} is omnivore and you are herbavore, you both prefer veggies, but ${this.species} also like meet`
          : humanDiet === 'Carnivore'
          ? `${this.species} is omnivore and you are carnivore, you both prefer meet, but ${this.species} also like veggies`
          : humanDiet === 'Omnivore'
          ? `${this.species} is omnivore like you and you both prefer all types of food`
          : ''
        : '';

    return dietComparison;
  }
}

/******** check MammalConstructor */
/* in console:
        const ddd = new MammalConstructor(mammalData()[1]);
        const mammal1 = new MammalConstructor (mammalData ()[0]);
        */

// Create Mammal Objects

/**
 * @description Shuffle array
 * @param {array} array Array that need to be shuffle
 */
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

/**
 * @description Create new array with mammals and comparison methods
 * @param {array} baseMammalData Array that contaions mammal objects
 * @returns {array} Array that contaions new mammal objects with methods
 */
function newMammalData(baseMammalData) {
  let newMammals = baseMammalData.map((data) => new MammalConstructor(data));
  shuffle(newMammals);
  return newMammals;
}

/******** Check newMammalData */
/* in console:
        let aaa = newMammalData (mammalData ());
        */

// Create Human Object
/**
 * @description Create new human object from the input fields
 * @returns {object} Object with human data (name, weight, height, diet)
 */
function newHumanData() {
  return {
    name: document.querySelector('#name').value,
    weight: Number(document.querySelector('#weight').value),
    height:
      Number(document.querySelector('#meter').value) * 100 +
      Number(document.querySelector('#centimeter').value),
    diet: document.querySelector('#diet').value,
  };
}

/******** Check newMammalData */
/* in console:
        newHumanData ();
        */

// Generate Tiles for each Mammal in Array
/**
 * @description Generate HTML code for single mammal tile
 * @param {object} mammalObject single mammal object with methods
 * @param {object} humanObject single human object
 * @returns {string} HTML code of the single mammal tile
 */
function tileMammalGenerator(mammalObject, humanObject) {
  const randomNumber = Math.round(Math.random() * 5);
  let randomFact = '';
  switch (mammalObject.species === 'Elephant' ? 5 : randomNumber) {
    case 0:
      randomFact = mammalObject.compareWeight(humanObject.weight);
      break;
    case 1:
      randomFact = mammalObject.compareHeight(humanObject.height);
      break;
    case 2:
      randomFact = mammalObject.compareDiet(humanObject.diet);
      break;
    case 3:
      randomFact = `${mammalObject.species} lives in ${mammalObject.where}`;
      break;
    case 4:
      randomFact = `${mammalObject.species} lives approximately ${mammalObject.years}`;
      break;
    case 5:
      randomFact = mammalObject.fact;
      break;
  }

  let mammalTileHtml = `<div class="grid-item"> 
            <span class="card-name"><h3>${mammalObject.species}</h3></span>
            <span class="card-image-text"><img src="images/${mammalObject.species.toLowerCase()}.png" alt="${
    mammalObject.species
  }">
            <p>${randomFact}</p></span>
        </div>`;
  return mammalTileHtml;
}

/******** Check tileMammalGenerator */
/* in console:
            const mammal1 = new MammalConstructor(mammalData()[0]);
            let human1 = {
                "name": "fenix",
                "weight": 60,
                "height": "170",
                "diet": "omnivore",
            };  
        tileMammalGenerator (mammal1,human1); 
        */

// Add tiles to DOM
// Remove form from screen
/**
 * @description Generate HTML code for all mammal tiles and human tile and add it to DOM
 * @param {array} mammalArray Array of all mammals with methods
 * @param {object} humanObject single human object
 */
function tilesToDom(mammalArray, humanObject) {
  document.querySelector('#mammal-compare').style.display = 'none';
  let tilesHTML = '';
  let i = 0;
  for (const mammalObject of mammalArray) {
    if (i === 4) {
      tilesHTML += `<div class="grid-item"> <h3>${humanObject.name}</h3>
            <img class="img-human"src="images/human.png" alt="${humanObject.name}" onclick='infographicCreation()'>
            </div>`;
    }
    tilesHTML += tileMammalGenerator(mammalObject, humanObject);
    i += 1;
  }
  document.querySelector('#grid').innerHTML = tilesHTML;
}

/******** Check tilesToDom */
/* in console:
        let human1 = {
            "name": "fenix",
            "weight": 60,
            "height": "170",
            "diet": "omnivore",
        };  
        tilesToDom (newMammalData (mammalData ()),human1); 
        */

// On button click, prepare and display infographic
/**
 * @description Calls all function to create infographic
 */
function infographicCreation() {
  tilesToDom(newMammalData(mammalData()), newHumanData());
}

// Use IIFE to get human data from form
//IIFE to add eventListener for button click
/**
 * @description Create eventlistener to button and check valid numbers in form
 */
(function buttonClick() {
  document.querySelector('#btn').addEventListener('click', () => {
    let heightCorrect;
    let weightCorrect;

    Number(document.querySelector('#centimeter').value) +
      Number(document.querySelector('#meter').value) <= 0
      ? (heightCorrect = false)
      : (heightCorrect = true);
    Number(document.querySelector('#weight').value) <= 0
      ? (weightCorrect = false)
      : (weightCorrect = true);

    switch (heightCorrect) {
      case true:
        document.querySelector('#meter').className = 'form-field__short';
        document.querySelector('#centimeter').className = 'form-field__short';
        break;
      case false:
        document.querySelector('#meter').className = 'form-field__short_wrong ';
        document.querySelector('#centimeter').className =
          'form-field__short_wrong';
        break;
    }
    switch (weightCorrect) {
      case true:
        document.querySelector('#weight').className = 'form-field__full';
        break;
      case false:
        document.querySelector('#weight').className = 'form-field__full_wrong';
        break;
    }
    if (weightCorrect === true && heightCorrect === true) {
      infographicCreation();
    }
  });
})();
