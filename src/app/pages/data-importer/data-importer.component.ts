import { Component, inject } from '@angular/core';
import { CsvHandlerService } from '../../services/csv-handler';

@Component({
  selector: 'app-data-importer',
  imports: [],
  templateUrl: './data-importer.component.html',
  styleUrl: './data-importer.component.css'
})
export class DataImporterComponent {
  selectedFile: File | null = null;

  csvHandlerService = inject(CsvHandlerService);
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  
  onUpload(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        const csvData: string = e.target.result;

        const lines = csvData.split('\n');
        const headers = lines[0].split(',');

      };
  
      reader.readAsText(this.selectedFile);
    } else {
      console.log('No file selected');
    }
  }
}
