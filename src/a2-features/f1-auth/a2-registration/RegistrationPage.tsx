import React, {useState} from "react";
import {Button} from "../../../a1-main/m1-ui/common/button/Button";
import {Checkbox} from "../../../a1-main/m1-ui/common/checkbox/Checkbox";
import {Input} from "../../../a1-main/m1-ui/common/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../a1-main/m2-bll/store";
import {registrationTC} from "../../../a1-main/m2-bll/reducers/signup_reducer";
import { Redirect } from "react-router-dom";


export const RegistrationPage = () => {
    let registration = useSelector<AppRootStateType, boolean>(state => state.registration.registrationResponse)
    let dispatch = useDispatch()
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    // let [isChecked, setIsChecked] = useState<boolean>(false)
    console.log(registration)
    let butonHandler = () => {

        setEmail(email)
        setPassword(password)
        alert(`email is:${email} and password is:${password}`)
        dispatch(registrationTC({email, password}))
    }
    if (registration){
        return <Redirect to={'/login'}/>
    }
    // const checkboxHandler = ({ target: { checked } }:any) => {
    //     console.log(isChecked);
    //     setIsChecked(checked);
    //
    // };


    return (
        <div>
            <Input name={email} placeholder={'email'} type={'input'} label={'email'} value={email} onChange={(e) => {
                setEmail(e.currentTarget.value)
            }}/>
            <Input name={password} placeholder={'password'} label={'password'} value={password} onChange={(e) => {
                setPassword(e.currentTarget.value)
            }}/>
            {/*<Checkbox label={'remember me'} id={'remember me'} checked={isChecked} onChange={checkboxHandler}/>*/}
            <div>
                <span>forgot?</span>
            </div>
            <Button name={'Sign in'} onClick={butonHandler}/>
            <div>
                <span>register</span>
            </div>
        </div>
    )
}