# Serveis de l'aplicació

## ElementService (Servei HTTP)

El servei `ElementService` s'encarrega de gestionar la comunicació amb
l'API per obtenir els elements del catàleg.

### Funcionalitats principals

-   Obtenció d'elements populars
-   Gestió d'estats de càrrega
-   Gestió d'errors

### Endpoints

-   `GET /elements` → Retorna tots els elements
-   `GET /elements?popular=true` → Retorna només els elements populars

### Mètodes

-   `obtenirPopulars()`: realitza una crida HTTP per obtenir els
    elements populars
-   `elements$`: conté la llista d'elements
-   `carregant$`: indica si s'està carregant informació
-   `error$`: conté el missatge d'error en cas de fallada

### Gestió d'estats

El servei utilitza diferents estats per controlar la UI:

-   Carregant → mostra spinner
-   Error → mostra missatge d'error
-   Dades → mostra el catàleg

------------------------------------------------------------------------

## PreferitsService

El servei `PreferitsService` s'encarrega de gestionar els elements
marcats com a preferits i la seva persistència.

### Persistència

Els preferits es guarden al `localStorage` amb la clau:

``` ts
'preferits-cataleg'
```

Això permet mantenir els dades entre sessions (F5).

------------------------------------------------------------------------

### Estat intern

El servei utilitza **signals** per gestionar l'estat:

``` ts
preferits = signal<ElementCataleg[]>([]);
```

------------------------------------------------------------------------

### Exposició pública

-   `preferits$`: signal de lectura dels preferits
-   `totalPreferits`: valor computat amb el nombre total de preferits

``` ts
totalPreferits = computed(() => this.preferits().length);
```

------------------------------------------------------------------------

### Mètodes principals

#### afegirPreferit(element)

Afegeix un element als preferits si no existeix:

``` ts
afegirPreferit(element: ElementCataleg): void
```

------------------------------------------------------------------------

#### eliminarPreferit(id)

Elimina un element dels preferits pel seu identificador:

``` ts
eliminarPreferit(id: string): void
```

------------------------------------------------------------------------

#### esPreferit(id)

Comprova si un element és preferit:

``` ts
esPreferit(id: string): boolean
```

------------------------------------------------------------------------

### Carrega de dades

En inicialitzar el servei, es carreguen automàticament els preferits:

``` ts
constructor() {
  this.carregarPreferits();
}
```

Es recuperen del `localStorage` amb `JSON.parse`.

------------------------------------------------------------------------

### Gestió d'errors

S'utilitza `try/catch` per evitar errors en llegir o escriure al
`localStorage`.

------------------------------------------------------------------------

### Persistència de notes

Les notes associades als elements preferits es guarden conjuntament amb
els preferits dins del `localStorage`.

Exemple:

``` json
{
  "id": "1",
  "titol": "Fontanero urgente",
  "notes": ["Trucar abans", "Urgent"]
}
```

Això permet mantenir tant els preferits com les seves notes després de
recarregar la pàgina.

------------------------------------------------------------------------

## Conclusió

Els serveis permeten separar la lògica de negoci de la interfície:

-   `ElementService`: gestiona dades externes (API)
-   `PreferitsService`: gestiona estat local i persistència

Aquesta arquitectura facilita la reutilització, manteniment i
escalabilitat de l'aplicació.
