import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AssistantComponent } from '../assistant/assistant.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Step } from '../models/step';
import { StepInput } from '../models/stepInput';
import { FORM_TYPE } from '../app.constants';

@Component({
  selector: 'app-document-generator',
  standalone: true,
  imports: [CommonModule, AssistantComponent],
  templateUrl: './document-generator.component.html',
  styleUrl: './document-generator.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentGeneratorComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  steps: Step[];

  constructor() {
    this.steps = this.buildTestSteps();
  }

  ngOnInit(): void {}

  buildTestSteps(): Step[] {
    let stepInputs: StepInput[] = [];
    stepInputs.push(
      this.generateMockStepInput('test', FORM_TYPE.TEXT, 'placeholder')
    );
    stepInputs.push(
      this.generateMockStepInput('test2', FORM_TYPE.TEXT, 'placeholder')
    );
    stepInputs.push(
      this.generateMockStepInput('test3', FORM_TYPE.NUMBER, 'placeholder')
    );
    stepInputs.push(
      this.generateMockStepInput(
        'test4',
        FORM_TYPE.AUTOCOMPLETE,
        'placeholder',
        ['hey', 'ho', 'du', 'bateau']
      )
    );
    stepInputs.push(
      this.generateMockStepInput('test5', FORM_TYPE.TEXT, 'placeholder')
    );
    stepInputs.push(
      this.generateMockStepInput('test6', FORM_TYPE.TEXT, 'placeholder')
    );
    const step = new Step('stepName', stepInputs);

    return [step, step];
  }

  generateMockStepInput(
    label: string,
    type: string,
    placeholder: string,
    options?: string[]
  ): StepInput {
    let stepInput = new StepInput(
      label,
      type,
      placeholder,
      this.formBuilder.control('', Validators.required)
    );

    if (options) {
      stepInput.options = options;
    }

    return stepInput;
  }
}
