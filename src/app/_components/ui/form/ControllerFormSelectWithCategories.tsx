// hoc
import { withGetCategories } from "@/_hocs";
/// mui
import { Box } from "@mui/material";
// type
import { WithCategoriesProps } from "@/_hocs/type";
import { ControllerFormSelectWithCategoriesProps } from "@/_components/ui/type";
// component
import Loading from "@/_components/ui/loading/Loading";
import { ButtonRetry } from "@/_components/ui/button";
import ControllerFormSelect from "@/_components/ui/form/ControllerFormSelect";

const ControllerFormSelectWithCategories = ({
  categories,
  loading,
  errors,
  setRetry,
  control,
  errorForm,
}: WithCategoriesProps & ControllerFormSelectWithCategoriesProps) => {
  const OptionValues =
    categories.length > 0
      ? categories.map((category) => ({
          value: category.id,
          option: category.name,
        }))
      : [];

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
      <Box className="flex items-center justify-center h-[92px] relative">
        <ButtonRetry
          onClick={() => setRetry((prev) => !prev)}
          className="absolute top-3"
        />
      </Box>
    );
  }

  return (
    <ControllerFormSelect
      control={control}
      errors={errorForm}
      name="category"
      title="Category"
      OptionValues={OptionValues}
    />
  );
};

export default withGetCategories(ControllerFormSelectWithCategories);
