  //datatypes - string, number, boolean, undefined, null
  //string (" ")
  var a = "aardra";
  console.log(a);

  var a1 = "AISHWARYA"
  
  //number
  var b = 100;
  console.log(b);
  
  //boolean = true/false
  var c = true;
  console.log(c);
  
  //undefined
  var d;
  console.log(d);
  
  //null
  var e = null;
  console.log(e); 
  
  //toUpperCase() and toLowerCase()
  console.log(a.toUpperCase());
  console.log(a1.toLowerCase());
  
  //ARITHMETIC OPERATOS --> + - / * %
  console.log(56+745);
  console.log(437-68);
  console.log(289*45);
  console.log(369/3);
  console.log(11%5);
  console.log(9/0);
  console.log(a/c);
  //NaN - Not a Number
  
  //COMPARITIVE OPERATORS --> >,<,>=,<=,==,!==
  console.log(9>23);
  console.log(243<=443);
  console.log(4933<4444);
  console.log(568>=443);
  console.log(437==68);
  console.log(1234!==12398);
  
  //conditional operator --> if(){}
  if(3<2){
    console.log("Three is lesser than 2")
  }
  else{
    console.log("Three is greater than 2")
  }
if(124==130){
  console.log("Both the numbers are equal")
}
else{
      console.log("Both the numbers are not equal")
}

//for loop --> to print numbers from 1 to 10
//for(initialisation;condition;increment/decrement){}
for(var i=1; i<=10; i=i+1){
  console.log(i);
}


//print the odd numbers from 21 to 41
for(var i=21; i<=41; i=i+2){
  console.log(i);
}

//arrays []
var shapes = [  ["circle", "square","rectangle","traingle","cube",'cuboid'],  [123,456,789,1011,12,34,54]   ];
console.log(shapes[1][1]);
//index - the numbering given for the items inside an array
//index always starts from 0
shapes.push(["black",'white','red','pink','blue']);
shapes.push(false)
console.log(shapes);
console.log(shapes.length)

//creating user defined functions
function add(num1,num2){
  var sum = num1 + num2
  return sum;
}

console.log(add(56,98))
function cube(num1){
  var cu=num1*num1*num1;
  return  cu;
}

console.log(cube(38))