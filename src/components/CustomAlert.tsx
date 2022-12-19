import * as React from "react";
import { Alert } from "@mui/material";

type Props = {
  text: string;
  status: "error" | "warning" | "info" | "success";
};

const CustomAlert = ({ text, status }: Props) => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Alert
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transition: "transform(-50%)",
      }}
      severity={status}
    >
      {text}
    </Alert>
  );
};

export default CustomAlert;
