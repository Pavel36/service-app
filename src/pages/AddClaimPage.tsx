import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import ClaimService from "../api/ClaimService";
import MyInput from "../components/UI/MyInput";
import MySelect from "../components/UI/MySelect";

interface FormValues {
  title: string;
  type: string;
  description: string;
}

const AddClaimPage = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    ClaimService.addClaim(data);

  return (
    <Grid>
      <Grid style={{ fontSize: 36, fontWeight: 700 }}>Creating new claim</Grid>
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
        <Grid style={{ marginTop: 30 }}>
          <button>Cancel</button>
          <button type="submit">Create</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddClaimPage;
