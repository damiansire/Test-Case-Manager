import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { findSpecialCharacters } from '../libs/text-helper';
import { LocalStorageService } from './local-storage.service';
import { DataStorageSyncService } from './data-storage-sync.service';

@Injectable({
  providedIn: 'root',
})
export class CsvHandlerService {

  dataStorageSyncService = inject(DataStorageSyncService);

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

  constructor() {
    this.loadFromLocalStorage()

    effect(() => {
      const csvData = this.csvData();
      if (csvData !== null) { 
        this.dataStorageSyncService.saveCurrentFile(csvData);
      }
    });
  }


  loadFromLocalStorage(){
    const currentFile = this.dataStorageSyncService.getCurrentFile();
    debugger
    if(currentFile){
      this.csvData.set(currentFile);
    }
  }
}
