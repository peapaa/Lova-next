"use client";

import { Controller, useForm } from "react-hook-form";
// mui
import { Button, Typography, useTheme } from "@mui/material";
// hooks
import useSearchQuery from "@/_hooks/useSearchQuery";
// type
import { FormValuesMaterial } from "@/_components/pages/material/type";
// components
import InputSearchByName from "@/_components/ui/input/InputSearchByName";
import { ButtonClearSearch, ButtonSearch } from "@/_components/ui/button";
import SearchByCategory from "@/_components/ui/input/SearchByCategory";
// next
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavMaterialCategories = () => {
  const theme = useTheme();
  const pathname = usePathname();
  const { handleSearch } = useSearchQuery();
  const { handleSubmit, control, reset } = useForm<FormValuesMaterial>({
    defaultValues: {
      searchText: "",
      searchCategory: "",
    },
  });

  const onSubmit = (data: FormValuesMaterial) => {
    handleSearch(data.searchText, data.searchCategory);
  };

  return (
    <div className="flex flex-col my-5 ">
      <Typography sx={{ fontSize: 24, color: theme.palette.text.primary }}>
        Marterial Category
      </Typography>
      <div className="flex justify-between items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between items-center gap-5"
        >
          <div className="flex gap-2 items-center">
            <Typography
              sx={{ fontSize: 18, color: theme.palette.text.secondary }}
            >
              Name
            </Typography>
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
          </div>
          <div className="flex gap-2 items-center">
            <Typography
              sx={{ fontSize: 18, color: theme.palette.text.secondary }}
            >
              Category
            </Typography>
            <Controller
              control={control}
              name="searchCategory"
              render={({ field }) => (
                <SearchByCategory
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <ButtonClearSearch reset={reset} />
          <ButtonSearch />
        </form>
        <div>
          <Button variant="contained">
            <Link href={`${pathname}/create-marterial`}>Create Material</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavMaterialCategories;
