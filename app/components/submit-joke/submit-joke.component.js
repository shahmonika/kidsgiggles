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
var core_1 = require("@angular/core");
require("../../rxjs-operators");
var joke_service_1 = require("../../joke.service");
var SubmitJokeComponent = (function () {
    function SubmitJokeComponent(jokeService) {
        this.jokeService = jokeService;
    }
    SubmitJokeComponent.prototype.addJoke = function (description) {
        var _this = this;
        if (!description) {
            return;
        }
        this.jokeService.addJoke(description).subscribe(function (joke) { return _this.jokeses.push(joke); });
    };
    return SubmitJokeComponent;
}());
SubmitJokeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'submit-joke',
        templateUrl: 'submit-joke.component.html'
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService])
], SubmitJokeComponent);
exports.SubmitJokeComponent = SubmitJokeComponent;
//# sourceMappingURL=submit-joke.component.js.map