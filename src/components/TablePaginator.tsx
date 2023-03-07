import { dataArray } from "../assets/data/data"
import { IProps } from "../models"

export function TablePaginator(numberOfdataOnPage:IProps) {
    
    const numberOfPage = Math.floor(dataArray.length / numberOfdataOnPage.props)

    const paginatorList:number[] = [...Array(numberOfPage).keys()]
    

    return (
        <div className="table_paginator">
            <h1 className="paginator-backward">Назад</h1>
            <div className="paginator_list">
                {paginatorList.map((num, i) => <button type="button" value={num+1} key={i}>{num+1}</button>)}
            </div>
            <h1 className="paginator-forward">Далее</h1>
        </div>
    )
    
}