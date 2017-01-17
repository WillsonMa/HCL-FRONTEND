import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ResultsPageComponent } from "./results-page.component";

describe("ResultsPageComponent", () => {
  let de: DebugElement;
  let comp: ResultsPageComponent;
  let fixture: ComponentFixture<ResultsPageComponent>;

  beforeAll(() => {
    TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() );
  });

  afterAll(() => {
    TestBed.resetTestEnvironment();
  });

  beforeEach(async(() => {
    TestBed
    .configureTestingModule({
      declarations: [ ResultsPageComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPageComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("h1"));
  });

  it("should create component", () => expect(comp).toBeDefined() );
});
