import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ClaimService from "../../api/ClaimService";
import Header from "../../components/Layout/Header";
import MyButton, { ButtonType } from "../../components/UI/MyButton";
import MyInput from "../../components/UI/MyInput";
import MySelect from "../../components/UI/MySelect";

interface FormValues {
  title: string;
  type: string;
  description: string;
  status: string;
}

const AddClaimPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    data.status = "new";
    await ClaimService.addClaim(data)
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
            options={[
              {
                name: "Hardware",
                slug: "hard",
              },
              {
                name: "Software",
                slug: "soft",
              },
              {
                name: "Networking",
                slug: "net",
              },
              {
                name: "Troubleshooting",
                slug: "troublesh",
              },
            ]}
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
    </Grid>
  );
};

export default AddClaimPage;
