import MarterialCategoriesList from "@/_components/pages/material/ListMaterial";
import NavMaterialCategories from "@/_components/pages/material/NavMaterial";

export const metadata = {
  title: "Laravel Nova | Material",
  description:
    "Discover a detailed and diverse list of product material, helping you easily manage and select products according to your needs. Stay updated with the latest material here.",
};
const page = () => {
  return (
    <>
      <NavMaterialCategories />
      <MarterialCategoriesList />
    </>
  );
};

export default page;
