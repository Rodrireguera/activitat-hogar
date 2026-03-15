import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from './models/element.model';
import { ELEMENTS } from './mocks/dades-mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ioc-angular-EAC2-rodrigo';
  elements: Element[] = ELEMENTS;
}