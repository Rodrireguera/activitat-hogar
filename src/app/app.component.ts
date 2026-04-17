import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalegPage } from "./components/cataleg-page/cataleg-page.component";
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalegPage, FormulariCercaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioc-angular-activitathogar-rodrigo';
}
