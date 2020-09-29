import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import {recoverPasswordTC} from "../../../a1-main/m2-bll/reducers/newPassword_reducer";


export const NewPasswordPage = () => {


    const passwordMessage = useSelector<AppRootStateType, string>(state => state.newPassword.message)
    const dispatch = useDispatch()

    let {id} = useParams(); // token from url

    const formik = useFormik({
        validate: (values) => {
            if (!values.password.trim())
                return {
                    password: 'password is required'
                }
        },
        initialValues: {
            password: '',
        },

        onSubmit: values => {
            dispatch(recoverPasswordTC({password: values.password, resetPasswordToken: id})) // как достать токен из url?
        }
    })

    return (
        <div>
            <h1>Reset password</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>New password</div>
                    <input
                        type="text"
                        placeholder={'password'}
                        {...formik.getFieldProps('password')}
                    />
                </div>
                <div>
                    <button type='submit'>Send</button>
                </div>
            </form>
            <h2 style={{color: "green"}}>{passwordMessage}</h2>
        </div>
    )
}