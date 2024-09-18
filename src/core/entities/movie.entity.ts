/* Entity o Modelo. Es un modelo mio, no un modelo de la api externa*/

export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;
}

/* NOTA: cuando uso el "extends" quiere decir que extiendo las propiedades de la interface
en este caso FullMovie toma todas pas propiedades de Movie y le agrego unas nuevas. */
export interface FullMovie extends Movie{
    genres: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}
