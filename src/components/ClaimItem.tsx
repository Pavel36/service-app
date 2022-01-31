import { Chip, Grid, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import React, { FC } from "react";
import { UserRouteNames } from "../router";
import { dateCustomFormatter } from "../utils/dateFormatter";

enum claimTypes {
  Hardware,
  Software,
  Troubleshooting,
  Networking,
}

enum claimStatusTypes {
  DECLINED,
  NEW,
  IN_PROGRESS,
  DONE,
}

interface IClaimItemProps {
  id: string;
  claimTitle?: string;
  claimCreated?: string;
  claimType?: any;
  claimStatus?: any;
}

const claimTypeSwitch = (claimType: any) => {
  switch (claimType.name) {
    case "Hardware":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid sx={{ color: "#7DB59A", marginRight: "2px" }}>●</Grid>
            <Grid>Hardware</Grid>
          </Grid>
        </TableCell>
      );

    case "Software":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid sx={{ color: "#FF7675", marginRight: "2px" }}>●</Grid>
            <Grid>Software</Grid>
          </Grid>
        </TableCell>
      );
    case "Troubleshooting":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid sx={{ color: "#6C5CE7", marginRight: "2px" }}>●</Grid>
            <Grid>Troubleshooting</Grid>
          </Grid>
        </TableCell>
      );
    case "Networking":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid sx={{ color: "#FDCB6E", marginRight: "2px" }}>●</Grid>
            <Grid>Networking</Grid>
          </Grid>
        </TableCell>
      );
  }
};

const claimStatusSwitch = (claimStatus: any) => {
  switch (claimStatus.name) {
    case "Declined":
      return (
        <TableCell width='17.5%'>
          <Chip
            label="DECLINED"
            sx={{ color: "#FFFFFF", backgroundColor: "#E84393" }}
          />
        </TableCell>
      );
    case "New":
      return (
        <TableCell width='17.5%'>
          <Chip
            label="NEW"
            sx={{ color: "#FFFFFF", backgroundColor: "#6C5CE7" }}
          />
        </TableCell>
      );
    case "In progress":
      return (
        <TableCell width='17.5%'>
          <Chip
            label="IN PROGRESS"
            sx={{ color: "#FFFFFF", backgroundColor: "#FDCB6E" }}
          />
        </TableCell>
      );
    case "Done":
      return (
        <TableCell width='17.5%'>
          <Chip
            label="DONE"
            sx={{ color: "#FFFFFF", backgroundColor: "#00B894" }}
          />
        </TableCell>
      );
  }
};

const ClaimItem: FC<IClaimItemProps> = ({
  id,
  claimTitle,
  claimCreated,
  claimType,
  claimStatus,
}) => {
  let formatDate;
  if(claimCreated){
    formatDate = dateCustomFormatter(claimCreated)
  }
  
  return (
    <TableRow>
      <TableCell width="30%">{claimTitle}</TableCell>
      <TableCell width="17.5%">{formatDate}</TableCell>

      {claimType ? (
        claimTypeSwitch(claimType)
      ) : (
        <TableCell width="17.5%">
          <Grid container direction="row">
            <Grid sx={{ color: "#f0f0f0", marginRight: "2px" }}>●</Grid>
            <Grid>None</Grid>
          </Grid>
        </TableCell>
      )}
      {claimStatus ? (
        claimStatusSwitch(claimStatus)
      ) : (
        <TableCell width="17.5%">
          <Chip label="NONE" sx={{ backgroundColor: "#f0f0f0" }} />
        </TableCell>
      )}

      <TableCell width="17.5%">
        <Link to={`/claims/${id}`} state={id}>
          Browse
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ClaimItem;
