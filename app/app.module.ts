
// the entry point to your application


import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';


import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
 //application is a web application that runs in a browser

import { BrowserModule } from '@angular/platform-browser';
//import the root component and add in declaration and bootstrap

import { AppComponent }   from './app.component';

import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import {JokeService} from './joke.service';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {RouterModule } from '@angular/router';
import{SubmitJokeComponent} from './submit-joke/submit-joke.component';
import{FeedbackComponent} from './feedback/feedback.component';
import {AppRoutingModule}from './app-routing.module';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
         ,AppRoutingModule

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
