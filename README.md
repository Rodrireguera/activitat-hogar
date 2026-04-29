## Descripció del projecte

Aplicació Angular per gestionar serveis de la llar, industrials i despeses. Permet consultar un catàleg, veure detalls, gestionar preferits i autenticar-se.

## Mapa de rutes

Path	        Component	                Public / privat
....................................................................   
/Redirecció  →  /cataleg	                    public
/cataleg	    CatalegPage                     public
/cerca	        FormulariCercaComponent         public
/detall/	    ElementDetallComponent	        public
/preferits	    PreferitsPanelComponent	        public
/login	        LoginComponent	                public
**	Redirecció → /cataleg	                    public


## Instruccions d'execució local

git clone [https://github.com/Rodrireguera/activitat-hogar] 
cd [ACTIVITAT I DESPESES D'UNA LLAR] 
npm install ng serve

## Obrir
http://localhost:4200/

## Build de producció

Per generar el build de producció s'ha utilitzat la comanda:

ng build --configuration production

Aquesta comanda genera una versió optimitzada de l'aplicació dins la carpeta dist/, reduint la mida dels fitxers i millorant el rendiment.

Mida del bundle obtinguda:

Initial Chunk Files
    main: 142.98 kB
    polyfills: 34.52 kB
    altres chunks: 196.70 kB

Mida total inicial: 374.20 kB
Transferència estimada: 98.38 kB

Lazy Chunk Files
    preferits-panel-component: 4.92 kB
    Transferència estimada: 1.60 kB

S'ha implementat lazy loading per a la ruta de preferits, de manera que aquest mòdul només es carrega quan l'usuari accedeix a aquesta secció, millorant el rendiment inicial de l'aplicació.

## Credencials de la prova

Email: admin@test.com
Contrasenya: 1234


