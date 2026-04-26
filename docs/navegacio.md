Taula del mapa complet de l'app
----------------------------------------------------------------------
Path	        Component	                Public / privat
....................................................................   
/Redirecció  →  /cataleg	                    public
/cataleg	    CatalegPage                     public
/cerca	        FormulariCercaComponent         public
/detall/	    ElementDetallComponent	        public
/preferits	    PreferitsPanelComponent	        public
/login	        LoginComponent	                public
**	Redirecció → /cataleg	                    public

----------------------------------------------
Configuració del sistema de rutes
----------------------------------------------

provideRouter
----------------------------------------------

El sistema de rutes s'ha configurat mitjançant provideRouter(routes) al fitxer app.config.ts.
Aquesta funció permet registrar les rutes definides a app.routes.ts dins de l'aplicació Angular standalone, substituint l'ús tradicional de RouterModule.

RouterOutlet
-----------------------------------------------

El component principal (AppComponent) inclou la directiva:

<router-outlet></router-outlet>

Aquesta etiqueta actua com a contenidor dinàmic on es carreguen els components associats a cada ruta, permetent la navegació sense recàrrega de pàgina.

RouterLink
------------------------------------------------

La navegació entre vistes es realitza amb la directiva routerLink, que permet canviar de ruta sense recarregar la pàgina.

Exemple:

<a routerLink="/cataleg">Catàleg</a>
<a routerLink="/cerca">Cerca</a>
<a routerLink="/preferits">Preferits</a>
<a routerLink="/login">Login</a>

A més, s’utilitza routerLinkActive per indicar visualment la ruta activa:

<a routerLink="/cataleg" routerLinkActive="active">Catàleg</a>

Quan la ruta està activa, s'aplica una classe CSS (per exemple .active) per destacar l'enllaç.

--------------------------------------------------------
Funcionament general

La ruta buida (/) redirigeix automàticament a /cataleg.
La ruta wildcard (**) captura qualsevol URL no reconeguda i redirigeix també a /cataleg.
La navegació es realitza sense recàrrega de pàgina gràcies al sistema de routing d'Angular.
Els paràmetres de ruta (com /detall/:id) permeten mostrar informació específica de cada
de cada element filtrant per JSON de id