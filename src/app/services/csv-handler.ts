import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvHandlerService {
  
  csvData = signal<string | null>(null);
  
  constructor() { }

  setCsv(csvData: string){
    this.csvData.set(csvData)
  }
}
