import {Component} from '@angular/core';
import '../../rxjs-operators';
import {Joke} from '../../joke';
import {JokeService} from '../../joke.service';
@Component({
    moduleId: module.id,
    selector: 'submit-joke',
    templateUrl: 'submit-joke.component.html'
})
export class SubmitJokeComponent {
    joke: Joke[];
    jokeses: Joke[];

    constructor(private jokeService: JokeService) {
    }

    addJoke(description: string) {
        if (!description) {
            return;
        }
        this.jokeService.addJoke(description).subscribe(joke=>this.jokeses.push(joke));
    }
}
