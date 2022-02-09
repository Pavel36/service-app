import { Chip, Grid, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import React, { FC } from "react";
import { UserRouteNames } from "../router";
import { userRoles } from "../api/UserService";
import { dateCustomFormatter } from "../utils/dateFormatter";

interface IUserItemProps {
  id: string;
  userFullname?: string;
  userRole?: any;
  userEmail?: string;
  userCreated?: string;
  userUpdeted?: string;
}

interface IRole {
  name: string;
  slug: userRoles;
}

const userRoleSwitch = (role: IRole) => {
  switch (role.slug) {
    case userRoles.worker:
      return (
        <TableCell>
          <Chip
            label={role.name}
            sx={{ color: "#FFFFFF", backgroundColor: "#00B894" }}
          />
        </TableCell>
      );

    case userRoles.administrator:
      return (
        <TableCell>
          <Chip
            label={userRoles.administrator}
            sx={{ color: "#FFFFFF", backgroundColor: "#E84393" }}
          />
        </TableCell>
      );
  }
};

const UserItem: FC<IUserItemProps> = ({
  id,
  userFullname,
  userRole,
  userEmail,
  userCreated,
  userUpdeted,
}) => {
  let formatCreateDate;
  let formatUpdateDate;
  if (userCreated) {
    formatCreateDate = dateCustomFormatter(userCreated);
  }
  if (userUpdeted) {
    formatUpdateDate = dateCustomFormatter(userUpdeted);
  }
  return (
    <TableRow>
      <TableCell width="17.5%">{userFullname}</TableCell>
      {userRole ? (
        userRoleSwitch(userRole)
      ) : (
        <TableCell width="17.5%"></TableCell>
      )}
      <TableCell width="17.5%">{userEmail}</TableCell>
      <TableCell width="17.5%">{formatCreateDate}</TableCell>
      <TableCell width="17.5%">{formatUpdateDate}</TableCell>
      <TableCell width="17.5%">
        <Link to={`/users/${id}`} state={id}>
          Browse
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
