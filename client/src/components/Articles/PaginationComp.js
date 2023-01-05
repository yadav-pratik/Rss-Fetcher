import React from "react"
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"

import { setPageNo } from "../../actions/pageNoActions"

const PaginationComp = (props) => {
    const dispatch = useDispatch()

    const pageNo = useSelector((state)=> {
        return state.pageNo
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
                {/* <select value={} onChange={()=>dispatch()}></select> */}
            </form>
        </div>
    )
}

export default PaginationComp