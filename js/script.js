const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play.`);
        this.sleep();
      } else {
        console.log(`Yay!${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

// Objects below related to pet
const sora = createPet("Sora", "Ferret"); //arguments for name, species

const clover = createPet("Clover", "rabbit");

const baxter = createPet("Baxter", "hamster");

const cleo = createPet("Cleo", "rat");

const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);// check if objects exist

clover.sleep(); //Here calls the sleep method for Clover
// Clover needs a nap. Zzz...
baxter.play(); // Here calls the play method for Baxter
// Yay!Baxter loves to play!

console.log(clover, baxter);
/* {name: "Clover", species: "rabbit", isTired: 1, sleep: ƒ sleep(), play: ƒ play()}
{name: "Baxter", species: "hamster", isTired: 6, sleep: ƒ sleep(), play: ƒ play()}
*/

clover.isTired = 8; //change value to 8 for Clover

francine.isTired = 9; // same as above

//create an array of the objects above
const allPets = [sora, clover, baxter, cleo, francine];

//to verify all objects show up as array elements
//console.log(allPets);
//(5) [Object, Object, Object, Object, Object]

//Display pets in the browser
const showPets = function (petArray) {
  const pets = document.querySelector(".all-pets");
  pets.innerHTML = ""; //empty string

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

//add click event to statusbutton

statusButton.addEventListener("click", function () {
  showPets(allPets);
});

/*Pet Meet & Greet!
SORA the Ferret is ready to play!
CLOVER the rabbit is sleeping
BAXTER the hamster is ready to play!
CLEO the rat is ready to play!
FRANCINE the turtle is sleeping*/
