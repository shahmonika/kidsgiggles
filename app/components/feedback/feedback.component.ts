import {Component} from '@angular/core';
import {Joke} from '../../joke';
import {JokeService} from '../../joke.service';
import {FormsModule} from '@angular/forms';
import '../../rxjs-operators';
@Component({
    moduleId: module.id,
    selector: 'feedback',
    templateUrl: 'feedback.component.html'
})
export class FeedbackComponent {
    joke: Joke[];
    msg = '';
    jokeses: Joke[];

    constructor(private jokeService: JokeService) {
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.msg = 'We value your feedback';

    }

    addJoke(description: string) {
        if (!description) {
            return;
        }
        this.jokeService.addJoke(description)
            .subscribe(
                joke => this.jokeses.push(joke));
    }
}
