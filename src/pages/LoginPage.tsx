import React from 'react'
import welcomeImg from './welcome.png'
import mainLogo from './Group4.svg'
import footerLogo from './Group5.svg'
import {Grid, Link } from '@mui/material'
import MyButton from '../components/UI/MyButton'
import { useForm, Resolver } from 'react-hook-form'

interface FormValues {
    email:string,
    password: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.email ? values : {},
      errors: !values.password
        ? {
            password: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
    };
  };

const LoginPage = () => {
    const {register, handleSubmit, formState: { errors } } = useForm<FormValues>({resolver})
    const onSubmit = handleSubmit((data)=>console.log(data))

    return (
        <Grid>
            <Grid container direction='row'>
                <Grid textAlign='center' sx={{background:'#D3EDE1F7', padding:8}} md={6}>
                    <img src={welcomeImg} style={{width:'90%'}} alt=''/>
                </Grid>
                <Grid container direction='column' justifyContent='center' sx={{paddingX:20}} md={6}>
                    <img src={mainLogo} alt=''/>
                    <form onSubmit={onSubmit}>
                        <Grid>
                            <label>
                                E-MAIL
                                <input type="email" {...register("email")} autoComplete="off"/>
                            </label>
                        </Grid>
                        
                        <label>
                            PASSWORD
                            <input type="password" {...register("password")} autoComplete="off"/>
                            {errors?.password && <p>{errors.password.message}</p>}
                        </label>
                        <input type="submit" value="Login"/>
                    </form>
                    <Grid sx={{textAlign:'center'}}>
                        Not a member? <Link>Request registration.</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{background:'#7DB59A', padding:16}}>
                <Grid style={{alignContent:'center'}}>
                    <img src={footerLogo} style={{width:80}} alt=''/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginPage