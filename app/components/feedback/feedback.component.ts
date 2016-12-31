import {Component} from '@angular/core';
import {Joke} from '../../joke';

import {FormsModule} from '@angular/forms';

@Component({
    moduleId:module.id,
    selector:'feedback',
    templateUrl:'feedback.component.html'
})
export class FeedbackComponent{
    title="your feedback is important to us";
    joke:Joke[];
    msg='';
submitted=false;

onSubmit(){
    this.msg='The jokes are posted after the review';
    this.submitted=true;
}

    isOn = false;


        clicked() { this.isOn = !this.isOn; }
        get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`;}
    }
