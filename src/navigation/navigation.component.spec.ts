import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { NavigationComponent } from "./navigation.component";

describe("NavigationComponent", () => {
  let de: DebugElement;
  let comp: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeAll(() => {
    TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() );
  });

  afterAll(() => {
    TestBed.resetTestEnvironment();
  });

  beforeEach(async(() => {
    TestBed
    .configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("h1"));
  });

  it("should create component", () => expect(comp).toBeDefined() );
});
