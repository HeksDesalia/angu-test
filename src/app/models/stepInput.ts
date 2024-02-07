import { FormControl } from '@angular/forms';

export class StepInput {
  label: string;
  type: string;
  placeholder: string;
  formControl: FormControl;
  options?: string[];

  constructor(
    label: string,
    type: string,
    placeholder: string,
    formControl: FormControl,
    options?: string[]
  ) {
    this.label = label;
    this.type = type;
    this.placeholder = placeholder;
    this.formControl = formControl;
    if (options) {
      this.options = options;
    }
  }
}
