import * as React from "react";

//mui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, DialogContent } from "@mui/material";

//type
import { DeleteHandleProps } from "@/_types/type";

interface DeleteCategoryProps {
  onClick: () => void;
  content: string;
  title: string;
}

const DeleteCategoryDialog = React.forwardRef<
  DeleteHandleProps,
  DeleteCategoryProps
>(({ onClick, content, title }, ref) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useImperativeHandle(ref, () => ({
    openModal: () => setOpen(true),
  }));

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box className="px-5">
          <DialogTitle id="alert-dialog-title" sx={{ paddingBottom: "10px" }}>
            {title}
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: 0 }}>{content}</DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              className="hover:!bg-blue-300 hover:text-black"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onClick();
                handleClose();
              }}
              autoFocus
              className="hover:!bg-red-400 hover:text-black"
            >
              Delete
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
});

DeleteCategoryDialog.displayName = "DeleteCategoryDialog";

export default DeleteCategoryDialog;
