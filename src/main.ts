// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideRouter([]),           // no routes for now
    importProvidersFrom([])      // add any NgModules if needed
  ]
}).catch(err => console.error(err));
