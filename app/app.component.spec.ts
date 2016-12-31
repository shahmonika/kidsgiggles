
import { async, ComponentFixture, TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
//import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { Component }                 from '@angular/core';
import { AppComponent }              from './app.component';

import { RouterLinkStubDirective }   from '../testing';
import { RouterOutletStubComponent } from '../testing';


describe('AppComponent(templateUrl)',()=> {

    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, RouterLinkStubDirective, RouterOutletStubComponent],
            providers: [
                {provide: ComponentFixtureAutoDetect, useValue: true}
            ]
        })
            .compileComponents();
    }));
    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [
                {provide: ComponentFixtureAutoDetect, useValue: true}

            ],

        });
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h1'));

    });
    it('should create component', () =>
        expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        // fixture.detectChanges();
        const h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/kids/i,
            '<h1> should say something about "kids"');
    });
    it('should display original title', () => {
        // fixture.detectChanges();
        el=de.nativeElement;
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        // fixture.detectChanges();
        el=de.nativeElement;
        expect(el.textContent).toContain('kidslaughs');
    });
});

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent & TestModule', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,

                RouterLinkStubDirective, RouterOutletStubComponent
            ]
        })

            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                comp    = fixture.componentInstance;
            });
    }));
    tests();
});



//////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule
import { AppModule }    from './app.module';
import { AppRoutingModule } from './app-routing.module';

describe('Routing & AppModule-with STUb', () => {

    beforeEach( async(() => {

        TestBed.configureTestingModule({
            imports: [ AppModule ]
        })

        // Get rid of app's Router configuration otherwise many failures.
        // Doing so removes Router declarations; add the Router stubs
            .overrideModule(AppModule, {
                remove: {
                    imports: [ AppRoutingModule ]
                },
                add: {
                    declarations: [ RouterLinkStubDirective, RouterOutletStubComponent ]
                }
            })

            .compileComponents()

            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                comp    = fixture.componentInstance;
            });
    }));

    tests();
});

function tests() {
    let links: RouterLinkStubDirective[];
    let linkDes: DebugElement[];

    beforeEach(() => {
        // trigger initial data binding
        fixture.detectChanges();

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(By.directive(RouterLinkStubDirective));

        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });

    it('can instantiate it', () => {
        expect(comp).not.toBeNull();
    });

    it('can get RouterLinks from template', () => {
        expect(links.length).toBe(4, 'should have 4 links');
        expect(links[0].linkParams).toBe('/contact-us', '1st link should go to contact-us');
        expect(links[1].linkParams).toBe('/feedback', '2nd link should go to feedback');
    });

    it('can click feedback link in template', () => {
        const feedbackLinkDe = linkDes[1];
        const feedbackLink = links[1];

        expect(feedbackLink.navigatedTo).toBeNull('link should not have navigated yet');

        feedbackLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(feedbackLink.navigatedTo).toBe('/feedback');
    });
}


