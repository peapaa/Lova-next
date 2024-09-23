"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// component
import formDataMaterial from "@/_components/pages/material/form/formDataMaterial";
import FormActionMaterial from "@/_components/pages/material/form/FormActionMaterial";
// api
import { createMaterialCategory } from "@/_api/material";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
import { createMaterialSchema } from "@/_components/pages/material/validateMaterial";
// type
import { MarterialCategoriesProps } from "@/_components/pages/material/type";
// next
import { useRouter } from "next/navigation";

const CreateMarterial = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newImage] = useState<string | null>(null);
  const router = useRouter();
  const formMethod = useForm<MarterialCategoriesProps>({
    resolver: yupResolver(createMaterialSchema),
    defaultValues: {
      image: [],
      part_number: "",
      name: "",
      type: 0,
      large_title: "",
      small_title: "",
      basic_price: 0,
      category: "",
      supplier: "",
    },
  });

  const onSubmit = useCallback(
    async (data: MarterialCategoriesProps) => {
      setLoading(true);
      try {
        const formData = formDataMaterial(data);
        await createMaterialCategory(formData);
        toast.success("Add Material suscess!");
        router.push("/admin/resources/material");
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          const partNumber = error.response?.data?.part_number;
          if (partNumber && partNumber.length > 0) {
            toast.error("Already part number!");
          } else toast.error("Add material false!");
        }
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  return (
    <FormActionMaterial
      onSubmit={onSubmit}
      formMethod={formMethod}
      newImage={newImage}
      loading={loading}
    />
  );
};

export default CreateMarterial;
