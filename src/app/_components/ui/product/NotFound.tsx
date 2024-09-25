import notFoundImage from "../../../_assets/images/404-logo/Error-404.png";
import Image from "next/image";
const NotFound = () => {
  return (
    <Image
      src={notFoundImage}
      alt="404 not found"
      width={500}
      height={500}
      className="flex items-center justify-center w-full h-full"
    />
  );
};

export default NotFound;
