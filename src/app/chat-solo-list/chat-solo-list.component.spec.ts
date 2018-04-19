import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSoloListComponent } from './chat-solo-list.component';

describe('ChatSoloListComponent', () => {
  let component: ChatSoloListComponent;
  let fixture: ComponentFixture<ChatSoloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSoloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSoloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
