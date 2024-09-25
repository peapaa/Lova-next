// type
import { InputSearchProps } from "../../../_components/ui/type";

// mui
import { Box, InputAdornment, InputBase } from "@mui/material";

// icon
import { GoSearch } from "react-icons/go";

const InputSearchByName: React.FC<InputSearchProps> = ({ value, onChange }) => {
  console.log("value", value);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "8px 0",
        width: "320px",
      }}
    >
      <InputBase
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          width: "100%",
          height: "32px",
          borderRadius: "25px",
          paddingLeft: "8px",
          color: "#94A3B8",
        }}
        className="bg-white shadow-shadowInput"
        startAdornment={
          <InputAdornment position="start">
            <GoSearch style={{ color: "#94A3B8" }} />
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default InputSearchByName;
