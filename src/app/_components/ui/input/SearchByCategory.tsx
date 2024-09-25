import { SyntheticEvent } from "react";
import { GoSearch } from "react-icons/go";
// mui
import { Box, InputAdornment } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// type
import { WithCategoriesProps } from "../../../_hocs/type";
import { InputSearchProps } from "../../../_components/ui/type";
// component
import Loading from "../../../_components/ui/loading/Loading";
import { ButtonRetry } from "../../../_components/ui/button";
// hoc
import { withGetCategories } from "../../../_hocs";

const SearchByCategory = ({
  categories,
  loading,
  errors,
  setRetry,
  value,
  onChange,
}: WithCategoriesProps & InputSearchProps) => {
  const categoriesName = categories.map((category) => category.name);
  if (loading) {
    return (
      <>
        <Box className="flex items-center justify-center h-[92px]">
          <Loading className="!w-6 !h-6" />
        </Box>
      </>
    );
  }

  if (errors) {
    return (
      <Box className="flex items-center justify-center w-[300px]">
        <ButtonRetry onClick={() => setRetry((prev) => !prev)} />
      </Box>
    );
  }
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={categoriesName}
      className="shadow-shadowInput"
      sx={{
        width: 300,
        backgroundColor: "white",
        borderRadius: 999,
        "& .MuiOutlinedInput-root": {
          height: 32,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      value={value}
      onChange={(_: SyntheticEvent<Element, Event>, value: string | null) => {
        if (value) {
          onChange(value);
        }
      }}
      onInputChange={(
        _: SyntheticEvent<Element, Event>,
        value: string | null
      ) => {
        if (value) {
          onChange(value);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search Category"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <GoSearch style={{ color: "#94A3B8" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default withGetCategories(SearchByCategory);
