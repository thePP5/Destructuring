//destructuring arrays reduces the code using destructure assignment operator
let colors = ['blue','red','purple'];
// Destructure here
let [color1,color2,color3] = colors;

console.log(color1, color2, color3); // will print blue, red , purple


//destructuring objects
let planets = { x: 'Saturn', y: 'Mars', z: 'Neptune' };

// Destructure here
let {x,y,z} = planets;

console.log(x, y, z); //will print Saturn, Mars, Neptune


// Destructuring function parameters

/*
Function arguments are another place where destructuring is useful. 
Instead of accepting a complete object as an argument, a function 
can use destructuring to capture specific properties as named parameters.
 */


let prairieRose = {
    name: 'Prairie Rose',
    scientificName: 'Rosa arkansana',
    kingdom:	'Plantae',
    genus:	'Rosa',
    use: 'ornamental'
  };
  
  const printPlantInfo = ({name,scientificName,kingdom}) => {
  console.log(`The ${name}, or ${scientificName}, is in the ${kingdom}.`)
  };
  
  printPlantInfo(prairieRose);