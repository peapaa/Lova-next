// type
import { SelectOptionProps } from "../../../_components/ui/type";

// component
import ErrorText from "../../../_components/ui/error-text/ErrorText";

// mui
import { FormControl, MenuItem, Select } from "@mui/material";

const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  error,
  onChange,
  optionValues,
  id,
}) => {
  return (
    <div className="flex flex-col w-full ">
      <div className="w-full ">
        <FormControl className="w-full ">
          <Select
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            displayEmpty
            id={id}
            sx={{
              "& .MuiSelect-select": {
                padding: "6px 8px",
              },
            }}
          >
            <MenuItem value="">
              <em>Select option</em>
            </MenuItem>
            {optionValues.map((optionValues, index) => (
              <MenuItem value={optionValues.value} key={index}>
                {optionValues.option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <ErrorText error={error} />
    </div>
  );
};

export default SelectOption;
