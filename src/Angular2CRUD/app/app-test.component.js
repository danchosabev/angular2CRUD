"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var TestComponent = (function () {
    function TestComponent() {
        //title = 'Tour of Heroes';
        //hero: Hero = {
        //	id: 1,
        //	name: 'Windstorm'
        //   };
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    TestComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'my-app-test',
            templateUrl: 'view/app-test.component.html',
            styles: ["\n\t.selected {\n\t  background-color: #CFD8DC !important;\n\t  color: white;\n\t}\n\t.heroes {\n\t  margin: 0 0 2em 0;\n\t  list-style-type: none;\n\t  padding: 0;\n\t  width: 15em;\n\t}\n\t.heroes li {\n\t  cursor: pointer;\n\t  position: relative;\n\t  left: 0;\n\t  background-color: #EEE;\n\t  margin: .5em;\n\t  padding: .3em 0;\n\t  height: 1.6em;\n\t  border-radius: 4px;\n\t}\n\t.heroes li.selected:hover {\n\t  background-color: #BBD8DC !important;\n\t  color: white;\n\t}\n\t.heroes li:hover {\n\t  color: #607D8B;\n\t  background-color: #DDD;\n\t  left: .1em;\n\t}\n\t.heroes .text {\n\t  position: relative;\n\t  top: -3px;\n\t}\n\t.heroes .badge {\n\t  display: inline-block;\n\t  font-size: small;\n\t  color: white;\n\t  padding: 0.8em 0.7em 0 0.7em;\n\t  background-color: #607D8B;\n\t  line-height: 1em;\n\t  position: relative;\n\t  left: -1px;\n\t  top: -4px;\n\t  height: 1.8em;\n\t  margin-right: .8em;\n\t  border-radius: 4px 0 0 4px;\n\t}\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=app-test.component.js.map