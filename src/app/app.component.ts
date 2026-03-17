import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from './models/element.model';
import { ELEMENTS } from './mocks/dades-mock';
import { BarraCercaComponent } from "./components/barra-cerca/barra-cerca.component";
import { LlistaElementsComponent } from "./components/llista-elements/llista-elements.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BarraCercaComponent, LlistaElementsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ioc-angular-EAC2-rodrigo';
  elements: Element[] = ELEMENTS;

  onSeleccionar(element: Element) {
    console.log('Element seleccionat:', element);
  }

  onCerca(text: string) {
  console.log('Buscando:', text);
  }

}