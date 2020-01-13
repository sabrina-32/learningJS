/************************
CODING CHALLENGE

 *************************/


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

 
 



 
 