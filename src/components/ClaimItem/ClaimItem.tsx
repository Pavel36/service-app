import { Chip, Grid, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import React, { FC } from "react";
import { dateCustomFormatter } from "../../utils/dateFormatter";
import './ClaimItem.css'

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
            <Grid className="table-cell__label_hardware">●</Grid>
            <Grid>Hardware</Grid>
          </Grid>
        </TableCell>
      );

    case "Software":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid className="table-cell__label_software">●</Grid>
            <Grid>Software</Grid>
          </Grid>
        </TableCell>
      );
    case "Troubleshooting":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid className="table-cell__label_troubleshooting">●</Grid>
            <Grid>Troubleshooting</Grid>
          </Grid>
        </TableCell>
      );
    case "Networking":
      return (
        <TableCell>
          <Grid container direction="row">
            <Grid className="table-cell__label_networking">●</Grid>
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
        <TableCell className="table-cell">
          <Chip
            label="DECLINED"
            sx={{ color: "#FFFFFF", backgroundColor: "#E84393", width:"70%" }}
          />
        </TableCell>
      );
    case "New":
      return (
        <TableCell className="table-cell">
          <Chip
            label="NEW"
            sx={{ color: "#FFFFFF", backgroundColor: "#6C5CE7", width:"70%" }}
          />
        </TableCell>
      );
    case "In progress":
      return (
        <TableCell className="table-cell">
          <Chip
            label="IN PROGRESS"
            sx={{ color: "#FFFFFF", backgroundColor: "#FDCB6E", width:"70%" }}
          />
        </TableCell>
      );
    case "Done":
      return (
        <TableCell className="table-cell">
          <Chip
            label="DONE"
            sx={{ color: "#FFFFFF", backgroundColor: "#00B894", width:"70%" }}
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
  if (claimCreated) {
    formatDate = dateCustomFormatter(claimCreated);
  }

  return (
    <TableRow className="claimItem" >
      <TableCell width="30%">{claimTitle}</TableCell>
      <TableCell className="table-cell">{formatDate}</TableCell>

      {claimType ? (
        claimTypeSwitch(claimType)
      ) : (
        <TableCell className="table-cell">
          <Grid container direction="row">
            <Grid className="table-cell__label_none">●</Grid>
            <Grid>None</Grid>
          </Grid>
        </TableCell>
      )}
      {claimStatus ? (
        claimStatusSwitch(claimStatus)
      ) : (
        <TableCell className="table-cell">
          <Chip label="NONE" sx={{ backgroundColor: "#f0f0f0", width:"70%" }}/>
        </TableCell>
      )}

      <TableCell className="table-cell">
        <Link to={`/claims/${id}`} state={id}>
          Browse
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ClaimItem;
