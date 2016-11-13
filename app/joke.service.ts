
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import {Joke} from './joke';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class JokeService{
     private jokesUrl='app/joke.json'; //url to json
    //  private jokesUrl='http://kejokesapi.herokuapp.com/jokes';

    constructor(private http:Http){}

    getJokes():Observable<Joke[]>
    {
        return this.http.get(this.jokesUrl).map(this.extractData);
    }




    addJoke(description:string):Observable<Joke>{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.jokesUrl, JSON.stringify(description) , options)
            .map(this.extractData);



    }
    private extractData(res: Response){
        let body=res.json();
        return body.jokes || { };
    }

}
