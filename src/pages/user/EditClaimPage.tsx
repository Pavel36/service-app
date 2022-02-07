import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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

const EditClaimPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [claimLoading, setClaimLoading] = useState(false);
  const [editedClaim, setEditedClaim] = useState();
  const [claimTypes, setClaimTypes] = useState([]);
  const [claimStatuses, setClaimStatuses] = useState([]);
  const [typesLoading, setTypesLoading] = useState(false);
  const [statusesLoading, setStatusesLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setClaimLoading(true);
    ClaimService.getClaim(location.state)
      .then((resp) => {
        const claim = resp.data;
        setEditedClaim(claim);
        setTitle(claim.title);
        setType(claim.type?.name);
        setDescription(claim.description);
        setStatus(claim.status?.name);
        setClaimLoading(false);
      })
      .catch((e) => {
        setError("Error claim loading");
        setClaimLoading(false);
      });
    setTypesLoading(true);
    ClaimService.getClaimTypes()
      .then((resp) => {
        setClaimTypes(resp.data);
        setTypesLoading(false);
      })
      .catch(() => {
        setError("Claim types was not loaded");
        setTypesLoading(false);
      });
    setStatusesLoading(true);
    ClaimService.getClaimStatuses()
      .then((resp) => {
        setClaimStatuses(resp.data);
        setStatusesLoading(false);
      })
      .catch(() => {
        setError("Claim statuses was not loaded");
        setStatusesLoading(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await ClaimService.editClaim(location.state, data)
      .then(() => {
        navigate(-1);
      })
      .catch((e) => {
        setError("Claim was not edited");
      });
  };

  return (
    <Grid>
      <Header showSearchString={false} />
      <Grid style={{ fontSize: 36, fontWeight: 700 }} marginTop={6}>
        Incoming claim
      </Grid>
      {(claimLoading || statusesLoading || typesLoading) ? (
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
            {errors?.title && <p>{errors.title.message}</p>}
          </Grid>
          <Grid style={{ marginTop: 30 }} xs={6}>
            <MySelect
              title="TYPE"
              register={{ ...register("type", { required: true }) }}
              errors={errors.title}
              placeholder="Select type"
              defaultValue={type}
              onSelect={setType}
              options={claimTypes}
            />
            {errors?.type && <p>{errors.type.message}</p>}
          </Grid>
          <Grid style={{ marginTop: 30 }} xs={6}>
            <MySelect
              title="STATUS"
              register={{ ...register("status", { required: true }) }}
              errors={errors.title}
              placeholder="Select status"
              defaultValue={status}
              onSelect={setStatus}
              options={claimStatuses}
            />
            {errors?.status && <p>{errors.status.message}</p>}
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

export default EditClaimPage;
