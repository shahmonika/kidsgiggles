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
var core_1 = require('@angular/core');
var FeedbackComponent = (function () {
    function FeedbackComponent() {
        this.title = "your feedback is important to us";
        this.msg = '';
        this.submitted = false;
        this.isOn = false;
    }
    FeedbackComponent.prototype.onSubmit = function () {
        this.msg = 'The jokes are posted after the review';
        this.submitted = true;
    };
    FeedbackComponent.prototype.clicked = function () { this.isOn = !this.isOn; };
    Object.defineProperty(FeedbackComponent.prototype, "message", {
        get: function () { return "The light is " + (this.isOn ? 'On' : 'Off'); },
        enumerable: true,
        configurable: true
    });
    FeedbackComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'feedback',
            templateUrl: 'feedback.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map