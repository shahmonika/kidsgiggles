import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {JokeDetailComponent} from './components/joke-detail/joke-detail.component';
import {SubmitJokeComponent} from './components/submit-joke/submit-joke.component';
import {FeedbackComponent} from './components/feedback/feedback.component';


import {NgModule} from '@angular/core';
import {RouterModule, Routes, RouterState} from '@angular/router';


const routes:Routes=[
    {
        path:'',
        redirectTo:'joke-detail',
        pathMatch:'full'
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'joke-detail',
        component: JokeDetailComponent
    },
    {
        path:'submit-joke',
        component: SubmitJokeComponent
    },
    {
        path:'feedback',
        component:FeedbackComponent
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}