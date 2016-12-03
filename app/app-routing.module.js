import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import { SubmitJokeComponent } from './components/submit-joke/submit-joke.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'joke-detail',
        pathMatch: 'full'
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
        path: 'submit-joke',
        component: SubmitJokeComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = [];
    return AppRoutingModule;
}());
