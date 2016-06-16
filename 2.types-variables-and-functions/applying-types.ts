module applying_types {
  // any
  var data: any;
  var doSomething = function(arg: any) {
    return arg;
  }
  // var x = doSomething(5);

  // primitives
  var age: number = 21;
  var score: number = 34.56;
  var rating = 99.99;

  var hasData: boolean = true;
  var isReady = true;
  var isBald = function() { return "yes"; };
  var hasHair: boolean = !!isBald(); // negate

  var firstName: string = "John";
  var lastName = "Papa";


  // string array
  function getArrayLength(x: string[]) {
    var len: number = x.length;
    return len;
  }

  var names: string[] = ["John", "Dan", "Aaron", "Fritz"];
  var firstPerson = names[0];
  console.log(getArrayLength(names));

  // null
  var guitarSales: any = null;
  var orderDate: Date = null;

  // undefined
  var quantity: number;
  var company: any = undefined;

  console.log("undefined examples");
  console.log(quantity);
  console.log(company);
}
