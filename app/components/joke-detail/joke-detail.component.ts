import {Component, OnInit} from '@angular/core';
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
   // is_Liked=false;
    ngOnInit():void{
        this.getJokes();
    }
    title='Jokes are here!!!';
   // joke: Joke[];
    jokeses: Joke[];
    constructor(private jokeService :JokeService){}
    getJokes():void {
        this.jokeService.getJokes().subscribe( jokeses=>this.jokeses =jokeses);
    }
    liked(index: number){
        this.jokeses[index].likesCount = this.jokeses[index].likesCount + 1;
    }
}




