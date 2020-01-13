// /************************
// CODING CHALLENGE -1

//  *************************/

 
//  var markMass, markHeight, markBMI,johnMass, johnHeight,johnBMI;
//  markHeight = prompt('what is Marks height in  meter?');
//  console.log(markHeight*0.3048);
//  markMass = prompt('what is Marks mass?');
//  console.log(markMass);
//  markBMI = markMass/(markHeight^2);
//  console.log('BMI of Mark '+markBMI);

//  johnHeight = prompt('what is Johns height in  meter?');
//  console.log(johnHeight*0.3048);
//  johnMass = prompt('what is Johns mass?');
//  console.log(johnMass);

//  johnBMI= johnMass/(johnMass^2);
//  console.log('BMI of John '+johnBMI);

//  var diffrence  =markBMI> johnBMI;
//  console.log('Is Marks  BMI higher than Johns BMI? ' + diffrence);

 


// /************************
// CODING CHALLENGE -2

//  *************************/




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
