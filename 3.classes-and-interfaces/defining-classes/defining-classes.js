var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Carr = (function () {
    // - constructors
    function Carr(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Carr.prototype, "engine", {
        // - properties
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Please supply an engine";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    // - functions
    Carr.prototype.start = function () {
        alert("Car engine started " + this._engine.engineType);
    };
    return Carr;
}());
window.onload = function () {
    var engine = new Engine(300, "V8"), carr = new Carr(engine);
    alert(carr.engine.engineType);
    carr.start();
};
