
// the entry point to your application


import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';


import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
 //application is a web application that runs in a browser

import { BrowserModule } from '@angular/platform-browser';
//import the root component and add in declaration and bootstrap

import { AppComponent }   from './app.component';

import { JokeDetailComponent } from './joke-detail.component';
import {JokeService} from './joke.service';
import {ContactUsComponent} from './contact-us.component';
import {RouterModule } from '@angular/router';
import{SubmitJokeComponent} from './submit-joke.component';
import{FeedbackComponent} from './feedback.component';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
         ,
         RouterModule.forRoot([
             {
                 path:'',
                 redirectTo:'/joke-detail',
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
             ])
        ],
    declarations: [
        AppComponent ,
        JokeDetailComponent,
        ContactUsComponent,
        SubmitJokeComponent,FeedbackComponent
    ],

    providers:[JokeService],
    bootstrap:[AppComponent]

})


export class AppModule { }
