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
// the entry point to your application
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//application is a web application that runs in a browser
var platform_browser_1 = require("@angular/platform-browser");
//import the root component and add in declaration and bootstrap
var app_component_1 = require("./app.component");
var seed_config_1 = require("./seed.config");
var joke_detail_component_1 = require("./components/joke-detail/joke-detail.component");
var joke_service_1 = require("./joke.service");
var contact_us_component_1 = require("./components/contact-us/contact-us.component");
var submit_joke_component_1 = require("./components/submit-joke/submit-joke.component");
var feedback_component_1 = require("./components/feedback/feedback.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            joke_detail_component_1.JokeDetailComponent,
            contact_us_component_1.ContactUsComponent,
            submit_joke_component_1.SubmitJokeComponent,
            feedback_component_1.FeedbackComponent
        ],
        providers: [joke_service_1.JokeService, seed_config_1.SeedConfig],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map