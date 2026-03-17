import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { ELEMENTS } from '../../mocks/dades-mock';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  //El component fill, que és el que mostrarà cada element, rep l'element a mostrar des del component pare
  @Input() element!: Element;

  //Quan el component fill em digui que s'ha fet clic a l'element, jo el rebré aquí 
  // i podré fer el que vulgui amb ell (mostrar-lo per consola, enviar-lo a un altre component, etc.)
  @Output() clic = new EventEmitter<Element>();

  seleccionar(){
    this.clic.emit(this.element);
  }

}
