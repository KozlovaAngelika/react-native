// import { API_KEY } from 'react-native-dotenv';
// import { RootThunkAction } from 'store';
// import * as types from './actionTypes';
// import {
//   GetTopMovies,
//   GetTopMoviesSuccess,
//   GetTopMoviesFail,
//   GetTopMoviesActions,
// } from './types';

// export const getTopMoviesStarted = (): GetTopMovies => ({
//   type: types.GET_TOP_MOVIES_STARTED,
// });

// export const getTopMoviesSuccess = (data: Movie[]): GetTopMoviesSuccess => ({
//   type: types.GET_TOP_MOVIES_SUCCESS,
//   payload: data,
// });

// export const getTopMoviesFail = (error: Error | null): GetTopMoviesFail => ({
//   type: types.GET_TOP_MOVIES_FAIL,
//   payload: error,
// });
// export const getTopMovies = (): RootThunkAction<GetTopMoviesActions> => (
//   dispatch,
//   getState,
//   api,
// ) => {
//   const state = getState();
//   const lang = state.currentLanguage;
//   dispatch(getTopMoviesStarted());
//   api
//     .get<GetTopMoviesResponse>(`/${lang}/API/Top250Movies/${API_KEY}`)
//     .then(({ data }) => {
//       const { items, errorMessage } = data;
//       if (errorMessage) {
//         const error = new Error(errorMessage);
//         dispatch(getTopMoviesFail(error));
//       } else {
//         dispatch(getTopMoviesSuccess(items));
//       }
//     })
//     .catch((err) => {
//       dispatch(getTopMoviesFail(err));
//     });
// };
