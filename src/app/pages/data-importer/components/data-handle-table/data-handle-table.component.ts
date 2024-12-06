import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CsvHandlerService } from '../../../../services/csv-handler';

@Component({
  selector: 'app-data-handle-table',
  imports: [FormsModule],
  templateUrl: './data-handle-table.component.html',
  styleUrl: './data-handle-table.component.css',
})
export class DataHandleTableComponent {
  csvHandlerService = inject(CsvHandlerService);

  fileContent = this.csvHandlerService.csvData();
  possibleDelimiters = this.csvHandlerService.possibleDelimiters();
  possibleLineBreaks = this.csvHandlerService.possibleLineBreaks();
  selectedDelimiter: string = '';
  selectedLineBreak: string = '';
  parsedData: string[][] = [];
  selectedRows: number[] = [];
  newColumnName: string = '';

  parseCSV(): void {
    if (!this.selectedDelimiter || !this.selectedLineBreak || !this.fileContent ) return;

    const rows = this.fileContent.split(this.selectedLineBreak);
    this.parsedData = rows.map((row) => row.split(this.selectedDelimiter));
    this.selectedRows = [];
  }

  toggleRowSelection(rowIndex: number): void {
    const index = this.selectedRows.indexOf(rowIndex);
    if (index === -1) {
      this.selectedRows.push(rowIndex);
    } else {
      this.selectedRows.splice(index, 1);
    }
  }

}
