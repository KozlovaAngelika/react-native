import { RootState } from 'store';

const selectMovieInfo = (state: RootState): MovieInfoState => state.movieInfo;

export default selectMovieInfo;
