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
var joke_1 = require('./joke');
require('./rxjs-operators');
var SubmitJokeComponent = (function () {
    function SubmitJokeComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', joke_1.Joke)
    ], SubmitJokeComponent.prototype, "joke", void 0);
    SubmitJokeComponent = __decorate([
        core_1.Component({
            selector: 'submit-joke',
            template: "\n\n<div>\n        <h2>submit jokes</h2>\n        \n    \n  \n      <!--<h2>{{joke.description}} details!</h2>-->\n      <!--<label>id: </label>{{joke._id}}-->\n      \n      \n      \n      <label>type ur New joke  <input #newJokeName /></label>\n<button (click)=\"addJoke(newJokeName.value); newJokeName.value=''\">Add joke</button>\n      \n      </div>\n    \n"
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitJokeComponent);
    return SubmitJokeComponent;
}());
exports.SubmitJokeComponent = SubmitJokeComponent;
//# sourceMappingURL=submit-joke.component.js.map