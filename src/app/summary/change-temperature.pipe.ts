import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeTemperature'
})
export class ChangeTemperaturePipe implements PipeTransform {

  transform(value: number, unitOfMeasure: any) {
    console.log(value,unitOfMeasure)
    if (value && !isNaN(value)) {

      if (unitOfMeasure == "metric") {
        return value;
      }
      else if (unitOfMeasure == 'imperial') {
        var tempareature = (value * 9 / 5) + 32
        return tempareature.toFixed(2);
      }
    }
    return;
  }
  
}
