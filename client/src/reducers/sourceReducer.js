const initialSourceValue = 'TOI'

const sourceReducer = (state = initialSourceValue, action) => {
    switch(action.type){
        case 'SET_SOURCE' : {
            return action.payload
        }
        default : {
            return initialSourceValue
        }
    }
}

export default sourceReducer