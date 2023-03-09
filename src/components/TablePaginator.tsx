import { IProps } from "../models"
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";

export function TablePaginator(props:IProps) {

    const {page, changePage, data} = useContext(PageContext)
    
    const numberOfPage = Math.ceil(data.length / props.numberOfdataOnPage)

    const paginatorList:number[] = [...Array(numberOfPage).keys()]
    
    const clickHandler =(event:React.MouseEvent<HTMLButtonElement>) => {
        changePage(+event.currentTarget.value)

    }

    const pageBackwardHandler = () => {
        if(page === 1) return 
        changePage(page - 1)
    }

    const pageForwardHandler = () => {
        if(page === numberOfPage) return
        changePage(page + 1)
    }

    return (
        <div className="table_paginator">
            <h1 className="paginator-backward" onClick={pageBackwardHandler}>Назад</h1>
            <div className="paginator_list">
                {paginatorList.map((num, i) => <button 
                type="button" 
                value={num+1} 
                key={i}
                onClick={clickHandler}
                >{num+1}</button>)}
            </div>
            <h1 className="paginator-forward" onClick={pageForwardHandler}>Далее</h1>
        </div>
    )
    
}