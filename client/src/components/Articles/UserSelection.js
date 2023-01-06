import React from "react"
import { useSelector, useDispatch} from 'react-redux'

import { setSource } from "../../actions/sourceActions"
import { setCategory } from "../../actions/categoryActions"
import { setPostsPerPage } from "../../actions/postsPerPageActions"

const UserSelection = (props) => {
    const categories = ['latest', 'india', 'technology', 'cricket']

    const dispatch = useDispatch()

    const category = useSelector((state)=>{
        return state.category
    })
    const source = useSelector((state)=>{
        return state.source
    })
    const postsPerPage = useSelector((state)=> {
        return state.postsPerPage
    })

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'source'){
            dispatch(setSource(e.target.value))
        } else if(name === 'category'){
            dispatch(setCategory(e.target.value))
        }
    }

    return (
        <div className="mt-3 mb-4">
            <h2 className="text-center">You are seeing the {category.charAt(0).toUpperCase() + category.slice(1)} articles from {source}</h2>
            <div className="d-flex justify-content-between mt-3">
                <form>
                    <label>Articles per page</label>
                    <select 
                        className="form-control"
                        value={postsPerPage} 
                        onChange={(e)=>dispatch(setPostsPerPage(e.target.value))}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </form>
                <form className="d-flex justify-content-end">
                    <div className="form-group  me-5">
                        <label>Change the Source of Articles</label>
                        <select 
                            className="form-control"
                            value={source} 
                            onChange={handleChange}
                            name="source"
                        >
                            <option value="TOI">Times of India</option>
                            <option value="NDTV">NDTV</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Change the Category</label>
                        <select 
                            className="form-control"
                            value={category}
                            onChange={handleChange}
                            name="category"
                        >
                            {categories.map((cat , i) => {
                                return <option
                                    key={i}
                                    value={cat}
                                >{cat.charAt(0).toUpperCase()+cat.slice(1)}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserSelection