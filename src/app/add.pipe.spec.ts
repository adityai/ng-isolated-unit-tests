import { AddPipe } from './add.pipe';

describe('AddPipe', () => {
  it('create an instance', () => {
    const pipe = new AddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display 15 for sum of two numbers 5 and 10', () => {
    let addPipe = new AddPipe();
    let sum = addPipe.transform(5, 10);
    expect(sum).toEqual(15);
  })
});
