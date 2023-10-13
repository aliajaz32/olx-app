function reducer ( state= { ads:[] },action ) {
        console.log("reducer =>" , action )

        switch (action.type){
            case "ADD_USER": return {...state, user : action.payload}
            case 'ADD_ADS': return { ...state, ads: action.payload }
            case "REMOVE_USER" : return {...state, user: null}
            default : return state
        }
}

export default reducer ;