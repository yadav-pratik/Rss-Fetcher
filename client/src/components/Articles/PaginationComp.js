import React from "react"
import { Pagination } from 'react-bootstrap'

const PaginationComp = (props) => {
    let active = 2
    let items = []
    for (let i = 1; i <= 5; i++) {
        items.push(
            <Pagination.Item key={i} active={i === active}>
            {i}
            </Pagination.Item>
        )
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default PaginationComp