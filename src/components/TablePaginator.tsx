import { useContext } from 'react'
import { PageContext } from "../context/PageContext";
import { PageButton } from "./PageButton";

export function TablePaginator() {
    const {pageCount, nextPage, prevPage} = useContext(PageContext)

    return (
        <div className="table_paginator">
            <h1 className="paginator-backward" onClick={prevPage}>Назад</h1>
            <div className="paginator_list">
                {Array(pageCount).fill(null).map((_, i) => <PageButton index={i} key={i} />)}
            </div>
            <h1 className="paginator-forward" onClick={nextPage}>Далее</h1>
        </div>
    )
}