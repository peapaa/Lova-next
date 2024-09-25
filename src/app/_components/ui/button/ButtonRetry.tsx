import { ButtonRetryProps } from "../../../_components/ui/type";
import { Button } from "@mui/material";

const ButtonRetry: React.FC<ButtonRetryProps> = ({ className, onClick }) => {
  return (
    <Button
      variant="contained"
      className={className}
      onClick={onClick}
      sx={{ paddingX: "30px" }}
    >
      ReTry
    </Button>
  );
};

export default ButtonRetry;
