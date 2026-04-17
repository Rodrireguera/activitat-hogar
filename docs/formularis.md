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