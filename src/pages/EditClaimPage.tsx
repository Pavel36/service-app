import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ClaimService from "../api/ClaimService";
import MyInput from "../components/UI/MyInput";
import MySelect from "../components/UI/MySelect";
import { currToken } from "../token";

interface FormValues {
  title: string;
  type: string;
  description: string;
  status:string;
}

const EditClaimPage = (props: any) => {

  const [title, setTitle] = useState(props.claim.title);
  const [type, setType] = useState(props.claim.type.name);
  const [description, setDescription] = useState(props.claim.description);
  const [status, setStatus] = useState(props.claim.status.name);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>{
    ClaimService.editClaim(props.claim._id,data);
  }
    

  return (
    <Grid>
      <Grid style={{ fontSize: 36, fontWeight: 700 }}>Incoming claim</Grid>
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
            defaultValue={type}
            onSelect={setType}
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
          <MySelect
            title="STATUS"
            register={{ ...register("status", { required: true }) }}
            errors={errors.title}
            placeholder="Select status"
            defaultValue={status}
            onSelect={setStatus}
            options={[
              {
                name: "Declined",
                slug: "decl",
              },
              {
                name: "New",
                slug: "new",
              },
              {
                name: "Done",
                slug: "done",
              },
              {
                name: "In progress",
                slug: "in-progress",
              },
            ]}
          />
        </Grid>
        <Grid style={{ marginTop: 30 }} xs={6}>
          <MyInput
            value={description}
            title="DESCRIPTION"
            register={{ ...register("description") }}
            placeholder="Type claim description"
            onChange={setDescription}
          />
        </Grid>
        <Grid style={{ marginTop: 30 }}>
          <button>Cancel</button>
          <button type="submit">Done</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditClaimPage;
