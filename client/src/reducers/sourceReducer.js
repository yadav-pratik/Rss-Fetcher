const initialSourceValue = 'TOI'

const sourceReducer = (state = initialSourceValue, action) => {
    switch(action.type){
        default : {
            return initialSourceValue
        }
    }
}

export default sourceReducer