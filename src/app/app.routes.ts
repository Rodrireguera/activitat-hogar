// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { CatalegPage } from './components/cataleg-page/cataleg-page.component';
import { ElementDetallComponent } from './components/element-detall/element-detall.component';
import { LoginComponent } from './pages/login/login.component';    
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },
  { path: 'cerca', component: FormulariCercaComponent, title: 'Cerca de productes' },
  { path: 'preferits',
    loadComponent: () =>
      import('./components/preferits-panel/preferits-panel.component')
      .then(m => m.PreferitsPanelComponent),
    canActivate: [authGuard]
  },
  { path: 'cataleg', component: CatalegPage, title: 'Catàleg de productes' },
  { path: 'detall/:id', component: ElementDetallComponent, title: 'Detall del producte' },
  { path: 'login', component: LoginComponent, title: 'Iniciar sessió' },
  { path: '**', redirectTo: 'cataleg' }
];
