import { useRouter } from "next/navigation";

// type
import { ButtonFormProps } from "@/_components/ui/type";

// mui
import { Button } from "@mui/material";

const ButtonForm: React.FC<ButtonFormProps> = ({ loading }) => {
  const router = useRouter();
  return (
    <div className=" flex items-center justify-center gap-5 ">
      <Button
        className="mt-20 w-40"
        type="button"
        style={{ border: "1px solid rgb(187 181 181 / 14%)" }}
        onClick={() => {
          if (localStorage.getItem("redirectPath")) {
            router.push("/admin/resources/categories");
            localStorage.removeItem("redirectPath");
          } else {
            router.back();
          }
        }}
      >
        Back
      </Button>
      <Button
        className="mt-20 w-40"
        variant="contained"
        type="submit"
        disabled={loading}
      >
        Submit
      </Button>
    </div>
  );
};

export default ButtonForm;
