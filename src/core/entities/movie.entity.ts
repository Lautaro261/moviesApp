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
