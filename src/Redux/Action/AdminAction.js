export const RegisterUser = (data) =>{
    return {
        type:"REGISTER_USER",
        payload:data
    }
}
export const LoginUser = (data) =>{
    return {
        type:"LOGIN_USER",
        payload:data
    }
}