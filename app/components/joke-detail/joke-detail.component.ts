
import { Component ,OnInit} from '@angular/core';
import '../../rxjs-operators';

import {Joke} from '../../joke';
import {JokeService} from '../../joke.service';
@Component({
    moduleId: module.id,                  // relative path
    selector: 'joke-detail',
    templateUrl: 'joke-detail.component.html',
    providers:[JokeService]
})
export class JokeDetailComponent implements OnInit{
    mode='Observable';
    ngOnInit():void{
        this.getJokes();
    }
    title='jokes are here';
    // jokeses = Jokeses;                 //jokeses exposes for binding
    // selectedHero: Joke ;

    // onSelect(joke: Joke): void {
    //     this.selectedHero = joke ;
    // }
    joke:Joke[];
    jokeses: Joke[];
    constructor(private jokeService :JokeService){}
    getJokes():void {
        this.jokeService.getJokes().subscribe( jokeses=>this.jokeses =jokeses);
    }
    addJoke (description: string) {
        if (!description) { return; }
        this.jokeService.addJoke(description)
            .subscribe(
                joke => this.jokeses.push(joke));

    }
}




