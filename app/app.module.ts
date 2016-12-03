
// the entry point to your application


import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
//application is a web application that runs in a browser

import {RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
 //application is a web application that runs in a browser

import { BrowserModule } from '@angular/platform-browser';
//import the root component and add in declaration and bootstrap

import { AppComponent }   from './app.component';

import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import {JokeService} from './joke.service';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

import{SubmitJokeComponent} from './components/submit-joke/submit-joke.component';
import{FeedbackComponent} from './components/feedback/feedback.component';
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
