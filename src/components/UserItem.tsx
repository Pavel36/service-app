import { Chip, Grid, TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import React, { FC } from "react";
import { UserRouteNames } from "../router";
import { userRoles } from "../api/UserService";

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
  return (
    <TableRow>
      <TableCell>{userFullname}</TableCell>
      {userRole ? userRoleSwitch(userRole) : <TableCell></TableCell>}
      <TableCell>{userEmail}</TableCell>
      <TableCell>{userCreated}</TableCell>
      <TableCell>{userUpdeted}</TableCell>
      <TableCell>
        <Link to={`/users/${id}`} state={id}>
          Browse
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
