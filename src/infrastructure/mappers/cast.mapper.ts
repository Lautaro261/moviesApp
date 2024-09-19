import {Cast} from '../../core/entities/cast.entity';
import {MovieDBCast} from '../interfaces/movie-db.responses';

export class CastMapper {
  /* la funcion recibe un actor o un cast. aqui se elije usar el termino actor */
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast{
    return{
        id: actor.id,
        name: actor.name,
        character: actor.character ?? 'No character',
        avatar: actor.profile_path ?
        `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
