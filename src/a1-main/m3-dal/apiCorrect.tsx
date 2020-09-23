import axios from "axios";


export const projectRegister = {
    registration(data:registrationType){
        let promise= axios.post(`https://neko-back.herokuapp.com/2.0/auth/register`,data)
        return promise
    }
}


export type registrationType = {
    email:string
    password:string
}
