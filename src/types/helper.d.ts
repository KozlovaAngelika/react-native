declare module '*.png';

interface AsyncState<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}
