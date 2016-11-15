// root component ,controlling the home page view

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    class='relative';
    title = 'Tour of Heroes';
}
