import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { FormElementComponent } from '../elements/form-element/form-element.component';
import { FORM_TYPE } from 'src/app/app.constants';
import { Step } from '../models/step';
import { TableElementComponent } from '../elements/table-element/table-element.component';
import { TableColumn } from '../models/tableColumns';
@Component({
  selector: 'app-assistant',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormElementComponent,
    TableElementComponent,
  ],
  templateUrl: './assistant.component.html',
  styleUrl: './assistant.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantComponent {
  @Input() steps!: Step[];
  @Input() isLinear!: boolean;

  @ViewChild('stepper') stepper!: MatStepper;

  formControlTest = new FormControl<string>('');

  FORM_TYPE = FORM_TYPE;

  columns: TableColumn[] = [
    {
      code: 'col1',
      label: 'Col1',
    },
    {
      code: 'col2',
      label: 'Col2',
    },
    {
      code: 'col3',
      label: 'Col3',
    },
    {
      code: 'col4',
      label: 'Col4',
    },
  ];

  columnsData: any[] = [
    { col1: 'Test 1', col2: 'Test 2' },
    { col1: 'Test 1', col2: 'Test 2', col3: 'Test 3' },
    { col1: 'Test 1', col2: 'Test 2', col4: 'Test 4' },
    { col1: 'Test 1', col2: 'Test 2', col3: 'Test 3', col4: 'Test 4' },
  ];

  nextStep(step: Step) {
    step.submitted = true;
    step.stepInputs.forEach((si) => si.formControl.markAsTouched());
    if (step.submitted && step.formGroup.valid) {
      this.stepper.next();
    }
  }
}
