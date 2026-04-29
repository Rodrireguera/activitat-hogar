import { Component, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../serveis/element.service';
import { ElementCataleg } from '../../models/element.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-detall',
  standalone: true,
  styleUrls: ['./element-detall.component.scss'],
  templateUrl: './element-detall.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ElementDetallComponent {

  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  element = computed(() => {
    const elements = this.elementService.elements$();
    return elements.find(el => String(el.id) === this.id);
  });

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }
}