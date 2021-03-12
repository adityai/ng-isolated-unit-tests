import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message when add is called', () => {
    service.add("Testing");
    expect(service.messages).toHaveSize(1);
  });

  it('should get all messages when getAll is called', () => {
    service.add("First test");
    service.add("Second test");
    let messages = service.getAll();
    console.log(messages);
    expect(messages).toEqual(["First test", "Second test"]);
  });
});
