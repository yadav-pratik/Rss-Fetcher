const initialArticlesValue = []

const articlesReducer = (state = initialArticlesValue, action) => {
    switch(action.type){
        case 'SET_ARTICLES' : {
            return [...action.payload]
        }
        default : {
            return [...initialArticlesValue]
        }
    }
}

export default articlesReducer