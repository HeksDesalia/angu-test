import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './main-app-header.component.html',
  styleUrl: './main-app-header.component.less',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAppHeaderComponent {
  @Input() title: string = '';
}
