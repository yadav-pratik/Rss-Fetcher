import React from "react"
import { useSelector, useDispatch} from 'react-redux'

import { setSource } from "../../actions/sourceActions"

const UserSelection = (props) => {
    const categories = ['latest', 'india', 'technology', 'cricket']

    const dispatch = useDispatch()

    const category = useSelector((state)=>{
        return state.category
    })
    const source = useSelector((state)=>{
        return state.source
    })

    const handleChange = (e) => {
        const name = e.target.name
        if(name === 'source'){
            dispatch(setSource(e.target.value))
        } else if(name === 'category'){
            dispatch()
        }
    }

    return (
        <div>
            <h2>You are seeing the {category.charAt(0).toUpperCase() + category.slice(1)} articles from {source}</h2>
            <form>
                <label>Change the Source of Articles</label>
                <select 
                    value={source} 
                    onChange={handleChange}
                    name="source"
                >
                    <option value="TOI">Times of India</option>
                    <option value="NDTV">NDTV</option>
                </select>
                <label>Change the Category</label>
                <select 
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
            </form>
        </div>
    )
}

export default UserSelection