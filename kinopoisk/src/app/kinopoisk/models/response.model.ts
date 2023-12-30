export interface ResponseFilmsTop {
  pagesCount: number;
  films: FilmItem[]
}

export interface FilmItem {
  countries:[{ country: string }],
  filmId: number,
  filmLength: string,
  genres: [{ genre: string }, { genre: string }, { genre: string }],
  isAfisha: number,
  isRatingUp: null,
  nameEn: string,
  nameRu: string,
  posterUrl: string,
  posterUrlPreview: string,
  rating: string,
  ratingChange: null,
  ratingVoteCount: number,
  year: string
}