import React, { FC } from "react";
import welcomeImg from "./welcome.png";
import mainLogo from "./Group4.svg";
import footerLogo from "./Group5.svg";
import { Grid } from "@mui/material";
import { useForm, Resolver } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface FormValuesRegistration {
  email: string;
  password: string;
  fullName: string;
}

const resolver: Resolver<FormValuesRegistration> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.password
      ? {
          password: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesRegistration>({ resolver });
  const onSubmit = handleSubmit((data) => {
    dispatch(AuthActionCreators.register(data));
  });

  return (
    <Grid>
      <Grid container direction="row">
        <Grid
          textAlign="center"
          sx={{ background: "#D3EDE1F7", padding: 8 }}
          md={6}
        >
          <img src={welcomeImg} style={{ width: "90%" }} alt="" />
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ paddingX: 20 }}
          md={6}
        >
          <img src={mainLogo} alt="" />
          <Grid
            container
            onSubmit={onSubmit}
            component="form"
            direction="column"
          >
            {error && <Grid>{error}</Grid>}
            <Grid>
              <label>
                E-MAIL
                <input type="email" {...register("email")} autoComplete="off" />
              </label>
            </Grid>

            <label>
              PASSWORD
              <input
                type="password"
                {...register("password")}
                autoComplete="off"
              />
              {errors?.password && <p>{errors.password.message}</p>}
            </label>

            <Grid>
              <label>
                NAME
                <input type="text" {...register("fullName")} autoComplete="off" />
              </label>
            </Grid>

            <input type="submit" value="registration" />
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ background: "#7DB59A", padding: 16 }}>
        <Grid style={{ alignContent: "center" }}>
          <img src={footerLogo} style={{ width: 80 }} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
