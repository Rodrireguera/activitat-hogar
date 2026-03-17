import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ELEMENTS } from '../../mocks/dades-mock';
import { Element } from '../../models/element.model';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from "../targeta-element/targeta-element.component";

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  
  //Pare, donam la llista d'elements al component fill, que és el que els mostrarà
  @Input() elements: Element[] = ELEMENTS;

  //Quan el component fill em digui que s'ha seleccionat un element, jo el rebré aquí 
  // i podré fer el que vulgui amb ell (mostrar-lo per consola, enviar-lo a un altre component, etc.)
  @Output() seleccionar = new EventEmitter<Element>();

  onSeleccionar(element: Element) {
    this.seleccionar.emit(element);
  }

}
