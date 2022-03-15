export const Add = (data)=>{
    return{
        type:"ADD",
        payload:data
    }
}
export const EditData = (id)=>{
    return{
        type:"EDIT",
        payload:id
    }
}
export const UpdateData = (result,id)=>{
    return{
        type:"UPDATE",
        payload:result,
        id:id
    }
}
export const DeleteData = (id)=>{
    return{
        type:"DELETE",
        payload:id
    }
}