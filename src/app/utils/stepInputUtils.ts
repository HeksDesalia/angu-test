import { FormBuilder, Validators } from '@angular/forms';
import { FORM_TYPE } from '../app.constants';
import { StepInput } from '../models/stepInput';
import { inject } from '@angular/core';

export class StepInputUtils {
  constructor() {}

  private static generateStepInput(
    label: string,
    type: string,
    placeholder: string,
    defaultValue: string,
    options?: string[]
  ): StepInput {
    const formBuilder = new FormBuilder();
    let stepInput = new StepInput(
      label,
      type,
      placeholder,
      formBuilder.control(defaultValue, Validators.required)
    );

    if (options) {
      stepInput.options = options;
    }

    return stepInput;
  }

  static generateTextStepInput(
    label: string,
    placeholder: string,
    defaultValue: string
  ) {
    return this.generateStepInput(
      label,
      FORM_TYPE.TEXT,
      placeholder,
      defaultValue
    );
  }

  static generateNumberStepInput(
    label: string,
    placeholder: string,
    defaultValue: string
  ) {
    return this.generateStepInput(
      label,
      FORM_TYPE.NUMBER,
      placeholder,
      defaultValue
    );
  }

  static generateAutoCompleteStepInput(
    label: string,
    placeholder: string,
    defaultValue: string,
    options: string[]
  ) {
    return this.generateStepInput(
      label,
      FORM_TYPE.AUTOCOMPLETE,
      placeholder,
      defaultValue,
      options
    );
  }
}
