import { Observable, of } from 'rxjs';
import { ServerService } from '../../services/server.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Server } from 'src/app/models/server';
import { MainAppApplicationComponent } from '../main-app-application/main-app-application.component';

@Component({
  selector: 'app-main-app-apps-container',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    MainAppApplicationComponent
  ],
  templateUrl: './main-app-apps-container.component.html',
  styleUrl: './main-app-apps-container.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAppAppsContainerComponent implements OnInit{ 
  // Attributs
  servers: Observable<Server[]>;

  // Services
  serverService: ServerService =  inject(ServerService);

  constructor(){
    this.servers = of([]);
  }

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
  }
}
