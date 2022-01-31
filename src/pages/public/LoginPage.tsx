import React from "react";
import welcomeImg from "../../assets/welcome.png";
import mainLogo from "../../assets/Group4.svg";
import footerLogo from "../../assets/Group5.svg";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MyButton, { ButtonType } from "../../components/UI/MyButton";
import { useForm, Resolver } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MyInput from "../../components/UI/MyInput";
import { PublicRouteNames } from "../../router";

interface FormValues {
  email: string;
  password: string;
}

const resolver: Resolver<FormValues> = async (values) => {
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

const LoginPage = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) =>
    dispatch(AuthActionCreators.login(data))
  );

  return (
    <Grid>
      <Grid container direction="row">
        <Grid
          textAlign="center"
          sx={{ background: "#D3EDE1F7", padding: 8 }}
          xs={7}
        >
          <img src={welcomeImg} alt="" />
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center" xs={3} marginLeft={15}>
          <Grid item>
            <img src={mainLogo} alt="" />
          </Grid>
          <Grid
            container
            onSubmit={onSubmit}
            component="form"
            direction="column"
            item
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
              <label
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#ADADAD",
                }}
              >
                <input type="checkbox" />
                Keep me logged in
              </label>
            </Grid>
            {error && (
              <Grid item color="#7db59a" paddingTop={3}>
                {error}
              </Grid>
            )}
            <Grid item paddingTop={3}>
              <MyButton
                style={{ width: "100%" }}
                type={ButtonType.submit}
                value="Login"
                disabled={isLoading}
              />
            </Grid>
          </Grid>
          <Grid item sx={{ textAlign: "center" }} paddingTop={3}>
            Not a member?{" "}
            <Link to={PublicRouteNames.REGISTRATION}>
              Request registration.
            </Link>
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

export default LoginPage;
