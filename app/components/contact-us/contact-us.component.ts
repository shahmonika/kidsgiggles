import { Component, OnInit } from '@angular/core';
import { UserService }       from './user.service';
@Component({
    moduleId: module.id,
    selector:'contact-us',
    templateUrl:'contact-us.component.html'

})
export class ContactUsComponent  implements OnInit {

    contact = '-- not initialized yet --';

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.contact = this.userService.isLoggedIn ?
        'contact, ' + this.userService.user.name :
            'Please log in.';
    }
}


