// type
import { InputTextProps } from "@/_components/ui/type";

//  component
import ErrorText from "@/_components/ui/error-text/ErrorText";

// mui
import { Box } from "@mui/material";

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  error,
  typeInput,
}) => {
  return (
    <Box component="div">
      <input
        type={typeInput}
        id="name"
        value={value}
        className="border outline-none rounded-md pl-3 h-8 w-full"
        onChange={(e) => onChange(e.target.value)}
      />
      <Box component="div">
        <ErrorText error={error} />
      </Box>
    </Box>
  );
};

export default InputText;
