
import {Component, OnInit, Input} from '@angular/core';
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
    is_Liked=false;
    ngOnInit():void{
        this.getJokes();
    }
    title='jokes are here';
    // jokeses = Jokeses;                 //jokeses exposes for binding
    // selectedHero: Joke ;

    // onSelect(joke: Joke): void {
    //     this.selectedHero = joke ;
    // }

    joke: Joke[];
    jokeses: Joke[];


    constructor(private jokeService :JokeService){}

    getJokes():void {
        this.jokeService.getJokes().subscribe( jokeses=>this.jokeses =jokeses);
    }

    liked(index: number){
        this.jokeses[index].likesCount = this.jokeses[index].likesCount + 1;
    }




// like(joke_id:string){
//
//  var id1=this.count++;
//
//     // if(('#cnt')+joke_id)
//         return id1;
//
//    //
//
//   //if(('#cnt')+joke_id)==joke_id)
//   //  return this.count++;
// }

    // addJoke (description: string) {
    //     if (!description) { return; }
    //     this.jokeService.addJoke(description)
    //         .subscribe(
    //             joke => this.jokeses.push(joke));
    //
    // }
}




