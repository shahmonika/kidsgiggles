"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var user_service_1 = require('./user.service');
var contact_us_component_1 = require('./contact-us.component');
var testing_2 = require('@angular/core/testing');
describe('contactusComponent', function () {
    var comp;
    var fixture;
    var componentUserService; // the actually injected service
    var userService; // the TestBed injected service
    var de; // the DebugElement with the welcome message
    var el; // the DOM element with the welcome message
    var userServiceStub;
    beforeEach(testing_1.async(function () {
        // stub UserService for test purposes
        userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User' }
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [contact_us_component_1.ContactUsComponent],
            providers: [
                { provide: testing_2.ComponentFixtureAutoDetect, useValue: true },
                { provide: user_service_1.UserService, useValue: userServiceStub }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        // stub UserService for test purposes
        userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User' }
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [contact_us_component_1.ContactUsComponent],
            // providers:    [ UserService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers: [{ provide: user_service_1.UserService, useValue: userServiceStub }]
        });
        fixture = testing_1.TestBed.createComponent(contact_us_component_1.ContactUsComponent);
        comp = fixture.componentInstance;
        // UserService actually injected into the component
        userService = fixture.debugElement.injector.get(user_service_1.UserService);
        componentUserService = userService;
        // UserService from the root injector
        userService = testing_1.TestBed.get(user_service_1.UserService);
        //  get the "welcome" element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(platform_browser_1.By.css('.contact'));
        el = de.nativeElement;
    });
    it('should welcome the user', function () {
        fixture.detectChanges();
        var content = el.textContent;
        expect(content).toContain('contact', '"contact ..."');
        expect(content).toContain('Test User', 'expected name');
    });
    it('should contact -using service from root injector', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain('Test User');
    });
    it('should inject the component\'s UserService instance', testing_1.inject([user_service_1.UserService], function (service) {
        expect(service).toBe(componentUserService);
    }));
    it('TestBed and Component UserService should be the same', function () {
        expect(userService === componentUserService).toBe(true);
    });
    it('stub object and injected UserService should not be the same', function () {
        expect(userServiceStub === userService).toBe(false);
        // Changing the stub object has no effect on the injected service
        userServiceStub.isLoggedIn = false;
        expect(userService.isLoggedIn).toBe(true);
    });
});
//# sourceMappingURL=contact-us.component.spec.js.map