
import {Component, Input,OnInit} from '@angular/core';
import {Joke} from './joke';


import './rxjs-operators';

import {JokeService} from './joke.service';

@Component({                                    //creating metadata{
selector: 'my-joke-detail',
    template: `

<div>
        <h2>submit jokes</h2>
        
    
    <div >
      <!--<h2>{{joke.description}} details!</h2>-->
      <!--<label>id: </label>{{joke._id}}-->
      
      
      
      <label>New joke name: <input #newJokeName /></label>
<button (click)="addJoke(newJokeName.value); newJokeName.value=''">Add joke</button>
      
      </div>
    
`
})
export class JokeDetailComponent{
    @Input()
    joke: Joke;

}