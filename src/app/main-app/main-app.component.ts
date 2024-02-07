import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainAppHeaderComponent } from './main-app-header';
import { MainAppAppsContainerComponent } from './main-app-apps-container';


@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [
    CommonModule,
    MainAppHeaderComponent,
    MainAppAppsContainerComponent
  ],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAppComponent {
  title: string = 'Absolument pas l\'ESPI';
}
