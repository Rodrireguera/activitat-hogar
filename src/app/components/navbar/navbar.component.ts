import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, Usuari } from '../../serveis/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  usuari$: Observable<Usuari | null>; 

  constructor(public authService: AuthService) {
    this.usuari$ = this.authService.obtenirUsuari();
  }

  logout() {
    this.authService.logout();
  }
}