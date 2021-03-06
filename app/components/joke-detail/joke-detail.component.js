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
var JokeDetailComponent = (function () {
    function JokeDetailComponent(jokeService) {
        this.jokeService = jokeService;
        this.mode = 'Observable';
        this.title = 'Jokes are here!!!';
    }
    JokeDetailComponent.prototype.ngOnInit = function () {
        this.getJokes();
    };
    JokeDetailComponent.prototype.getJokes = function () {
        var _this = this;
        this.jokeService.getJokes().subscribe(function (jokeses) { return _this.jokeses = jokeses; });
    };
    JokeDetailComponent.prototype.liked = function (index) {
        this.jokeses[index].likesCount = this.jokeses[index].likesCount + 1;
    };
    return JokeDetailComponent;
}());
JokeDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'joke-detail',
        templateUrl: 'joke-detail.component.html',
        providers: [joke_service_1.JokeService]
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService])
], JokeDetailComponent);
exports.JokeDetailComponent = JokeDetailComponent;
//# sourceMappingURL=joke-detail.component.js.map