function CoffeeMake() {};

CoffeeMake.prototype.on = function() {
  console.log(this.type + ' on')
}

CoffeeMake.prototype.off = function() {
  console.log(this.type + ' off')
}

function TypeOfMachine(type) {
  this.type = type;
}

TypeOfMachine.prototype = CoffeeMake.prototype;

const showType = new TypeOfMachine('Капельний тип');
showType.on();
showType.off();

const showType1 = new TypeOfMachine('Ріжковий тип');
showType1.on();
showType1.off();

const showType2 = new TypeOfMachine('Каво-машина');
showType2.on();
showType2.off();
