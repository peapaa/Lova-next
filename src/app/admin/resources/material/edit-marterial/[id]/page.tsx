import EditMaterial from "../../../../../_components/pages/material/EditMaterial";

const EditMaterialPage = ({ params }: { params: { id: string } }) => {
  return <EditMaterial id={params.id} />;
};

export default EditMaterialPage;
