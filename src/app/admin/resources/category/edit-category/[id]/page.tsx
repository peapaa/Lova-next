import EditCategory from "@/_components/pages/category/EditCategory";

const EditCategoryPage = ({ params }: { params: { id: string } }) => {
  return <EditCategory id={params.id} />;
};

export default EditCategoryPage;
