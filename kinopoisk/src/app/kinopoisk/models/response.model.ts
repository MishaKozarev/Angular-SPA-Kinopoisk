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

export interface FilmItemById {
  kinopoiskId: number,
  kinopoiskHDId: string,
  imdbId: string,
  nameRu: string,
  nameEn: null,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: string,
  logoUrl: string,
  reviewsCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingImdb: number,
  ratingImdbVoteCount: number,
  ratingFilmCritics: number,
  ratingFilmCriticsVoteCount: number,
  ratingAwait: null,
  ratingAwaitCount: number,
  ratingRfCritics: null,
  ratingRfCriticsVoteCount: number,
  webUrl: string,
  year: number,
  filmLength: number,
  slogan: string,
  description: string,
  shortDescription: string,
  editorAnnotation: null,
  isTicketsAvailable: false,
  productionStatus: null,
  type: string,
  ratingMpaa: string,
  ratingAgeLimits: string,
  countries: [
    {
      country: string
    },
  ],
  genres: [
    {
      genre: string
    },
    {
      genre: string
    },
    {
      genre: string
    },
  ],
  startYear: null,
  endYear: null,
  serial: false,
  shortFilm: false,
  completed: false,
  hasImax: false,
  has3D: false,
  lastSync: string
}
