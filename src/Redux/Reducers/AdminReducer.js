const initialState ={
    Record:[]
}


const AdminReducer = (state=initialState,action) =>{
    switch(action.type){
        case'REGISTER_USER':
        const register_list = state.Record; 
        register_list.push(action.payload)
        localStorage.setItem("test",JSON.stringify(register_list))
        return{
            ...state,
            Record:[...register_list]
        }
        break;
        case'LOGIN_USER':
        var token;
        var errmessage;
        const login_list = JSON.parse(localStorage.getItem("test"));
        var obj = login_list.find(o => o["Email"]);
        if(action.payload.Email === obj.Email && action.payload.Password === obj.Password){
            token = (Math.random() + 1).toString(36).substring(7);
            console.log("Token",token)
            localStorage.setItem("token",JSON.stringify(token))
        }else{
            errmessage = "UserName or Password Incorrect";
        }
        return{
            ...state,
            Record:[...login_list],
            isLogin:token,
            error:errmessage
        }
        break;
        default:
            return state
    }
}

export default AdminReducer