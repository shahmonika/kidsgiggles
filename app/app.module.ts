
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
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            {
                path: 'contact-us',
                component: ContactUsComponent
            },
            {
                path: 'joke-detail',
                component: JokeDetailComponent
            }
            ])
        ],
    declarations: [
        AppComponent ,
        JokeDetailComponent,
        ContactUsComponent
    ],

    providers:[JokeService],
    bootstrap: [ AppComponent ]
})


export class AppModule { }
