import { Component } from '@angular/core';
export var FeedbackComponent = (function () {
    function FeedbackComponent() {
        this.msg = '';
        this.submitted = false;
    }
    FeedbackComponent.prototype.onSubmit = function () {
        this.msg = 'The jokes are posted after the review';
        this.submitted = true;
    };
    FeedbackComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'feedback',
                    templateUrl: 'feedback.component.html'
                },] },
    ];
    /** @nocollapse */
    FeedbackComponent.ctorParameters = [];
    return FeedbackComponent;
}());
