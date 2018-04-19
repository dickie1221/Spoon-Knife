import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSettingsComponent } from './option-settings.component';

describe('OptionSettingsComponent', () => {
  let component: OptionSettingsComponent;
  let fixture: ComponentFixture<OptionSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
