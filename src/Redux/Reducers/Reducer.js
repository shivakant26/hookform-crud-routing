const initialState = {
    data:[
        {
            firstName:"jhon",
            lastName:"Doe"
        }
    ]
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case 'ADD' :
            let list = state.data;
            list.push(action.payload);
            return{
                ...state,
                isEdit:null,
                data:[...list]
            }
            break;
            case 'DELETE' :
            let list1 = state.data;
            list1.splice(action.payload,1);
            return{
                ...state,
                data:[...list1]
            }
            break;
            case 'EDIT' :
            let editlist = state.data;
            let current_object = editlist[action.payload];
            return{
                ...state,
                isEdit:current_object,
                id:action.payload
            }
            break;
            case 'UPDATE':
                var updatelist = state.data;
                updatelist.splice(action.id,1,{
                    firstName:action.payload.firstName,
                    lastName:action.payload.lastName
                })
                return{
                    ...state,
                    isEdit:null,
                    data:[...updatelist]
                }
                break;
            default:
                return state;
    }

}

export default reducer;