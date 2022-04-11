import { filterNil } from './filter-nil';
import { from, toArray } from 'rxjs';

describe('filterNil', () => {
  it('should filter falsy values', () => {
    from(['1', null, undefined, '2', 4])
      .pipe(filterNil(), toArray())
      .subscribe((value) => {
        expect(value).toEqual(['1', '2', 4]);
      });
  });
});
