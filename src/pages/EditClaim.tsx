import { Grid } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import MyInput from '../components/UI/MyInput'
import MySelect from '../components/UI/MySelect'
import { currToken } from '../token'

interface FormValues {
    title: string;
    type: string;
    description: string;
  }

const EditClaim = (props:any) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>();
      const apiUrl = `https://mysterious-tundra-84714.herokuapp.com/claim/${props.claim.id}`;
      let config = {
        headers: {
          Authorization: currToken,
        },
      };
      const onSubmit: SubmitHandler<FormValues> = (data) =>
        axios.put(apiUrl, data, config);
    
    return (
        <Grid>
      <Grid style={{ fontSize: 36, fontWeight: 700 }}>Incoming claim</Grid>
      <Grid
        container
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        direction="column"
      >
        <Grid style={{ marginTop: 30 }}>
          <MyInput
            value={props.claim.title}
            title="TITLE"
            register={{ ...register("title", { required: true }) }}
            errors={errors.title}
            placeholder="Type claim"
          />
        </Grid>
        <Grid style={{ marginTop: 30 }}>
          <MySelect
            title="TYPE"
            register={{ ...register("type", { required: true }) }}
            errors={errors.title}
            placeholder="Select type"
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
        <Grid style={{ marginTop: 30 }}>
          <MyInput
            value={props.claim.description}
            title="DESCRIPTION"
            register={{ ...register("description") }}
            placeholder="Type claim description"
          />
        </Grid>
        <Grid style={{ marginTop: 30 }}>
          <input type="submit" value="Create" />
        </Grid>
      </Grid>
    </Grid>
    )
}

export default EditClaim
