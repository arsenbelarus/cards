import React from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {
    restorePassTC
} from "../../../a1-main/m2-bll/reducers/passwordRestore_reducer";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";

export type EmailRestoreType = { // this type write in API
    email: string
}

const validate = (values: any) => {
    if (!values.email) {
        return {
            email: 'Email is required'
        }
    }
}

export const RestorePage = () => { // forgot

    const isLoading = useSelector<AppRootStateType, boolean>(state => state.restorePassword.isLoading)
    const statusMessage = useSelector<AppRootStateType, string>(state => state.restorePassword.message)
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            dispatch(restorePassTC(values))
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit" disabled={isLoading}>Submit</button>
            {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
            <div>
                {isLoading && <h1 style={{color: "yellow"}}>Loading...</h1>}
                <h1 style={{color: "green"}}>{statusMessage}</h1>
            </div>
        </form>
    );
}