import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableColumn } from 'src/app/models/tableColumns';

@Component({
  selector: 'app-table-element',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table-element.component.html',
  styleUrl: './table-element.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableElementComponent {
  @Input() tableColumns!: TableColumn[];
  @Input() tableData!: any[];

  getTableColumnCodes() {
    return this.tableColumns.map((tc) => tc.code);
  }
}
