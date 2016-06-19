// tsc --target ES5 defining-classes.ts
class Engine {
  constructor(public horsePower: number, public engineType: string) { }
}

class Carr {
  // - fields
  private _engine: Engine; // underscore convention for private fields

  // - constructors
  constructor(engine: Engine) {
    this.engine = engine;
  }

  // - properties
  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if(value == undefined) throw "Please supply an engine";
    this._engine = value;
  }

  // - functions
  start() : void {
    alert("Car engine started " + this._engine.engineType);
  }
}

window.onload = function() {
  var engine = new Engine(300, "V8"),
  carr = new Carr(engine);

  alert(carr.engine.engineType);
  carr.start();
}
