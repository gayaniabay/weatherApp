import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTemperature'
})
export class ChangeTemperaturePipe implements PipeTransform {

  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {

      if (unit === 'metric') {
        var tempareature = (value - 32) / 1.8;
        return tempareature.toFixed(2);
      }
      if (unit === 'imperial') {
        var tempareature = (value * 32) + 1.8;
        return tempareature.toFixed(2);
      }
    }
    return;
  }
}
