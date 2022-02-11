import { Grid } from "@mui/material";
import React, { FC } from "react";
import { PulseLoader } from "react-spinners";
import "./MyLoader.css"

interface IMyInputProps {
  color?: string;
}

const MyLoader: FC<IMyInputProps> = ({ color = "rgb(125, 181, 154)" }) => {
  return (
    <Grid xs={12} className="loader-wrapper">
      <Grid paddingTop={10}>
        <PulseLoader color={color} />
      </Grid>
    </Grid>
  );
};

export default MyLoader;
