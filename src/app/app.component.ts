import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-activitathogar-rodrigo';

  constructor() {
    console.log('Activitat Hogar iniciada correctament - Rodrigo Fernández de la Reguera Villar');
  }

}

