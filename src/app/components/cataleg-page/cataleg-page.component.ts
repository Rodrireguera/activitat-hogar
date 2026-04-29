import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ElementService } from '../../serveis/element.service';
import { ElementCardComponent } from '../element-card/element-card.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, ElementCardComponent, ScrollingModule], 
  templateUrl: './cataleg-page.component.html',
  styleUrls: ['./cataleg-page.component.scss']
})
export class CatalegPage {

  elementService = inject(ElementService);

  // Observables
  elements = this.elementService.elements$;
  carregant = this.elementService.carregant$;
  error = this.elementService.error$;

  trackById(index: number, element: any) {
    return element.id;
  }

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  reintentar() {
    this.elementService.obtenirPopulars();
  }
}