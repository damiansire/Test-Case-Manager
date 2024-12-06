import { Component, inject, signal } from '@angular/core';
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
  selectedDelimiter = signal(',');
  selectedLineBreak = signal('\n');
  parsedData: string[][] = [];
  selectedRows: number[] = [];
  newColumnName: string = '';
  headers = [
    'testId',
    'parentId',
    'Test Type',
    'Test Title',
    'Test Priority',
    'Scope',
    'Step',
  ];

  ngOnInit() {
    this.parseCSV()
  }

  parseCSV(): void {
    if (!this.selectedDelimiter() || !this.selectedLineBreak || !this.fileContent)
      return;

    const rows = this.fileContent.split(this.selectedLineBreak());
    this.parsedData = rows.map((row) => row.split(this.selectedDelimiter()));
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
