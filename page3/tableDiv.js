function updateTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell = [];
    for (let i=0;i<5;i++){
      cell[i] = row.insertCell(i);
    }

    cell[0].innerHTML = listOfCars[listOfCars.length-1].licenseNumber;
    cell[1].innerHTML = listOfCars[listOfCars.length-1].manufacturer;
    cell[2].innerHTML = listOfCars[listOfCars.length-1].model;
    cell[3].innerHTML = listOfCars[listOfCars.length-1].paint;
    cell[4].innerHTML = listOfCars[listOfCars.length-1].price;



}


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
 updateTable();
 //console.log('listOfCars '+listOfCars);
 //  sortArray();
}
