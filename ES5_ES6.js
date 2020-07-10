const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  const getAge = pet => { return new Date().getFullYear() - pet.bornOn}
  function showEachOne(Age) {
    pets.forEach(pet => {;
  console.log(pets[i].Age);})
  }
  function findPets(dogs) {
    return pets.find(pet=>{return pet.dogs==dogs});
   console.log(dogs);
  }
  function filterpets() {
    return pets.filter((pet)=>{
      return pet.name === "Jasper";
    })
  } 
  console.log(`Jasper is ${jasper.age} years old`);
  