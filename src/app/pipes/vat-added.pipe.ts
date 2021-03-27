import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return (rate / 100 + 1) + value;
  }
}
