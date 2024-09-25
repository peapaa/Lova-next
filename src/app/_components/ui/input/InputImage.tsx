import * as React from "react";
import Image from "next/image";

// mui
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// type
import { InputImageProps } from "../../../_components/ui/type";

// component
import ErrorText from "../../../_components/ui/error-text/ErrorText";

const InputImage: React.FC<InputImageProps> = ({
  value,
  onChange,
  error,
  imageUrl,
}) => {
  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        onChange([file]);
      };
    } else {
      onChange([]);
    }
  };

  return (
    <div className="flex flex-col shadow-shadowCategory px-6 py-10 items-center justify-center rounded-md">
      <label
        htmlFor="image"
        className="flex flex-col gap-3 items-center justify-center "
      >
        {imageUrl || (value && value.length > 0) ? (
          <Image
            src={
              value && value.length > 0
                ? URL.createObjectURL(value[0])
                : imageUrl || ""
            }
            alt="image category"
            width={200}
            height={200}
            className="w-[200px] h-[200px] object-cover rounded-lg"
          />
        ) : (
          <CloudUploadIcon sx={{ width: "100px", height: "100px" }} />
        )}
        <p className="mb-2">
          Accept <span className="text-red-600">*</span>: jpg, png, jpeg, svg
        </p>
      </label>
      <input
        type="file"
        id="image"
        className="w-0 h-0 opacity-0"
        accept=".jpg, .png, .jpeg, .svg"
        multiple={false}
        onChange={handleChangeImage}
      />
      <ErrorText error={error} />
    </div>
  );
};

export default InputImage;
