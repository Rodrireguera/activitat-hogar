 import { computed, Injectable, signal } from '@angular/core';
 import { ElementCataleg} from '../models/element.model';

 @Injectable({
   providedIn: 'root'
 })
export class PreferitsService {
    
    private readonly CLAU_STORAGE = 'preferits-cataleg';
    
    //  Estat intern (signals)
    preferits = signal<ElementCataleg[]>([]);

    // computed
    totalPreferits = computed(() => this.preferits().length);

    constructor() {
        this.carregarPreferits();
    }

    //  Carrega els preferits des del localStorage
    carregarPreferits(){ 
        const data = localStorage.getItem(this.CLAU_STORAGE);
        try{
            if(data){
                const preferits = JSON.parse(data) as ElementCataleg[];
                this.preferits.set(preferits);
            }
        }
        catch(error){
            console.error('Error al afegir preferit:', error);
            this.preferits.set([]);
        }
    }

    //  Guarda els preferits al localStorage
    guardarPreferits(){
        try {
          localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(this.preferits()));  
        } catch (error) {
            console.error('Error al guardar preferits:', error);
        }
    }

    //  Afegeix un element als preferits
    afegirPreferit(element: ElementCataleg): void{
        const actuals = this.preferits();
        if (!actuals.some(e => e.id === element.id)) {
            this.preferits.set([...actuals, element]);
            this.guardarPreferits();
        }
    }

    // eliminar preferit segons id de l'element selectionat
    eliminarPreferit(id: string): void {
        const filtrats = this.preferits().filter(e => e.id !== id);
        this.preferits.set(filtrats);
        // guardar els preferits actualitzats al localStorage
        this.guardarPreferits();
    }

    // comprovar de si un element és preferit segons id de l'element selectionat
    esPreferit(id: string): boolean {
        return this.preferits().some(e => e.id === id);
    }

}