import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { LocationPickerComponent } from "../location-picker/location-picker.component";
import { SearchPageComponent } from "./search-page.component";

describe("SearchPageComponent", () => {
  let de: DebugElement;
  let comp: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeAll(() => {
    TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() );
  });

  afterAll(() => {
    TestBed.resetTestEnvironment();
  });

  beforeEach(async(() => {
    TestBed
    .configureTestingModule({
      declarations: [ SearchPageComponent, LocationPickerComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("h1"));
  });

  it("should create component", () => expect(comp).toBeDefined() );
});
