import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Server } from 'src/app/z-other/models/server';

@Component({
  selector: 'app-main-app-application',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-app-application.component.html',
  styleUrl: './main-app-application.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAppApplicationComponent {
  @Input() server!: Server;

  constructor() {}
}
