import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return object with name===joe', () => {
    const pipe = new SearchPipe();
    const arr = [{ name: 'joe' }, { name: 'kris' }];
    const filters = { name: 'joe' };
    const result = pipe.transform(arr, filters)
    console.log('***', result);
    expect(result).toEqual([arr[0]]);
  })
});
