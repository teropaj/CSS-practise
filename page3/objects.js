
  //Prototype of a car. Each car object has these variables and functions.
  //Creating some sample car objects
    var listOfCars = [];

    var fiat = new car("ABC-123", "Fiat", "Punto", "blue", 2500);
    var tesla = new car("OUI-658", "Tesla", "Model 3", "#ff2800", 50000);
    var volvo = new car("DEF-658", "Volvo", "X90", "black", 8000);
    listOfCars.push(volvo);
    listOfCars.push(tesla);
    listOfCars.push(fiat);
  function car(licensePlate, maker, model, color, price) {
      this.licenseNumber = licensePlate; //this refers to the object that "owns" the current code
      this.manufacturer = maker;         //For example, when object called fiat calls the functions here,
      this.model = model;               //it gets different result than when an object called tesla calls these functions.
      this.paint = color;
      this.price = price;
      this.ignition = false;

      this.start = function () {
          console.log("Vroom Vroom! " + this.getname() + " is ready to go!");
          this.ignition = true;
      }

      this.stop = function(){
          console.log("Screech! " + this.getname() + " is stopped.");
          this.ignition = false;
      }

      this.drive = function(){
        if(this.ignition) console.log("When this baby hits 88 miles per hour... you're gonna see some serious shit");
        else console.log("Need to start the car first");
      }

      this.getname = function(){
        return this.manufacturer + " " + this.model;
      }
      this.printCar = function(){
  //    console.log(this.licenseNumber); //this refers to the object that "owns" the current code
      console.log(this.manufacturer);         //For example, when object called fiat calls the functions here,
    //  console.log(this.model);               //it gets different result than when an object called tesla calls these functions.
    //  console.log(this.paint);
      console.log(this.price);
    //  console.log(this.ignition);
      }
      //If the price is over 20 000, discount is 25%. If it is under 5000, it is 10%. Otherwise the discount is 15%.
      this.discount = function(){
        if(this.price>20000) {this.price=this.price*0.75;console.log('Price over 20000. Discount is 25%');}
        else if(this.price<5000) {this.price=this.price*0.9;console.log('Price under 5000. Discount is 10%');}
        else {this.price=this.price*0.85;console.log('Discount 15 %');}
      }
  }



//TODO:

/*  1. Complete the function "createNewCar". The function takes data that the user input (use the DOM) and creates a new car object with this data.
    Log to the console the new car that was added.*/

   function createNewCar(){
    //console.log(licenseplate.value);
    //console.log('manufacturer '+manufacturer.value);
    var li=document.getElementById('license-plate').value;
    var ma=document.getElementById('manufacturer').value;
    var mo=document.getElementById('model').value;
    var pr=document.getElementById('price').value;
    var pa=document.getElementById('paint').value;








    //var newcar = new car(, "Fiat", "Punto", "blue", 2500);
    newcar = new car(li, ma, mo, pa,pr);
    console.log('Added '+newcar);
    listOfCars.push(newcar);
    //console.log('listOfCars '+listOfCars);
    //  sortArray();
  }







  // 2. Create an array of objects called listOfCars that contains every car object. When a user adds a car, the list should update as well.
  // Use the console.table() command to print the resulting array in console.
  //var listOfCars;



  // 3. Sort the array based on the price of each car so that the cheapest cars are first in the array
  // If you struggle to come up with a sorting algorithm by yourself, use Google to find examples of how to do sorting in JavaScript


  function sortArray(){
    //console.log("Insert your code here.");
  /*  var maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});
    */
    var sortable=[];

    for(var i in listOfCars) {
      sortable.push([i, listOfCars[i]]);
      console.log(listOfCars[i]);
    }
    sortable.sort(function(a, b){
      console.log('Compares number: '+a);
      console.log('128 Numbers '+a[1]+' '+b[1]);
      console.log(a[4]+' '+b[4]);
      return a[4] - b[4];
    });
    for(i in sortable){console.log('In order '+sortable[i]);}


    return sortable;



  }

  // 4. Create a function that allows the user to search for a specific car based on a license plate.
  function searchFromArray(whatSearch){
    var results = "";
    if (whatSearch=='search')  var b=document.getElementById('search').value;
    if (whatSearch=='discount') {var b=document.getElementById('discount').value;
      console.log('153 '+b);}
    for (carListIndex in listOfCars) {

      var a=listOfCars[carListIndex].licenseNumber;



      ///console.log(a+' '+b);
      //console.log(typeof a+'  '+typeof b);
      if (a==b){
          console.log("Search results: ");
          results=listOfCars[carListIndex];
          //console.table("Search results: " + results);return;
          console.table(results);return listOfCars[carListIndex];
      }
    }

  }

  /*5. Create a method discount() for the car -object that returns a discounted price of the vehicle. The discounted price depends
       on the price of the car. If the price is over 20 000, discount is 25%. If it is under 5000, it is 10%. Otherwise the discount is 15%.
       console.log(tesla.discount());
       console.log(fiat.discount()); */

  /*6. Create a new object called customer() that has attributes like name, age, disposableIncome etc.,
       and methods such as buyCar(car)
    */
function customer(name,age,disposableIncome){
  this.name=name;
  this.age=age;
  this.disposableIncome=disposableIncome;

 this.buyCar=function (){

 }




}












function sortA(number){

  var maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60
};
var sortable = [];
//for (var vehicle in maxSpeed) {
for (var vehicle in listOfCars) {
  console.log(vehicle);
  sortable.push([vehicle, listOfCars[vehicle]]);
}

sortable.sort(function(a, b) {
  return a[4] - b[4];
});
//printArray(sortable);
listOfCars=sortable;
}
/*function printArray(array){
  for (i in array){
    for(var j=0;j=<4;j++) {let carArray+=carArray+ (array[i].[j])}}
*/
/*function sortArray(array,number){
  array.sort(function(a, b) {console.log(a[number]+' '+b[number]);
    return a[number] - b[number];
  });
}*/
function printCars(){
  //console.log('was here 178 ');
  console.table(listOfCars);
/*
  for (let i in listOfCars) {let number=parseInt(i+1);//console.log('was here '+i);
  //  console.log(number+'.'+' car')
    listOfCars[i].printCar();}*/
}
function findLargistPrice(){
//  console.log('Was here');
  //var largist=listOfCars[0].price;
  var largistObject=0;
  var helper;
  for (var outerListOfCarsIndex=0; outerListOfCarsIndex<listOfCars.length; outerListOfCarsIndex++){
    largist=listOfCars[outerListOfCarsIndex];
    for (var innerListOfCarsIndex=outerListOfCarsIndex; innerListOfCarsIndex<listOfCars.length; innerListOfCarsIndex++){
      //console.log(listOfCars[outerListOfCarsIndex].price+'  '+listOfCars[innerListOfCarsIndex].price);
      if(listOfCars[innerListOfCarsIndex].price<listOfCars[outerListOfCarsIndex].price) {

        helper=listOfCars[outerListOfCarsIndex];
        listOfCars[outerListOfCarsIndex]=listOfCars[innerListOfCarsIndex];
        listOfCars[innerListOfCarsIndex]=helper;
      }

    //if(largist<listOfCars[listOfCarsIndex].price) largistObject=listOfCarsIndex;
    }
    //listOfCars[]


  }
console.log('Ordor by price');
printCars();
}
function discount(){
  var car=document.getElementById('discount').value;
  //console.log('244 '+car);
  var objectOfCar =searchFromArray('discount');
  //console.log('****246***** ')
  objectOfCar.discount();



}
//findLargistPrice();
//printCars();

function sortE(){
var maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
  sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
  return a[1] - b[1];
});
console.table(sortable);
}
//sortArray();
//printCars();
//sortE();
function takeButton(){alert ('joo');}
