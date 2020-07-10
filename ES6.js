const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = pet => { return new Date().getFullYear() - pet.bornOn}
  
  function showEachOne (age){
  pets.forEach(pet=>{
    alert(pets[i].age)
  });
  }
  function filterPets(){
    return pets.filter((pet)=>{
     return pet.type == "dog";
    })
  }
  function findPet(name){
    return pets.find(pet=>{return pet.name == "Jasper"});
  }
  