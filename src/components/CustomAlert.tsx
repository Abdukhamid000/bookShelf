import * as React from "react";
import { Alert } from "@mui/material";

type Props = {
  text: string;
  status: "error" | "warning" | "info" | "success";
};

const CustomAlert = ({ text, status }: Props) => {
  return (
    <>
      {setTimeout(() => {
        <Alert severity={status}>{text}</Alert>;
      }, 500)}
    </>
  );
};

export default CustomAlert;
