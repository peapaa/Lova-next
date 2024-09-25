//type
import { ErrorTextProps } from "../../../_components/ui/type";

const ErrorText: React.FC<ErrorTextProps> = ({ error }) => {
  return <>{error && <p className="text-red-500 ">{error}</p>}</>;
};

export default ErrorText;
