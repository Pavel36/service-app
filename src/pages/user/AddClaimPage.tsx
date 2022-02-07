import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ClaimService, { ClaimStatuses, ClaimTypes } from "../../api/ClaimService";
import Header from "../../components/Layout/Header";
import MyButton, { ButtonType } from "../../components/UI/MyButton";
import MyInput from "../../components/UI/MyInput";
import MyLoader from "../../components/UI/MyLoader";
import MySelect from "../../components/UI/MySelect";

interface FormValues {
  title: string;
  type: ClaimTypes;
  description: string;
  status: ClaimStatuses;
}

const AddClaimPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [claimTypes, setClaimTypes] = useState([]);
  const [typesLoading, setTypesLoading] = useState(false);

  useEffect(() => {
    setTypesLoading(true);
    ClaimService.getClaimTypes()
      .then((resp) => {
        setClaimTypes(resp.data);
        setType(resp.data[0].slug)
        setTypesLoading(false);
      })
      .catch(() => {
        setError("Claim types was not loaded");
        setTypesLoading(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.status = ClaimStatuses.new;
    ClaimService.addClaim(data)
      .then(() => {
        navigate(-1);
      })
      .catch((e) => {
        setError("Claim was not added");
      });
  };

  return (
    <Grid>
      <Header showSearchString={false} />
      <Grid marginTop={6} style={{ fontSize: 36, fontWeight: 700 }}>
        Creating new claim
      </Grid>
      {typesLoading ? (
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
              value={title}
              title="TITLE"
              register={{ ...register("title", { required: true }) }}
              errors={errors.title}
              placeholder="Type claim"
              onChange={setTitle}
            />
          </Grid>
          <Grid style={{ marginTop: 30 }} xs={6}>
            <MySelect
              title="TYPE"
              register={{ ...register("type", { required: true }) }}
              errors={errors.title}
              placeholder="Select type"
              onSelect={setType}
              defaultValue={type}
              options={claimTypes}
            />
          </Grid>
          <Grid style={{ marginTop: 30 }} xs={6}>
            <MyInput
              title="DESCRIPTION"
              value={description}
              register={{ ...register("description") }}
              placeholder="Type claim description"
              onChange={setDescription}
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
              <MyButton value="Done" type={ButtonType.submit} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default AddClaimPage;
