import { Component } from '@angular/core';
import '../../rxjs-operators';
import { JokeService } from '../../joke.service';
export var JokeDetailComponent = (function () {
    function JokeDetailComponent(jokeService) {
        this.jokeService = jokeService;
        this.mode = 'Observable';
        this.title = 'jokes are here';
    }
    JokeDetailComponent.prototype.ngOnInit = function () {
        this.getJokes();
    };
    JokeDetailComponent.prototype.getJokes = function () {
        var _this = this;
        this.jokeService.getJokes().subscribe(function (jokeses) { return _this.jokeses = jokeses; });
    };
    JokeDetailComponent.prototype.addJoke = function (description) {
        var _this = this;
        if (!description) {
            return;
        }
        this.jokeService.addJoke(description)
            .subscribe(function (joke) { return _this.jokeses.push(joke); });
    };
    JokeDetailComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'joke-detail',
                    templateUrl: 'joke-detail.component.html',
                    providers: [JokeService]
                },] },
    ];
    /** @nocollapse */
    JokeDetailComponent.ctorParameters = [
        { type: JokeService, },
    ];
    return JokeDetailComponent;
}());
