import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
  // pure: false
})
export class NamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('pipe called');
    return value + ' ' + args[0];
  }
}
