"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { toast } from "react-toastify";
// components
import formDataMaterial from "../../../_components/pages/material/form/formDataMaterial";
import Loading from "../../../_components/ui/loading/Loading";
import FormActionMaterial from "../../../_components/pages/material/form/FormActionMaterial";
// api
import { getOneMaterial, updateMaterial } from "../../../_api/material";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
import { editMaterialSchema } from "../../../_components/pages/material/validateMaterial";
//mui
import { Box } from "@mui/material";
// type
import { MarterialCategoriesProps } from "../../../_components/pages/material/type";
// hoc
import { withCheckId } from "../../../_hocs";
// next
import { useRouter } from "next/navigation";

const EditMaterial = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [newImage, setNewImage] = useState<string | null>(null);

  const formMethod = useForm<MarterialCategoriesProps>({
    resolver: yupResolver(
      editMaterialSchema
    ) as unknown as Resolver<MarterialCategoriesProps>,
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

  const { setValue } = formMethod;

  // const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetcGetOneMaterial = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await getOneMaterial(id);
          const {
            image,
            part_number,
            name,
            type,
            large_title,
            small_title,
            basic_price,
            category,
            supplier,
          } = response.data;

          console.log("response: ", response.data);
          setNewImage(image);
          setValue("part_number", part_number);
          if (name) {
            setValue("name", name);
          }
          if (type) {
            setValue("type", type);
          }
          setValue("large_title", large_title);
          setValue("small_title", small_title);
          setValue("basic_price", basic_price);
          setValue("category", category);
          setValue("supplier", supplier);
        }
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetcGetOneMaterial();
  }, [id, setValue]);

  const onSubmit = async (data: MarterialCategoriesProps) => {
    const formData = formDataMaterial(data);
    setLoading(true);
    try {
      if (id) {
        await updateMaterial(formData, id);
        toast.success("updated material successfully");
        if (localStorage.getItem("redirectPath")) {
          router.push("/admin/resources/material");
          localStorage.removeItem("redirectPath");
        } else {
          router.back();
        }
      }
    } catch (error) {
      console.error("error", error);
      if (axios.isAxiosError(error)) {
        const partNumber = error.response?.data?.part_number;
        if (partNumber && partNumber.length > 0) {
          toast.error("Already part number!");
        } else toast.error("Add material category false!");
      }
    } finally {
      setLoading(false);
    }
  };

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
    <FormActionMaterial
      formMethod={formMethod}
      onSubmit={onSubmit}
      newImage={newImage}
      loading={loading}
    />
  );
};

export default withCheckId(EditMaterial);
