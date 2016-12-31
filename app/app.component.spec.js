"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var testing_2 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
var testing_3 = require('../testing');
var testing_4 = require('../testing');
describe('AppComponent(templateUrl)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, testing_3.RouterLinkStubDirective, testing_4.RouterOutletStubComponent],
            providers: [
                { provide: testing_2.ComponentFixtureAutoDetect, useValue: true }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            providers: [
                { provide: testing_2.ComponentFixtureAutoDetect, useValue: true }
            ],
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () {
        return expect(comp).toBeDefined();
    });
    it('should have expected <h1> text', function () {
        // fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/kids/i, '<h1> should say something about "kids"');
    });
    it('should display original title', function () {
        // fixture.detectChanges();
        el = de.nativeElement;
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        // fixture.detectChanges();
        el = de.nativeElement;
        expect(el.textContent).toContain('kidslaughs');
    });
});
var comp;
var fixture;
describe('AppComponent & TestModule', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                testing_3.RouterLinkStubDirective, testing_4.RouterOutletStubComponent
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            comp = fixture.componentInstance;
        });
    }));
    tests();
});
//////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule
var app_module_1 = require('./app.module');
var app_routing_module_1 = require('./app-routing.module');
describe('Routing & AppModule-with STUb', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.AppModule]
        })
            .overrideModule(app_module_1.AppModule, {
            remove: {
                imports: [app_routing_module_1.AppRoutingModule]
            },
            add: {
                declarations: [testing_3.RouterLinkStubDirective, testing_4.RouterOutletStubComponent]
            }
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            comp = fixture.componentInstance;
        });
    }));
    tests();
});
function tests() {
    var links;
    var linkDes;
    beforeEach(function () {
        // trigger initial data binding
        fixture.detectChanges();
        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(platform_browser_1.By.directive(testing_3.RouterLinkStubDirective));
        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(function (de) { return de.injector.get(testing_3.RouterLinkStubDirective); });
    });
    it('can instantiate it', function () {
        expect(comp).not.toBeNull();
    });
    it('can get RouterLinks from template', function () {
        expect(links.length).toBe(4, 'should have 4 links');
        expect(links[0].linkParams).toBe('/contact-us', '1st link should go to contact-us');
        expect(links[1].linkParams).toBe('/feedback', '2nd link should go to feedback');
    });
    it('can click feedback link in template', function () {
        var feedbackLinkDe = linkDes[1];
        var feedbackLink = links[1];
        expect(feedbackLink.navigatedTo).toBeNull('link should not have navigated yet');
        feedbackLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(feedbackLink.navigatedTo).toBe('/feedback');
    });
}
//# sourceMappingURL=app.component.spec.js.map