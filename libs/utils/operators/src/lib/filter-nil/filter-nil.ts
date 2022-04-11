import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterNil<T>() {
  return (source$: Observable<T>) => source$.pipe(filter(Boolean));
}
