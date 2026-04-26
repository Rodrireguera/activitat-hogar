
import { Component, Input } from '@angular/core';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../serveis/preferits.service';
import { CommonModule } from '@angular/common';
import { ElementDetallComponent } from '../element-detall/element-detall.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss'],
  standalone: true, 
  imports: [CommonModule, ElementDetallComponent, RouterLink]
})
export class ElementCardComponent {

  @Input() element!: ElementCataleg;

  constructor(public preferitsService: PreferitsService) {}

  togglePreferit(): void {

    if (this.preferitsService.esPreferit(this.element.id)) {
      this.preferitsService.eliminarPreferit(this.element.id);
    } else {
      this.preferitsService.afegirPreferit(this.element);
    }
  }
}