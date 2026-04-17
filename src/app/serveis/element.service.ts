import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementCataleg } from '../models/element.model';


@Injectable({
  providedIn: 'root'
})
export class ElementService {

  // 🔹 Estado interno (signals)
  private elements = signal<ElementCataleg[]>([]);
  private carregant = signal<boolean>(false);
  private error = signal<string | null>(null);

  // 🔹 Exposición pública (readonly)
  elements$ = this.elements.asReadonly();
  carregant$ = this.carregant.asReadonly();
  error$ = this.error.asReadonly();

  constructor(private http: HttpClient) {}

  // Obtener elementos populares
  obtenirPopulars(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementCataleg[]>(
      `${environment.apiUrl}/elements?popular=true`
    ).subscribe({
      next: (dades) => {
        this.elements.set(dades);
        this.carregant.set(false);
      },
      error: (error) => {
        this.error.set(`Error al carregar els elements populars: ${error.message} (${error.status})`);
        this.carregant.set(false);
      }
    });
  }

  // Buscar elementos (para UI)
  cercar(terme: string): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementCataleg[]>(
      `${environment.apiUrl}/elements?nom_like=${terme}`
    ).subscribe({
      next: (dades) => {
        this.elements.set(dades);
        this.carregant.set(false);
      },
      error: (error) => {
        this.error.set(`Error al cercar els elements: ${error.message} (${error.status})`);
        this.carregant.set(false);
      }
    });
  }

}