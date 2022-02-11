import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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

const EditUserPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<userRoles>(userRoles.worker);
  const [userLoading, setUserLoading] = useState(true);
  const [applyСhangesLoader, setApplyСhangesLoader] = useState(false);
  const [editedUser, setEditedUser] = useState();
  const [error, setError] = useState("");

  const { loading } = useCheckIsAdmin();

  useEffect(() => {
    UserService.getUser(location.state)
      .then((resp) => {
        const user = resp.data;
        setEditedUser(user);
        setFullName(user.fullName);
        setEmail(user.email);
        setRole(user.role);
        setUserLoading(false);
      })
      .catch((e) => {
        setError("Error user loading");
        setUserLoading(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setApplyСhangesLoader(true);
    await UserService.editUser(location.state, data)
      .then(() => {
        navigate(-1);
        setApplyСhangesLoader(false);
      })
      .catch((e) => {
        setError("User was not edited");
        setApplyСhangesLoader(false);
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
            Edit user
          </Grid>
          {userLoading ? (
            <MyLoader />
          ) : (
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
                  placeholder="Type claim"
                  onChange={setFullName}
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
              <Grid style={{ marginTop: 30 }} xs={6}>
                <MyInput
                  type="password"
                  title="NEW PASSWORD"
                  value={password}
                  register={{ ...register("password") }}
                  placeholder="Type password"
                  onChange={setPassword}
                />
              </Grid>
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
                    disabled={applyСhangesLoader}
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </Grid>
  );
};

export default EditUserPage;
