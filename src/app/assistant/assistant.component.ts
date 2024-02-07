import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { FormElementComponent } from '../form-test/form-element/form-element.component';
import { FORM_TYPE } from 'src/app/app.constants';
import { Step } from '../models/step';
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

  nextStep(step: Step) {
    step.submitted = true;
    step.stepInputs.forEach((si) => si.formControl.markAsTouched());
    if (step.submitted && step.formGroup.valid) {
      this.stepper.next();
    }
  }
}
