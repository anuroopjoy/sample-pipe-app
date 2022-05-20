import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(fname: string, lname: string): string {
    console.log('name pipe called');
    return fname + ' ' + lname;
  }
}
