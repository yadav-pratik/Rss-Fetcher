import React from "react"
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"

import { setPageNo } from "../../actions/pageNoActions"
import { setPostsPerPage } from "../../actions/postsPerPageActions"

const PaginationComp = (props) => {
    const dispatch = useDispatch()

    const pageNo = useSelector((state)=> {
        return state.pageNo
    })

    const postsPerPage = useSelector((state)=> {
        return state.postsPerPage
    })
    
    let items = []
    for (let i = 1; i <= 5; i++) {
        items.push(
            <Pagination.Item 
                key={i} 
                active={i === pageNo} 
                onClick={()=>{dispatch(setPageNo(i))}}
            >
                {i}
            </Pagination.Item>
        )
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
            <form>
                <label>Articles per page</label>
                <select 
                    value={postsPerPage} 
                    onChange={(e)=>dispatch(setPostsPerPage(e.target.value))}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </form>
        </div>
    )
}

export default PaginationComp