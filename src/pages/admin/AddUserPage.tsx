import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import UserService, { userRoles } from "../../api/UserService";
import MyButton, { ButtonType } from "../../components/UI/MyButton";
import MyInput from "../../components/UI/MyInput";
import MySelect from "../../components/UI/MySelect";

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  role: userRoles;
}

const AddUserPage = () => {
  const navigate = useNavigate();
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<userRoles>(userRoles.worker);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await UserService.addUser(data);
    navigate(-1);
  };

  return (
    <Grid>
      <Grid style={{ fontSize: 36, fontWeight: 700 }}>Creating new user</Grid>
      <Grid
        container
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        direction="column"
      >
        <Grid style={{ marginTop: 30 }} xs={6}>
          <MyInput
            value={fullName}
            title="NAME"
            register={{ ...register("fullName", { required: true }) }}
            errors={errors.fullName}
            placeholder="Type name"
            onChange={setfullName}
          />
        </Grid>
        <Grid style={{ marginTop: 30 }} xs={6}>
          <MyInput
            value={email}
            title="E-MAIL"
            register={{ ...register("email", { required: true }) }}
            errors={errors.email}
            placeholder="Type e-mail"
            onChange={setEmail}
          />
        </Grid>
        <Grid style={{ marginTop: 30 }} xs={6}>
          <MyInput
            title="PASSWORD"
            value={password}
            register={{ ...register("password") }}
            placeholder="Type password"
            onChange={setPassword}
          />
        </Grid>
        <Grid style={{ marginTop: 30 }} xs={6}>
          <MySelect
            title="ROLE"
            register={{ ...register("role", { required: true }) }}
            errors={errors.role}
            placeholder="Select role"
            onSelect={setRole}
            defaultValue={role}
            options={[
              {
                name: "Administrator",
                slug: userRoles.administrator,
              },
              {
                name: "Worker",
                slug: userRoles.worker,
              },
            ]}
          />
        </Grid>
        <Grid style={{ marginTop: 30 }} container spacing={2}>
          <Grid item>
            <MyButton
              value="Cancel"
              style={{
                backgroundColor: "#fff",
                color: "#858585",
                border: "1px solid",
              }}
            />
          </Grid>
          <Grid item>
            <MyButton value="Done" type={ButtonType.submit} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddUserPage;
