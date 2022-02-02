import { Grid } from "@mui/material";
import React, { FC } from "react";
import { PulseLoader } from "react-spinners";

interface IMyInputProps {
  color?: string;
}

const MyLoader: FC<IMyInputProps> = ({ color = "rgb(125, 181, 154)"}) => {
  return (
    <Grid xs={12} height="100%" textAlign="center" alignContent="center">
      <Grid paddingTop={10}>
        <PulseLoader color={color} />
      </Grid>
    </Grid>
  );
};

export default MyLoader;
