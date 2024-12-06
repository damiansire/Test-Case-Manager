import { computed, Injectable, signal } from '@angular/core';
import { findSpecialCharacters } from '../libs/text-helper';

@Injectable({
  providedIn: 'root',
})
export class CsvHandlerService {
  csvData = signal<string | null>(null);

  possibleDelimiters = computed(() => {
    const csvData = this.csvData();
    if (!csvData) {
      return null;
    }
    const possibleDelimiters = [',', ';', '\t', '|'];
    return possibleDelimiters.filter((d) => csvData.includes(d));
  });

  possibleLineBreaks = computed(() => {
    const csvData = this.csvData();
    if (!csvData) {
      return null;
    }
    const possibleLineBreaks = ['\n', '\r\n', '\r'];
    return possibleLineBreaks.filter((lb) => csvData.includes(lb));
  });

  setCsv(csvData: string) {
    this.csvData.set(csvData);
  }
}
