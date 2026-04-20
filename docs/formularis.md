# Formularis Reactius - FormulariCerca

## Validators síncrons

S'han implementat els següents validators síncrons sobre el camp `termeCerca`:

- `minLength(2)`: obliga a introduir almenys 2 caràcters
- `maxLength(50)`: limita la longitud màxima a 50 caràcters

Els errors només es mostren quan el camp ha estat marcat com a `touched`.

## Validator asíncron

S'ha implementat un validator asíncron anomenat `codiDisponibleValidator`.

Funcionament:
- Simula una crida a API amb un retard de 500 ms (`timer`)
- Si el valor és no es troba al servidor JSON de l'API, retorna `{ sensResultats: true }`
- En qualsevol altre cas, retorna `null`

Durant la validació, es mostra un indicador visual (`Validant...`).

## Debounce de cerca

S'utilitza `valueChanges` amb:

- `debounceTime(400)`: evita crides constants mentre l'usuari escriu
- `distinctUntilChanged()`: evita cerques duplicades

Només es fa la cerca si el formulari és vàlid.

------------------------------------------------------------------------

# Ús del FormArray --- Gestió dinàmica de notes

Al component `PreferitsPanelComponent` s'ha implementat un formulari
reactiu dinàmic utilitzant `FormArray` per gestionar múltiples notes per
cada element preferit.

Cada element disposa del seu propi `FormGroup`, que conté un `FormArray`
anomenat `notes`.

## Estructura del formulari

-   `FormGroup`
    -   `notes`: `FormArray`
        -   `FormControl` per cada nota

Aquesta estructura permet afegir i eliminar notes dinàmicament.

## Creació del FormArray

``` ts
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
```

## Afegir i eliminar notes

-   Afegir:

``` ts
this.getNotesArray(id).push(
  this.fb.control('', [
    Validators.required,
    Validators.minLength(3)
  ])
);
```

-   Eliminar:

``` ts
this.getNotesArray(id).removeAt(index);
```

## Validació

Cada nota té: - `required` - `minLength(3)`

Els errors es mostren quan el camp ha estat tocat (`touched`).

## Persistència

Les notes es guarden juntament amb els preferits a `localStorage`:

``` ts
const actualitzats = preferits.map(e =>
  e.id === id ? { ...e, notes } : e
);
```

## Reconstrucció del formulari

En inicialitzar el component:

``` ts
this.preferitsService.preferits().forEach(e => {
  this.getNotesArray(e.id);
});
```

Això garanteix que les notes es mantinguin després de recarregar la
pàgina.

