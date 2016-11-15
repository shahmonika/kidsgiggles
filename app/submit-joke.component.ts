
import { Component ,OnInit} from '@angular/core';
import './rxjs-operators';
import {Joke} from './joke';
import {JokeService} from './joke.service';





@Component({

    moduleId: module.id,                     //creating metadata{
selector: 'submit-joke',
    templateUrl: 'submit-joke.component.html'

})
export class SubmitJokeComponent{
    // @Input()
    // joke: Joke;

}