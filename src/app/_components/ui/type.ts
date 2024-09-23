import { priceTypesProps } from "@/_utils/data";

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
