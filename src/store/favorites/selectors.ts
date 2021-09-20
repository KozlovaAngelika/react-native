/* eslint-disable import/prefer-default-export */

import { RootState } from "store";

export const selectMovies = (state: RootState): Movie[] => state.favorites.data;
