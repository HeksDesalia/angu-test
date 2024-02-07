import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AssistantComponent } from '../assistant/assistant.component';
import { Step } from '../models/step';
import { StepInput } from '../models/stepInput';
import { StepInputUtils } from '../utils/stepInputUtils';

@Component({
  selector: 'app-document-generator',
  standalone: true,
  imports: [CommonModule, AssistantComponent],
  template: `<app-assistant [steps]="steps" [isLinear]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentGeneratorComponent implements OnInit {
  steps: Step[];

  constructor() {
    this.steps = this.buildTestSteps();
  }

  ngOnInit(): void {}

  buildTestSteps(): Step[] {
    let stepInputs: StepInput[] = [];
    stepInputs.push(
      StepInputUtils.generateTextStepInput('test', 'placeholder', '')
    );
    stepInputs.push(
      StepInputUtils.generateTextStepInput('test2', 'placeholder', '')
    );
    stepInputs.push(
      StepInputUtils.generateNumberStepInput('test3', 'placeholder', '')
    );
    stepInputs.push(
      StepInputUtils.generateAutoCompleteStepInput('test4', 'placeholder', '', [
        'hey',
        'ho',
        'du',
        'bateau',
      ])
    );
    stepInputs.push(
      StepInputUtils.generateTextStepInput('test5', 'placeholder', '')
    );
    stepInputs.push(
      StepInputUtils.generateTextStepInput('test6', 'placeholder', '')
    );
    const step = new Step('stepName 1', stepInputs);
    const step2 = new Step('stepName 2', stepInputs);

    return [step, step2];
  }
}
