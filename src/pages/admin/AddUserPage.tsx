import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import UserService, { userRoles } from "../../api/UserService";
import Header from "../../components/Layout/Header";
import MyButton, { ButtonType } from "../../components/UI/MyButton/MyButton";
import MyInput from "../../components/UI/MyInput/MyInput";
import MyLoader from "../../components/UI/MyLoader/MyLoader";
import MySelect from "../../components/UI/MySelect/MySelect";
import useCheckIsAdmin from "../../hooks/useCheckIsAdmin";

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
  const [error, setError] = useState("");
  const [applyLoading, setApplyLoading] = useState(false);

  const { loading } = useCheckIsAdmin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setApplyLoading(true);
    UserService.addUser(data)
      .then(() => {
        navigate(-1);
        setApplyLoading(false);
      })
      .catch((e) => {
        setError("User was not added");
        setApplyLoading(false);
      });
  };

  return (
    <Grid>
      <Header showSearchString={false} />
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <Grid style={{ fontSize: 36, fontWeight: 700 }} marginTop={6}>
            Creating new user
          </Grid>
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
              {errors?.fullName && <p>{errors.fullName.message}</p>}
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
              {errors?.email && <p>{errors.email.message}</p>}
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
              {errors?.role && <p>{errors.role.message}</p>}
            </Grid>
            <Grid style={{ marginTop: 30 }} xs={6}>
              <MyInput
                type="password"
                title="PASSWORD"
                value={password}
                register={{ ...register("password", { required: true }) }}
                placeholder="Type password"
                onChange={setPassword}
              />
            </Grid>
            {errors?.password && <p>{errors.password.message}</p>}
            {error && (
              <Grid style={{ marginTop: 30 }} color="#7db59a">
                {error}
              </Grid>
            )}
            <Grid style={{ marginTop: 30 }} container spacing={2}>
              <Grid item>
                <MyButton
                  value="Cancel"
                  style={{
                    backgroundColor: "#fff",
                    color: "#858585",
                    border: "1px solid",
                  }}
                  onClick={() => navigate(-1)}
                />
              </Grid>
              <Grid item>
                <MyButton
                  value="Done"
                  type={ButtonType.submit}
                  disabled={applyLoading}
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default AddUserPage;
