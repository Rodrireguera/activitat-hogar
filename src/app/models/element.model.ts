export interface ElementApiResponse { 
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  popular: boolean;
  imatge: string;
  stock: number;
}

export interface ElementCataleg {
  id: string;
  titol: string;
  descripcio: string;
  categoria: string;
  esPopular: boolean;
  preu: number;
  imatgeUrl: string;
  unitats: number;
}