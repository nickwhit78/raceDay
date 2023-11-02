let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = true;
var runnerAge = 26;
if (runnerAge > 18 && registeredEarly === true){
  raceNumber = (raceNumber + 1000);
}
//console.log(raceNumber);
if (runnerAge > 18 && registeredEarly === true){
  console.log(`Your race will begin at 9:30 A.M. and and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly != true);{
  console.log(`Your race will begin at 11:00 am and your race number is ${raceNumber}.`);
} else { 
  console.log(`Your race will begin at 12:30 pm and your race number is ${raceNumber}.`);
}
 
