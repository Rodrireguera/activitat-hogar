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
  elementsFiltrats = [...this.elements];

  onSeleccionar(element: Element) {
    console.log('Element seleccionat:', element);
  }

  onCerca(texto: string): void {
    const valor = texto.toLowerCase();

    if (!valor) {
      this.elementsFiltrats = [...this.elements];
    return;
    }

    this.elementsFiltrats = this.elements.filter(el =>
      el.nom.toLowerCase().includes(valor) ||
      el.descripcio.toLowerCase().includes(valor)
    );
  }


}