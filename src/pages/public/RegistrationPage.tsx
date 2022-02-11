import React, { FC } from "react";
import welcomeImg from "../../assets/welcome.png";
import mainLogo from "../../assets/Group4.svg";
import footerLogo from "../../assets/Group5.svg";
import { Grid } from "@mui/material";
import { useForm, Resolver } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton, { ButtonType } from "../../components/UI/MyButton/MyButton";
import { useNavigate } from "react-router";
import { PublicRouteNames } from "../../router";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesRegistration>({ resolver });
  const onSubmit = handleSubmit((data) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    dispatch(AuthActionCreators.register(data));
    !isLoading && navigate(-1);
  });

  return (
    <Grid>
      <Grid container direction="row">
        <Grid
          textAlign="center"
          sx={{ background: "#D3EDE1F7", padding: 8 }}
          md={6}
        >
          <img src={welcomeImg} alt="" />
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
            <Grid item paddingTop={10}>
              <MyInput
                title="E-MAIL"
                type="email"
                placeholder="Type your e-mail"
                register={{ ...register("email") }}
              />
            </Grid>

            <Grid item paddingTop={3}>
              <MyInput
                title="PASSWORD"
                type="password"
                placeholder="Type your password"
                register={{ ...register("password") }}
              />
              {errors?.password && <p>{errors.password.message}</p>}
            </Grid>

            <Grid item paddingTop={3}>
              <MyInput
                title="NAME"
                type="text"
                placeholder="Type your name"
                register={{ ...register("fullName") }}
              />
            </Grid>

            {error && (
              <Grid item paddingTop={3} color="#7db59a">
                {error}
              </Grid>
            )}

            <Grid item paddingTop={3}>
              <MyButton
                style={{ width: "100%" }}
                type={ButtonType.submit}
                value="Registration"
                disabled={isLoading}
              />
            </Grid>
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
