import { Controller } from "react-hook-form";
// component
import SelectOption from "../../../_components/ui/select/SelectOption";

// mui
import { Box } from "@mui/material";

// type
import { ControllerFormProps } from "../../../_components/ui/type";
import { MarterialCategoriesProps } from "../../../_components/pages/material/type";

const ControllerFormSelect: React.FC<ControllerFormProps> = ({
  control,
  errors,
  name,
  title,
  OptionValues,
}) => {
  const keyName = name as keyof MarterialCategoriesProps;
  return (
    <Controller
      control={control}
      name={name as keyof MarterialCategoriesProps}
      render={({ field: { onChange, value } }) => {
        return (
          <div className="flex flex-col w-full">
            <label htmlFor={name} className="my-2">
              {title}
              {title === "Name" || title === "Type" ? null : (
                <span className="text-red-600"> *</span>
              )}{" "}
              :
            </label>
            <Box>
              <SelectOption
                value={value as string}
                error={errors[keyName]?.message}
                onChange={onChange}
                optionValues={OptionValues ?? []}
                id={name}
              />
            </Box>
          </div>
        );
      }}
    />
  );
};

export default ControllerFormSelect;
