"use client";

import { useCallback, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { toast } from "react-toastify";

// yup
import { yupResolver } from "@hookform/resolvers/yup";
import { createCategoryschema } from "../../../_components/pages/category/validateCategory";

// service

// type
import { DataCategory } from "../../../_components/pages/category/type";

// component
import formDataCategory from "../../../_components/pages/category/formDataCategory";
import FormActionCategory from "../../../_components/pages/category/FormActionCategory";

// api
import { createCategories } from "../../../_api/category";
import { useRouter } from "next/navigation";

const CreateCategory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [newImage] = useState<string | null>(null);
  const formMethod = useForm<DataCategory>({
    resolver: yupResolver(
      createCategoryschema
    ) as unknown as Resolver<DataCategory>,
    defaultValues: {
      image: [],
      name: "",
      price_type: "",
    },
  });

  // if don't have state data --> don't block case $0.click() double create category

  const onSubmit = useCallback(
    async (data: DataCategory) => {
      setLoading(true);
      try {
        const formData = formDataCategory(data);
        await createCategories(formData);
        toast.success("Add category suscess!");
        router.push("/admin/resources/category");
      } catch (error) {
        console.log(error);
        toast.error("Add category false!");
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  return (
    <FormActionCategory
      formMethod={formMethod}
      onSubmit={onSubmit}
      loading={loading}
      newImage={newImage}
    />
  );
};

export default CreateCategory;
