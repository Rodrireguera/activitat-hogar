import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrls: ['./preferits-panel.component.scss']
})
  export class PreferitsPanelComponent {

    formularis: { [id: string]: FormGroup } = {};

    constructor(
      public preferitsService: PreferitsService,
      private fb: FormBuilder
    )  {}

  ngOnInit() {
    this.preferitsService.preferits().forEach(e => {
      this.getNotesArray(e.id);
    });
  }   

  getNotesArray(id: string): FormArray {

  // Si no existeix el formulari per a aquest element, el creem
    if (!this.formularis[id]) {

    const element = this.preferitsService.preferits()
      .find(e => e.id === id);

    this.formularis[id] = this.fb.group({
      notes: this.fb.array(
        (element?.notes ?? []).map(nota =>
          this.fb.control(nota, [
            Validators.required,
            Validators.minLength(3)
          ])
        )
      )
    });
    }

    return this.formularis[id].get('notes') as FormArray;
  }

  afegirNota(id: string) {
      this.getNotesArray(id).push(
        this.fb.control('', [
          Validators.required,
          Validators.minLength(3)
      ])
    );
  }

  eliminarNota(id: string, index: number) {
      this.getNotesArray(id).removeAt(index);
      this.actualitzarNotes(id);
  }

  actualitzarNotes(id: string) {
      const notes = this.getNotesArray(id).value;

      const actuals = this.preferitsService.preferits();
      const actualitzat = actuals.map(e =>
        e.id === id ? { ...e, notes } : e
      );

      this.preferitsService.preferits.set(actualitzat);
      this.preferitsService.guardarPreferits();
  }
}