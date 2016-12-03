// root component ,controlling the home page view
import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.class = 'relative';
        this.title = 'Tour of Heroes';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-app',
                    templateUrl: 'app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
