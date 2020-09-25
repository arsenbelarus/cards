import React, {useState} from "react";
import {Button} from "../../../a1-main/m1-ui/common/button/Button";
import {Input} from "../../../a1-main/m1-ui/common/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {registrationTC, RequestStatusType} from "../../../a1-main/m2-bll/reducers/signup_reducer";
import {Redirect} from "react-router-dom";
import {LinearProgress} from "@material-ui/core";
import {useFormik} from "formik";
import {registrationType} from "../../../a1-main/m3-dal/apiCorrect";

const validate = (values:registrationType) => {
    const errors:any = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = 'Must be more then 7 characters';
    }

    return errors;
};

export const RegistrationPage = () => {
    let status = useSelector<AppRootStateType, RequestStatusType>(state => state.registration.status)
    let registration = useSelector<AppRootStateType, boolean>(state => state.registration.registrationResponse)
    let dispatch = useDispatch()

    // let [email, setEmail] = useState<string>('')
    // let [password, setPassword] = useState<string>('')
    // let [isChecked, setIsChecked] = useState<boolean>(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validate,
        onSubmit: values => {
            dispatch(registrationTC(values))
            alert(JSON.stringify(values, null, 2));
        }
    });
    // console.log(registration)
    // let butonHandler = () => {
    //
    //     setEmail(email)
    //     setPassword(password)
    //     alert(`email is:${email} and password is:${password}`)
    //     dispatch(registrationTC({email, password}))
    // }
    if (registration) {
        return <Redirect to={'/login'}/>
    }
    // const checkboxHandler = ({ target: { checked } }:any) => {
    //     console.log(isChecked);
    //     setIsChecked(checked);
    //
    // };


    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                {status === 'loading' && <LinearProgress/>}
                <Input
                    id='email'
                    name='email'
                    type='email'
                    label="email"
                    // margin="normal"
                    {...formik.getFieldProps('email')}
                    // name={email}
                    // placeholder={'email'}
                    // // type={'input'}
                    // label={'email'}
                    // value={email}
                    // onChange={(e) => {
                    //     setEmail(e.currentTarget.value)
                    // }}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                <Input
                    id='password'
                    name='password'
                    type='password'
                    label="password"
                    // margin="normal"
                    {...formik.getFieldProps('password')}

                // name={password}
                    // placeholder={'password'}
                    // label={'password'}
                    // value={password}
                    // onChange={(e) => {
                    //     setPassword(e.currentTarget.value)}}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                {/*<Checkbox label={'remember me'} id={'remember me'} checked={isChecked} onChange={checkboxHandler}/>*/}
                <div>

                    <span>forgot?</span>
                </div>
                <Button name={'Sign in'}
                        // onClick={butonHandler}
                    disabled={status === 'loading'}
                />
                <div>
                    <span>register</span>
                </div>
            </form>
        </div>
    )
}