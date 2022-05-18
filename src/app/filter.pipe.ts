import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], len: number): unknown {
    console.log('filter pipe called');
    return value.filter((name) => name.length === len);
  }
}
