import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Joke} from './joke';
import {Observable} from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
import {SeedConfig} from "./seed.config";

@Injectable()
export class JokeService {
    constructor(private http: Http, private seedConfig :SeedConfig) {}

    private  jokesUrl=this.seedConfig.api;
    private  routee='/jokes';
    private routee2='/feedbacks/create';
    private   jokesUrl1= this.jokesUrl + this.routee;
    private jokesUrlfeedback = this.jokesUrl+this.routee2;
    // constructor(private http: Http, private seedConfig :SeedConfig) {
    // }
    getJokes(): Observable<Joke[]> {
        return this.http.get(this.jokesUrl1).map(this.extractData);
    }
    addJoke(description: string): Observable<Joke> {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.jokesUrlfeedback,JSON.stringify(description), options)
            .map(this.extractData);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.jokes || {};
    }
}
