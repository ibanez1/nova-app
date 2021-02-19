import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform{
    transform(n: number, extension: string = ' puntos'): any {
        return (n * 100) + extension;
    }
}
