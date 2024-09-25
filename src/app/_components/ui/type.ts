import { Control, FieldErrors, UseFormReset } from "react-hook-form";
// type
import {
  FormValuesMaterial,
  MarterialCategoriesProps,
} from "../../_components/pages/material/type";
// util
import { priceTypesProps } from "../../_utils/data";

export interface LoadingProps {
  className?: string;
}

export interface ErrorTextProps {
  error?: string | undefined;
}

export interface ButtonRetryProps {
  className?: string;
  onClick: () => void;
}

export interface InputSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface InputImageProps {
  value: File[] | undefined;
  error: string | undefined;
  onChange: (value: File[] | undefined) => void;
  imageUrl?: string | null;
}

export interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  placeholder?: string;
  typeInput?: string;
}

export interface SelectOptionProps {
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  optionValues: priceTypesProps[];
  id: string;
}

export interface ButtonFormProps {
  loading: boolean;
}

export interface ControllerFormProps {
  control: Control<MarterialCategoriesProps, unknown>;
  errors: FieldErrors<MarterialCategoriesProps>;
  name: string;
  title: string;
  typeInput?: string;
  OptionValues?: priceTypesProps[];
}

export interface ControllerFormSelectWithCategoriesProps {
  control: Control<MarterialCategoriesProps, unknown>;
  errorForm: FieldErrors<MarterialCategoriesProps>;
}

export interface ControllerFormSelectWithSupplierProps {
  control: Control<MarterialCategoriesProps, unknown>;
  errorForm: FieldErrors<MarterialCategoriesProps>;
}

export interface ButtonClearSearchProps {
  reset: UseFormReset<FormValuesMaterial>;
}
