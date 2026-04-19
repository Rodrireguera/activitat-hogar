import { Component } from '@angular/core';
import { PreferitsService } from '../../serveis/preferits.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferits-panel',
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss',
  standalone: true,
  imports: [CommonModule],
  
})
export class PreferitsPanelComponent {

  constructor(public preferitsService: PreferitsService) {}

}
