import {Injectable} from '@angular/core';
@Injectable()
export class SeedConfig{
 api:string;
    constructor(){
        this.api="http://kejokesapi.herokuapp.com";
    }
}

