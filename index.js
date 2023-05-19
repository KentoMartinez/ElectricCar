class Car {
   constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
   }
   getDescription(){
      return `Key information about our car: ${this.make}, ${this.model}, ${this.year}.`;
   }
}
class ElectricCar extends Car {
   constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
   }
   getDescription(){
      return `${super.getDescription()} It has ${this.range} miles range at full charge.`;
   }
}
const car1 = new ElectricCar('Tesla', 'Model S', 2019, 300);
   console.log(car1.getDescription()); 