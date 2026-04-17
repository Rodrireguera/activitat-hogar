import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ElementService } from '../serveis/element.service';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './cataleg-page.component.html',
  styleUrls: ['./cataleg-page.component.scss']
})
export class CatalegPage {

  elementService = inject(ElementService);

  elements = this.elementService.elements$;
  carregant = this.elementService.carregant$;
  error = this.elementService.error$;

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  reintentar() {
    this.elementService.obtenirPopulars();
  }
}