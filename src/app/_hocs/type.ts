import { CategoriesProps } from "../_components/table/type";

export interface WithCheckIdProps {
  id: string;
}

export interface WithCategoriesProps {
  categories: CategoriesProps[];
  loading: boolean;
  errors: boolean;
  setRetry: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SupplierProps {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone_number: string;
  created_at?: string;
}

export interface withSupplierProps {
  supplier: SupplierProps[];
  loading: boolean;
  errors: boolean;
  setRetry: React.Dispatch<React.SetStateAction<boolean>>;
}
