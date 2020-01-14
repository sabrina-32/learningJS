// /************************
// CODING CHALLENGE -1

//  *************************/

console.log("CODING CHALLENGE -1");

 
 var markMass, markHeight, markBMI,johnMass, johnHeight,johnBMI;
 markHeight = prompt('what is Marks height in  meter?');
 console.log(markHeight*0.3048);
 markMass = prompt('what is Marks mass?');
 console.log(markMass);
 markBMI = markMass/(markHeight^2);
 console.log('BMI of Mark '+markBMI);

 johnHeight = prompt('what is Johns height in  meter?');
 console.log(johnHeight*0.3048);
 johnMass = prompt('what is Johns mass?');
 console.log(johnMass);

 johnBMI= johnMass/(johnMass^2);
 console.log('BMI of John '+johnBMI);

 var diffrence  =markBMI> johnBMI;
 console.log('Is Marks  BMI higher than Johns BMI? ' + diffrence);

 


// /************************
// CODING CHALLENGE -2

//  *************************/

console.log("\n\nCODING CHALLENGE -2\n");



var johnsTeamScore = (89+120+103)/3;
var mikesTeamScore = (116+94+123)/3;
var marysTeamScore = (97+134+105)/3;

console.log('Score of John\'s Team '+johnsTeamScore+'\nScore of Mike\'s Team '+mikesTeamScore+'\nScore of Mary\'s Team'+marysTeamScore);


if(johnsTeamScore>mikesTeamScore && johnsTeamScore>marysTeamScore){
    console.log("John\'s team  win  with "+johnsTeamScore+" points");

}
else if(mikesTeamScore>johnsTeamScore && mikesTeamScore>marysTeamScore){
    console.log("Mike\'s team  win  with "+mikesTeamScore+" points");

}
else if (marysTeamScore>johnsTeamScore && marysTeamScore>mikesTeamScore)
{
    console.log("Mary\'s team  win  with "+marysTeamScore+" points");


}

else{
    console.log("matches are draw");
}


// /************************
// CODING CHALLENGE -3

// 

console.log("\n\nCODING CHALLENGE -3\n");


var bills =[124,48,268];


function tipCalculate(bill){
    var tips;

    if(bill<50){
        tips = (20/100);

    }
    else if(bill>=50 && bill<200){
        tips =(15/100);

    }
    else if(bill>=200){
        tips = (10/100);

    }

    return tips*bill;
}


var totalTips =[tipCalculate(bills[0]),tipCalculate(bills[1]),tipCalculate(bills[2])];

var finalBill = [
    bills[0]+totalTips[0],bills[1]+totalTips[1],bills[2]+totalTips[2],]


console.log(totalTips,finalBill);





// /************************
// CODING CHALLENGE -4

//  *************************/




var  john ={
    name:  "John",
    mass: 70,
    height:1.55,
    bmi: function(){
        return this.mass/(this.height*this.height);

    }
}
console.log("BMI  of " +john.name+" : "+ john.bmi());




var  mark ={
    name:  "Mark",
    mass: 80,
    height: 1.88,
    bmi: function(){
        return this.mass/(this.height*this.height);

    }
}
console.log("BMI  of " +mark.name+" : "+ mark.bmi());



if(mark.bmi()>john.bmi()){
    console.log("Mark\'s  BMI  is  heigher than John");
}
else{
    console.log("John\'s  BMI  is  heigher than Mark");

}


