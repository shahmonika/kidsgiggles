// the entry point to your application
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import { JokeService } from './joke.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SubmitJokeComponent } from './components/submit-joke/submit-joke.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AppRoutingModule } from './app-routing.module';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        JsonpModule,
                        AppRoutingModule
                    ],
                    declarations: [
                        AppComponent,
                        JokeDetailComponent,
                        ContactUsComponent,
                        SubmitJokeComponent, FeedbackComponent
                    ],
                    providers: [JokeService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
