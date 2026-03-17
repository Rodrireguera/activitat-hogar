import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})

export class BarraCercaComponent {

  @Output() cerca = new EventEmitter<string>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.cerca.emit(input.value);
  } 

}
