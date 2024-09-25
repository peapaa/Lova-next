"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// yup
import { yupResolver } from "@hookform/resolvers/yup";
import { editCategoryschema } from "../../../_components/pages/category/validateCategory";

// api
import { editCategory, getOneCategory } from "../../../_api/category";

// mui
import { Box } from "@mui/material";

// type
import { DataCategory } from "../../../_components/pages/category/type";

// component
import formDataCategory from "../../../_components/pages/category/formDataCategory";
import Loading from "../../../_components/ui/loading/Loading";
import FormActionCategory from "../../../_components/pages/category/FormActionCategory";

// hoc
import withCheckId from "../../../_hocs/withCheckId";

const EditCategory = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [newImage, setNewImage] = useState<string | null>(null);
  const router = useRouter();
  const formMethod = useForm<DataCategory>({
    resolver: yupResolver(
      editCategoryschema
    ) as unknown as Resolver<DataCategory>,
  });

  const { setValue } = formMethod;

  useEffect(() => {
    const fetchGetOneCategory = async () => {
      setLoading(true);
      try {
        const response = await getOneCategory(id);
        const { name, image, price_type } = response.data;
        setValue("name", name);
        setValue("price_type", price_type);
        setNewImage(image); // image not required --> dont setValue to form
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGetOneCategory();
  }, [id, setValue]);

  const onSubmit = useCallback(
    async (data: DataCategory) => {
      setLoading(true);
      try {
        const formData = formDataCategory(data);
        await editCategory(formData, id);
        toast.success("Edit category suscess!");
        if (localStorage.getItem("redirectPath")) {
          router.push("/admin/resources/category");
          localStorage.removeItem("redirectPath");
        } else {
          router.back();
        }
      } catch (error) {
        console.log(error);
        toast.error("Edit category false!");
      } finally {
        setLoading(false);
      }
    },
    [id, router]
  );

  // check id version 1
  // if (id === undefined) {
  //   navigate("/admin/resources/categories");
  // }

  if (loading) {
    return (
      <>
        <Box className="w-full h-full">
          <Box className="flex items-center justify-center h-screen">
            <Loading />
          </Box>
        </Box>
        ;
      </>
    );
  }

  return (
    <FormActionCategory
      formMethod={formMethod}
      onSubmit={onSubmit}
      loading={loading}
      newImage={newImage}
    />
  );
};

export default withCheckId(EditCategory);
