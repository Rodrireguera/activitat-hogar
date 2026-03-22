import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Element } from '../../models/element.model';
import { ELEMENTS } from '../../mocks/dades-mock';  
import { CommonModule } from '@angular/common';
import { MeuUppercasePipe } from '../../pipes/meu-uppercase.pipe';
import { MeuTelefonPipe } from '../../pipes/meu-telefon.pipe';

@Component({
  selector: 'app-buscador-industriales',
  standalone: true,
  imports: [FormsModule, CommonModule, MeuUppercasePipe, MeuTelefonPipe],
  templateUrl: './buscador-industriales.component.html',
  styleUrl: './buscador-industriales.component.scss',
})
export class BuscadorIndustrialesComponent {

  elements: Element[] = ELEMENTS;
  terminoBusqueda: string = '';
  resultatBusqueda: Element[] = [];

  buscarIndustrials(){ 
    this.resultatBusqueda = this.elements.filter(i => 
      i.nom.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
  );
  }
}