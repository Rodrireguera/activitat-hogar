import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementApiResponse, ElementCataleg } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';


@Injectable({
  providedIn: 'root'
})
export class ElementService {

  //  Estat intern (signals)
  private elements = signal<ElementCataleg[]>([]);
  private carregant = signal<boolean>(false);
  private error = signal<string | null>(null);

  //  Exposición pública (readonly)
  elements$ = this.elements.asReadonly();
  carregant$ = this.carregant.asReadonly();
  error$ = this.error.asReadonly();

  constructor(private http: HttpClient) {}

  // Obtenir elements populars
  obtenirPopulars(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementApiResponse[]>(
      `${environment.apiUrl}/elements?popular=true`
    ).subscribe({
      next: (dadesApi) => {
        const dades = adaptarElementsApi(dadesApi);
        this.elements.set(dades);
        this.carregant.set(false);
      },
      error: (error) => {
        this.error.set(`Error al carregar els elements populars: ${error.message} (${error.status})`);
        this.carregant.set(false);
      }
    });
  }

  // Buscar elements (per a UI)
  cercar(terme: string): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementApiResponse[]>(
      `${environment.apiUrl}/elements?nom_like=${terme}`
    ).subscribe({
      next: (dadesApi) => {
        const dades = adaptarElementsApi(dadesApi);
        this.elements.set(dades);
        this.carregant.set(false);
      },
      error: (error) => {
        this.error.set(`Error al cercar els elements: ${error.message} (${error.status})`);
        this.carregant.set(false);
      }
    });
  }

  // Metode per a VALIDATOR (sense subscribe)
  comprovarDisponibilitat(terme: string) {
    return this.http.get<ElementApiResponse[]>(
      `${environment.apiUrl}/elements?nom_like=${terme}`
    );
  }

}