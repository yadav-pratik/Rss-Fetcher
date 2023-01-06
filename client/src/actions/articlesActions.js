import axios from 'axios'

import { normalAlert } from '../sweetAlerts/sweetAlerts'

export const startGetArticles = (source, category, pageNo, posts) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3040/api/articles/list/?source=${source}&category=${category}&page=${pageNo}&posts=${posts}`)
            dispatch(setArticles(data))
        } catch (error) {
            normalAlert(error, 'error')
        }
    }
}

const setArticles = (articles) => {
    return {
        type : 'SET_ARTICLES',
        payload : articles
    }
}