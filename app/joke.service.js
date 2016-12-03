import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
export var JokeService = (function () {
    //  private jokesUrl='http://kejokesapi.herokuapp.com/jokes';
    function JokeService(http) {
        this.http = http;
        this.jokesUrl = 'app/joke.json'; //url to json
    }
    JokeService.prototype.getJokes = function () {
        return this.http.get(this.jokesUrl).map(this.extractData);
    };
    JokeService.prototype.addJoke = function (description) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.jokesUrl, JSON.stringify(description), options)
            .map(this.extractData);
    };
    JokeService.prototype.extractData = function (res) {
        var body = res.json();
        return body.jokes || {};
    };
    JokeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JokeService.ctorParameters = [
        { type: Http, },
    ];
    return JokeService;
}());
