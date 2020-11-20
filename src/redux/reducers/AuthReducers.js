const INIT={
    username:'',
    isLogin:false,
    isLoading:false
}

export default (state=INIT,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state,isLogin:true,username:action.payload,isLoading:false}
        case 'LOGOUT':
            return INIT
        case 'LOADING':
            return {...state,isLoading:true}
        case 'ERROR':
            return {...state,isLoading:false}
        default:
            return state
    }
}