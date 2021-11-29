import { RootState } from 'store/rootReducer';

const selectMovieInfo = (state: RootState): MovieInfoState => state.movieInfo;

export default selectMovieInfo;
