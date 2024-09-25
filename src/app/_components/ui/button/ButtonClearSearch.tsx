// type
import { ButtonClearSearchProps } from "../../../_components/ui/type";
// hooks
import useSearchQuery from "../../../_hooks/useSearchQuery";
// mui
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { IconButton } from "@mui/material";

const ButtonClearSearch: React.FC<ButtonClearSearchProps> = ({ reset }) => {
  const { handleResetSearch } = useSearchQuery();
  return (
    <IconButton
      onClick={() => {
        reset();
        handleResetSearch();
      }}
    >
      <SearchOffIcon className="text-gray-400" />
    </IconButton>
  );
};

export default ButtonClearSearch;
