"use client";

import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { usePathname } from "next/navigation";
// mui
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// hook
import useSearchQuery from "../../../_hooks/useSearchQuery";

// component
import InputSearchByName from "../../../_components/ui/input/InputSearchByName";

// type
import { FormValuesCategory } from "../../../_components/pages/category/type";

const NavCategory = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const { handleSearch } = useSearchQuery();
  const { handleSubmit, control } = useForm<FormValuesCategory>({
    defaultValues: {
      searchText: "",
    },
  });
  const onSubmit = (data: FormValuesCategory) => {
    handleSearch(data.searchText);
  };
  return (
    <div className="flex my-5 items-end justify-between">
      <div>
        <Typography sx={{ fontSize: 24, color: theme.palette.text.primary }}>
          Category
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="searchText"
            render={({ field }) => (
              <InputSearchByName
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </form>
      </div>
      <div className="mb-2">
        <Button variant="contained">
          <Link href={`${pathname}/create-category`}>Create Category</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavCategory;
