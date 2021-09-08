declare module '*.png';

interface AsyncState {
  loading: boolean;
  error: Error | null;
  data: Movie[];
}
