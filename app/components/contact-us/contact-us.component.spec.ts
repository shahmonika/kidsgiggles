import { ComponentFixture, inject, TestBed,async } from '@angular/core/testing';
import { By }                                from '@angular/platform-browser';
import { DebugElement }                      from '@angular/core';


import { UserService }      from './user.service';
import { ContactUsComponent } from './contact-us.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('contactusComponent', () => {

    let comp: ContactUsComponent;
    let fixture: ComponentFixture<ContactUsComponent>;

    let componentUserService: UserService; // the actually injected service

    let userService: UserService; // the TestBed injected service

    let de: DebugElement;  // the DebugElement with the welcome message

    let el: HTMLElement; // the DOM element with the welcome message

    let userServiceStub: {
        isLoggedIn: boolean;
        user: { name: string}
    };

    beforeEach(async(() => {
        // stub UserService for test purposes
        userServiceStub = {
            isLoggedIn: true,
            user: {name: 'Test User'}
        };
        TestBed.configureTestingModule({
            declarations: [ContactUsComponent],
            providers: [
                {provide: ComponentFixtureAutoDetect, useValue: true},
                {provide: UserService, useValue: userServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        // stub UserService for test purposes
        userServiceStub = {
            isLoggedIn: true,
            user: {name: 'Test User'}
        };

        TestBed.configureTestingModule({
            declarations: [ContactUsComponent],
            // providers:    [ UserService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers: [{provide: UserService, useValue: userServiceStub}]
        })



        fixture = TestBed.createComponent(ContactUsComponent);
        comp = fixture.componentInstance;


        // UserService actually injected into the component
        userService = fixture.debugElement.injector.get(UserService);
        componentUserService = userService;


        // UserService from the root injector
        userService = TestBed.get(UserService);

        //  get the "welcome" element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(By.css('.contact'));
        el = de.nativeElement;
    });

    it('should welcome the user', () => {
        fixture.detectChanges();
        const content = el.textContent;
        expect(content).toContain('contact', '"contact ..."');
        expect(content).toContain('Test User', 'expected name');
    });

    it('should contact -using service from root injector', () => {

        fixture.detectChanges();
        expect(el.textContent).toContain('Test User');
    });
    it('should inject the component\'s UserService instance',
        inject([UserService], (service: UserService) => {
            expect(service).toBe(componentUserService);
        }));

    it('TestBed and Component UserService should be the same', () => {
        expect(userService === componentUserService).toBe(true);
    });

    it('stub object and injected UserService should not be the same', () => {
        expect(userServiceStub === userService).toBe(false);

        // Changing the stub object has no effect on the injected service
        userServiceStub.isLoggedIn = false;
        expect(userService.isLoggedIn).toBe(true);
    });

});




