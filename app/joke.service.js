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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var JokeService = (function () {
    //  private jokesUrl='http://kejokesapi.herokuapp.com/jokes';
    function JokeService(http) {
        this.http = http;
        this.jokesUrl = 'app/joke.json'; //url to json
    }
    JokeService.prototype.getJokes = function () {
        return this.http.get(this.jokesUrl).map(this.extractData);
    };
    JokeService.prototype.addJoke = function (description) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.jokesUrl, JSON.stringify(description), options)
            .map(this.extractData);
    };
    JokeService.prototype.extractData = function (res) {
        var body = res.json();
        return body.jokes || {};
    };
    JokeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JokeService);
    return JokeService;
}());
exports.JokeService = JokeService;
//# sourceMappingURL=joke.service.js.map