/// <reference path="../typings/knockout/knockout.d.ts"/>
declare var ko: KnockoutStatic;

module ambient_declarations {
  var name = ko.observable("John Papa");
  var id = ko.observable(1);
  var guy = {
    id: id,
    fullName: name
  };

  // Would give a compile error because fullName is wrapped on a function!
  // var value: string = guy.fullName;
  var value: string = guy.fullName();
  console.log(value);
}
