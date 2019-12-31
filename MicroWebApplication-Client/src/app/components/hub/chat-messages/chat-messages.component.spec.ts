import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessages } from './chat-messages.component';

describe('ChatMessagesComponent', () => {
  let component: ChatMessages;
  let fixture: ComponentFixture<ChatMessages>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessages ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
