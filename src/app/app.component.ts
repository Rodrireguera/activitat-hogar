import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalegPage } from "./cataleg-page/cataleg-page.component";
import { ElementService } from './serveis/element.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalegPage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioc-angular-activitathogar-rodrigo';
}
