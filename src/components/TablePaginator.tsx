import { IProps } from "../models"
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";

export function TablePaginator({numberOfdataOnPage, currentData}:IProps) {

    const {page, changePage} = useContext(PageContext)

    
    // count number of page based on currentData
    const numberOfPage = Math.ceil(currentData.length / numberOfdataOnPage)

    const paginatorList:number[] = [...Array(numberOfPage).keys()]
    const pageArr = document.querySelectorAll('.paginator-page')

    const clearPaginatorButtons = () => {
        pageArr.forEach(page => page.classList.remove('clicked'))
    }
    
    const clickHandler =(event:React.MouseEvent<HTMLButtonElement>) => {
        changePage(+event.currentTarget.value)
        clearPaginatorButtons()
        event.currentTarget.classList.add('clicked')
    }

    const pageBackwardHandler = () => {
        if(page === 1) return 
        changePage(page - 1)
        clearPaginatorButtons()
        pageArr[page - 1].classList.add('clicked')
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
                className="paginator-page"
                value={num+1} 
                key={i}
                onClick={clickHandler}
                >{num+1}</button>)}
            </div>
            <h1 className="paginator-forward" onClick={pageForwardHandler}>Далее</h1>
        </div>
    )
    
}