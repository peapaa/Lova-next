import EditCategory from "@/_components/pages/category/EditCategory";

const page = ({ params }: { params: { id: string } }) => {
  console.log("params", params.id);
  return <EditCategory id={params.id} />;
};

export default page;
