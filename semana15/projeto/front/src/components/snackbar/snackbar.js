import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import { SnackbarMessage } from "./styled";

function TransitionUp(props) {
  return <Slide {...props} direction="down" />;
}
export default function DirectionSnackbar({ text, error }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
        <SnackbarMessage
          open={open}
          onClose={() => setOpen(false)}
          TransitionComponent={TransitionUp}
          message={text}
          key={"erro"}
          error={error}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
     
    </div>
  );
}