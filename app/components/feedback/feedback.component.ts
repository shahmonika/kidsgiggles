import {Component} from '@angular/core';
import {Joke} from '../../joke';


@Component({
    moduleId:module.id,
    selector:'feedback',
    templateUrl:'feedback.component.html'
})
export class FeedbackComponent{
    joke:Joke[];
    msg='';
submitted=false;
onSubmit(){
    this.msg='The jokes are posted after the review';
    this.submitted=true;




}
}
