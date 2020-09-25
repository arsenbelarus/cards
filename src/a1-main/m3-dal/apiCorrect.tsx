import axios from "axios";


export const projectRegister = {
    registration(data:registrationType){
        let promise= axios.post<ResponseType>(`https://neko-back.herokuapp.com/2.0/auth/register`,data)
        return promise
    }
}


export type registrationType = {
    email:string
    password:string
}
type ResponseType = {
    _id:string
    email:string
    rememberMe:boolean,
    isAdmin:boolean
    name:string
    verified:boolean
    publicCardPacksCount:number
    created:string
    updated:string
    __v:number
}
