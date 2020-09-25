import React, {useState} from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {
    restorePassTC,
    setStatusMessage
} from "../../../a1-main/m2-bll/reducers/passwordRestore_reducer";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {RouterPathEnum} from "../../../a1-main/m1-ui/routes/routerPathsEnum";

export type DataRestoreType = { // this type write in API
    email: string
    from: string
    message: string
}

const validate = (values: any) => {
    if (!values.email) {
        return {
            email: 'Email is required'
        }
    }
}

export const RestorePage = () => { // forgot

    const isCorrectEmail = useSelector<AppRootStateType, boolean>(state => state.restorePassword.isCorrectEmail)
    const statusMessage = useSelector<AppRootStateType, string>(state => state.restorePassword.message)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            from: "test-front-admin <andriiyarotskiy@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px">
            password recovery link: <a href='http://localhost:3000/cards#/password_restoration/$token$'>
            link</a></div>` // хтмп-письмо, вместо $token$ бэк вставит токен
        },
        validate,
        onSubmit: values => {
            dispatch(restorePassTC(values))
        },
    });
    // redirect to page new Password
    if (isCorrectEmail) {
        return <Redirect to={RouterPathEnum.NEW_PASSWORD}/>
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit" disabled={statusMessage === 'loading...'}>Submit</button>
            {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
            {statusMessage}
        </form>
    );
}