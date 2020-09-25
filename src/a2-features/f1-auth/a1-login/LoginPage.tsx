import React from "react";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import { Redirect } from "react-router-dom";
import {RouterPathEnum} from "../../../a1-main/m1-ui/routes/routerPathsEnum";
import {FormErrorType, LoginParamsType} from "../../../a1-main/m3-dal/login-api";
import {loginTC} from "../../../a1-main/m2-bll/reducers/login_reducer";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField
} from "@material-ui/core";


export const LoginPage = () => {
  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
  const dispatch = useDispatch()

  const validate = (values: LoginParamsType) => {
    const errors: FormErrorType = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 4) {
      errors.password = 'Must be at least 4 characters long'
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate,
    onSubmit: values => {
      dispatch(loginTC(values));
    },
  })

  if (isLoggedIn) {
    return <Redirect to={RouterPathEnum.PROFILE}/>
  }

  return (
    <Grid container justify="center">
      <Grid item style={{padding: "20px", backgroundColor: "#efc700", color: "ivory", marginTop: "40px",
        borderRadius: "10px", textAlign: "center", boxShadow: "0 0 5px 1px lightgrey"}}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email ? <div style={{color: "#282c34"}}> {formik.errors.email} </div> : null}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password ? <div style={{color: "#282c34"}}> {formik.errors.password} </div> : null}
              <FormControlLabel
                label={'Remember me'}
                control={<Checkbox onChange={formik.handleChange}
                                   checked={formik.values.rememberMe}
                                   name="rememberMe"/>}
              />
              <Button type={'submit'} variant={'contained'} color={'primary'} style={{backgroundColor: "#282c34"}}>Login</Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
}