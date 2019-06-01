import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContactComponentComponent } from './settings-contact-component.component';

describe('SettingsContactComponentComponent', () => {
  let component: SettingsContactComponentComponent;
  let fixture: ComponentFixture<SettingsContactComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsContactComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
