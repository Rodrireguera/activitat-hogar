export interface ElementApiResponse { 
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  popular: boolean;
  imatge: string;
  stock: number;
  notes: string[];
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
  notes?: string[];
}
