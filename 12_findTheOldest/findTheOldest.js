const findTheOldest = function(personsArray) {
    const oldest = personsArray.sort(function(a, b){
        const lastPerson = Number(stillLiving(a)) - a.yearOfBirth;
        const nextPerson = Number(stillLiving(b)) - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
     })
    console.table(oldest);
    return oldest[0];
}


function stillLiving(person){
    const currentYear = new Date().getFullYear();
    if ('yearOfDeath' in person){
      return person.yearOfDeath; 
    }
    return currentYear;
}



// Do not edit below this line
module.exports = findTheOldest;
