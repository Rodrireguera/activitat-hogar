import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, of, switchMap, timer } from 'rxjs';
import { ElementService } from '../../serveis/element.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.scss']
})
export class FormulariCercaComponent implements OnInit {

  // Inyección moderna
  private fb = inject(FormBuilder);
  private elementService = inject(ElementService);

  formulari!: FormGroup;

  // Estado visual (para indicador async)
  carregant = false;

  ngOnInit(): void {
    this.formulari = this.fb.group({
      termeCerca: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(50)
        ],
        [this.codiDisponibleValidator()]
      ]
    });

    this.inicialitzarCerca();
  }

  // Búsqueda con debounce
  inicialitzarCerca(): void {
    this.formulari.get('termeCerca')?.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(valor => {
        if (!valor || valor.length < 2) return;

        this.elementService.cercar(valor);
      });
  }

  // Limpiar input
  netejar(): void {
    this.formulari.get('termeCerca')?.setValue('');
  }

  //  Validator asíncrono REAL (con API)
  codiDisponibleValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {

      const terme = control.value;

      if (!terme || terme.length < 2) {
        return of(null);
      }

      this.carregant = true;

      return timer(500).pipe( //  para que puedas hacer la captura
        switchMap(() =>
          this.elementService.comprovarDisponibilitat(terme)
        ),
        map((resultats) => {
          this.carregant = false;

          if (!resultats || resultats.length === 0) {
            return { sensResultats: true };
          }

          return null;
        })
      );
    };
  }
}
