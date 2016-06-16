module grammar {
  // --- CASE 1
  /*
  var person: any;
  person = "John Papa";
  console.log(person.substring(1, 4));

  // will not give us a compile error
  // instead, it is going to throw a runtime error
  person = {
    name: "Collin",
    age: 25
  };
  console.log(person.substring(1, 4));
  */

  // --- CASE 2
  var person: string;
  person = "John Papa";
  console.log(person.substring(1, 4));

  /*
  // now it will give us a compile error! :)
  person = {
    name: "Collin",
    age: 25
  };
  console.log(person.substring(1, 4));*/
}
