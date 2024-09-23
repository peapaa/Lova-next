import { ComponentType, useEffect, useState } from "react";
// api
import { getSupplier } from "@/_api/supplier";
// type
import { SupplierProps, withSupplierProps } from "@/_hocs/type";

function withGetSupplier<T>(Component: ComponentType<T & withSupplierProps>) {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    const [supplier, setSupplier] = useState<SupplierProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<boolean>(false);
    const [retry, setRetry] = useState<boolean>(false);

    useEffect(() => {
      const fetchGetSupplier = async () => {
        setLoading(true);
        setErrors(false);
        try {
          const response = await getSupplier();
          setSupplier(response.data.results as SupplierProps[]);
        } catch (error) {
          console.error(error);
          setErrors(true);
        } finally {
          setLoading(false);
        }
      };
      fetchGetSupplier();
    }, [retry]);
    return (
      <Component
        {...props}
        supplier={supplier}
        loading={loading}
        errors={errors}
        setRetry={setRetry}
      />
    );
  };
}
withGetSupplier.displayName = "withGetSupplier";

export default withGetSupplier;
