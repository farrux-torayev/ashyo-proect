import { instance } from "@/hooks/instance"
import { useMutation } from "@tanstack/react-query"
import { setCookie } from "cookies-next"


interface LoginType{
    email :string
    password:string
}

export const Login = () =>{
    return useMutation({
        mutationFn:(data:LoginType)=> instance().post("/auth/login" ,data ).then(res =>{
        setCookie("TOKEN", res.data.accessToken)
        })
    })
    
}
interface RegisterType{
    email :string
    password:string
}
export const Register = () =>{
    return useMutation({
        mutationFn:(data:RegisterType)=> instance().post("/auth/register" ,data ).then(res =>{
         setCookie("TOKEN", res.data.accessToken)
        })
    })
    
}