"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var contact_us_component_1 = require('./components/contact-us/contact-us.component');
var joke_detail_component_1 = require('./components/joke-detail/joke-detail.component');
var submit_joke_component_1 = require('./components/submit-joke/submit-joke.component');
var feedback_component_1 = require('./components/feedback/feedback.component');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var routes = [
    {
        path: '',
        redirectTo: 'joke-detail',
        pathMatch: 'full'
    },
    {
        path: 'contact-us',
        component: contact_us_component_1.ContactUsComponent
    },
    {
        path: 'joke-detail',
        component: joke_detail_component_1.JokeDetailComponent
    },
    {
        path: 'submit-joke',
        component: submit_joke_component_1.SubmitJokeComponent
    },
    {
        path: 'feedback',
        component: feedback_component_1.FeedbackComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map