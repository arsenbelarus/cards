import React, {useState} from "react";
import { Button } from "../../../a1-main/m1-ui/common/button/Button";
import {Checkbox} from "../../../a1-main/m1-ui/common/checkbox/Checkbox";
import {Input} from "../../../a1-main/m1-ui/common/input/Input";



export const RegistrationPage = () => {
    let [email, setEmail] = useState<string>('')
    let [password,setPassword]=useState<string>('')
    let [isChecked, setIsChecked] = useState<boolean>(false)

      let butonHandler = ()=>{
          setEmail(email)
          setPassword(password)
          alert(`email is:${email} and password is:${password}`)
    }

    const checkboxHandler = ({ target: { checked } }:any) => {
        console.log(isChecked);
        setIsChecked(checked);
    };


  return (
    <div>
        <Input name={email} placeholder={'email'} type={'input'} label={'email'} value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
        <Input name={password} placeholder={'password'}label={'password'} value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
        <Checkbox label={'remember me'} id={'remember me'} checked={isChecked} onChange={checkboxHandler}/>
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