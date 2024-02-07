import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormElementComponent } from './form-element/form-element.component';
import { FORM_TYPE } from '../app.constants';
@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [CommonModule, FormElementComponent],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTestComponent {
  formGroup: FormGroup;
  textInputFc = new FormControl('', Validators.required);
  arrayInputFc = new FormControl([]);
  numberInputFc = new FormControl(1);

  FORM_TYPE = FORM_TYPE;

  options: string[] = ['lets', 'go', 'to', 'sleep'];

  constructor() {
    const fb = new FormBuilder();
    this.formGroup = fb.nonNullable.group({
      textInput: this.textInputFc,
    });
  }
}
