// root component ,controlling the home page view

import { Component } from '@angular/core';
// import{ ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'

})
export class AppComponent {
    class='relative';
    title = 'kidslaughs';
}
