import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'http'
})
export class HttpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/^https:/, 'http:');
  }

}
