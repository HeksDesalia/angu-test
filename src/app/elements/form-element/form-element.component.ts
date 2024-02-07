import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FORM_TYPE } from 'src/app/app.constants';
import { Observable, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-form-element',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
  ],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormElementComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() formControl!: FormControl;
  @Input() type!: string;
  @Input() submitted!: boolean;
  @Input() options?: string[];

  filteredOptions!: Observable<string[]>;

  FORM_TYPE = FORM_TYPE;

  ngOnInit(): void {
    if (this.options) {
      this.filteredOptions = this.formControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.options) {
      return this.options.filter((option) =>
        option.toLowerCase().includes(filterValue)
      );
    }
    return [];
  }

  getErrorMessage(): string {
    if (this.formControl.hasError('required')) {
      return "C'est requis connard.";
    }

    return '';
  }
}
