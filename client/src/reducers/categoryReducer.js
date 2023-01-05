const initialCategoryValue = 'latest'

const categoryReducer = (state = initialCategoryValue, action) => {
    switch(action.type){
        default : {
            return initialCategoryValue
        }
    }
}

export default categoryReducer