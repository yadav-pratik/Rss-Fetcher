const initialArticlesValue = []

const articlesReducer = (state = initialArticlesValue, action) => {
    switch(action.type){
        default : {
            return [...initialArticlesValue]
        }
    }
}

export default articlesReducer