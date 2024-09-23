// component
import { NavCategory } from "@/_components/pages/category";
import ListCategory from "@/_components/pages/category/ListCategory";

export const metadata = {
  title: "Laravel Nova | Category",
  description:
    "Discover a detailed and diverse list of product categories, helping you easily manage and select products according to your needs. Stay updated with the latest categories here.",
};
const page = () => {
  return (
    <>
      <NavCategory />
      <ListCategory />
    </>
  );
};

export default page;
