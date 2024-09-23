import { UseFormReturn } from "react-hook-form";

export interface MarterialCategoriesProps {
  image?: File[] | null;
  part_number: string;
  name?: string | null;
  type?: number | null;
  large_title: string;
  small_title: string;
  basic_price: number;
  category: string;
  supplier: string;
}

export interface FormActionMateriaProps {
  onSubmit: (data: MarterialCategoriesProps) => Promise<void>;
  formMethod: UseFormReturn<MarterialCategoriesProps, unknown, undefined>;
  newImage: string | null;
  loading: boolean;
}

export interface FormValuesMaterial {
  searchText: string;
  searchCategory: string;
}

export interface GetAllMarterialCategoriesProps {
  basic_price: number;
  category: {
    name: string;
  };
  id: string;
  image: string;
  large_title: string;
  name: string;
  part_number: string;
  small_title: string;
  supplier: {
    name: string;
  };
  type: number;
}

export interface DeleteHandleProps {
  openModal: () => void;
}
