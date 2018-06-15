import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent: any): any {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
