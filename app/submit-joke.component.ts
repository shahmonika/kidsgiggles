
import {Component, Input,OnInit} from '@angular/core';
import {Joke} from './joke';


import './rxjs-operators';

import {JokeService} from './joke.service';

@Component({                                    //creating metadata{
selector: 'submit-joke',
    template: `

<div>
        <h2>submit jokes</h2>
        
    
  
      <!--<h2>{{joke.description}} details!</h2>-->
      <!--<label>id: </label>{{joke._id}}-->
      
      
      
      <label>type ur New joke  <input #newJokeName /></label>
<button (click)="addJoke(newJokeName.value); newJokeName.value=''">Add joke</button>
      
      </div>
    
`
})
export class SubmitJokeComponent{
    @Input()
    joke: Joke;

}