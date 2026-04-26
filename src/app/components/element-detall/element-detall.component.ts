import { Component, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../serveis/element.service';
import { ElementCataleg } from '../../models/element.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detall',
  standalone: true,
  styleUrls: ['./element-detall.component.scss'],
  templateUrl: './element-detall.component.html',
  imports: [CommonModule] 
})
export class ElementDetallComponent {

  element?: ElementCataleg;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    effect(() => {
      const elements = this.elementService.elements$();
      this.element = elements.find(el => String(el.id) === this.id);
    });
  }

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }
}