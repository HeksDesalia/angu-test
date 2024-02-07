import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Route, provideRouter } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'servers',
    loadComponent: () =>
      import('./app/main-app/main-app.component').then(
        (mod) => mod.MainAppComponent
      ),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./app/form-test/form-test.component').then(
        (mod) => mod.FormTestComponent
      ),
  },
  {
    path: 'document-generator',
    loadComponent: () =>
      import('./app/document-generator/document-generator.component').then(
        (mod) => mod.DocumentGeneratorComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(ROUTES)],
});
