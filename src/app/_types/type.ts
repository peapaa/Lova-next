export interface DeleteHandleProps {
  openModal: () => void;
}

export interface DeleteCategory<T> {
  id: T;
  loading: boolean;
}
