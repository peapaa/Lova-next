import { UseFormReturn } from "react-hook-form";

export interface FormValuesCategory {
  searchText: string;
}

export interface DataCategory {
  image?: File[] | null;
  name: string;
  price_type: string;
}

export interface FormActionProps {
  onSubmit: (data: DataCategory) => Promise<void>;
  formMethod: UseFormReturn<DataCategory, unknown, undefined>;
  newImage: string | null;
  loading: boolean;
}
