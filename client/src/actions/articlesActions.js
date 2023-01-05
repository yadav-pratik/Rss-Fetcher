import axios from 'axios'

export const startGetArticles = (source, category, page, posts) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3040/api/articles/list/?source=${source}&category=${category}&page=${page}&posts=${posts}`)
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }
}