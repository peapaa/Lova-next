// type
import { ControllerFormSelectWithSupplierProps } from "@/_components/ui/type";
import { withSupplierProps } from "@/_hocs/type";
// mui
import { Box } from "@mui/material";
// component
import Loading from "@/_components/ui/loading/Loading";
import { ButtonRetry } from "@/_components/ui/button";
import ControllerFormSelect from "@/_components/ui/form/ControllerFormSelect";
// hoc
import withGetSupplier from "@/_hocs/withGetSupplier";

const ControllerFormSelectWithSupplier = ({
  supplier,
  loading,
  errors,
  setRetry,
  control,
  errorForm,
}: withSupplierProps & ControllerFormSelectWithSupplierProps) => {
  const OptionValueSupplier =
    supplier.length > 0
      ? supplier.map((item) => ({
          value: item.id,
          option: item.name,
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
      name="supplier"
      title="Supplier"
      OptionValues={OptionValueSupplier}
    />
  );
};

export default withGetSupplier(ControllerFormSelectWithSupplier);
