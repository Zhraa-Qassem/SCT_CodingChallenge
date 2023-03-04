
function checkPassengersCount() {
    let NoOfTravellers = 0;
    for (let i = 0; i < passengerInfo.length; i++) {
        NoOfTravellers = NoOfTravellers + 1;
    }

    return NoOfTravellers;
}





function checkPassengersOfSameAge() {
    let ids = {};
    let noOfPassngersWithSimilarAge = [];
    
    passengerInfo.forEach((val)=> {
      if (ids[val.passengerAge]) {
        noOfPassngersWithSimilarAge.push(val)
      } else {
        ids[val.passengerAge] = true;
      }
    })
   return noOfPassngersWithSimilarAge;
}

function addNewPassenger(name,age,passportNo){
passengerInfo.push({
    passengerName: name, passengerAge: age , passengerPassportNo:passportNo
})

}

const passengerInfo = [{
    passengerName: "Noor",
    passengerAge: 24,
    passengerPassportNo: "A123456"
},
{
    passengerName: "Zahraa",
    passengerAge: 23,
    passengerPassportNo: "A67899",
},
{
    passengerName: "Ahmed",
    passengerAge: 24,
    passengerPassportNo: "A14343"
},]


var passengerCount = checkPassengersCount()
var passengersOfSameAge = checkPassengersOfSameAge()
//console.log(passengerCount)
//console.log(passengersOfSameAge)
document.write('number of passengers:',' '+ passengerCount)
//document.write("\n"+"number of passenger who have same age : ",' '+ passengersOfSameAge)

console.log("number of passengers: ", checkPassengersCount(passengerInfo))
console.log("\r\n"+"number of passenger who have same age : ", checkPassengersOfSameAge(passengerInfo))

//extra cridet question
addNewPassenger('zhraa',20,8765);
console.log(passengerInfo)
