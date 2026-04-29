------------------------------------------------------------
ChangeDetectionStrategy.OnPush
------------------------------------------------------------
S'han aplicat estratègies OnPush als següents components:

ElementCardComponent
ElementDetallComponent

Aquests components són on depenen de dades d'entrada (@Input). L'ús d'OnPush redueix el nombre de cicles de detecció de canvis, millorant el rendiment general de l'aplicació.

Amb aquesta estratègia, Angular només actualitza el component quan canvia la referència de les dades, evitant comprovacions innecessàries.

------------------------------------------------------------
Virtualització amb Angular CDK
------------------------------------------------------------

S'ha implementat virtualització de llista mitjançant el mòdul ScrollingModule del CDK d'Angular.

Configuració:

Component: CatalegPageComponent
itemSize: 100 px
Altura viewport: 600 px
Nombre d'elements: > 50

S'ha substituït *ngFor per *cdkVirtualFor dins de cdk-virtual-scroll-viewport, permetent renderitzar únicament els elements visibles en pantalla.

Això redueix el nombre de nodes DOM i millora significativament el rendiment en llistes grans.