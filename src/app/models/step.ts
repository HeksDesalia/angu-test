import { FormBuilder, FormGroup } from '@angular/forms';
import { StepInput } from './stepInput';
import { inject } from '@angular/core';

export class Step {
  private formBuilder = inject(FormBuilder);

  name: string;
  stepInputs: StepInput[];
  formGroup: FormGroup;
  submitted: boolean = false;

  constructor(name: string, stepInput: StepInput[]) {
    this.name = name;
    this.stepInputs = stepInput;
    this.formGroup = this.formBuilder.group({});
    this.stepInputs.forEach((si) =>
      this.formGroup.addControl(si.label, si.formControl)
    );
    console.log(this.formGroup);
  }
}
