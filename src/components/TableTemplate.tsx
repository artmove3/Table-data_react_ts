import { IData } from "../models";
import { TableRow } from "./TableRow";
import { IProps } from "../models";
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";



export function TableTemplate({numberOfdataOnPage, currentData}:IProps) {

    const {page} = useContext(PageContext)

    let localPageData:IData[] = []
    const startPoint = (page * numberOfdataOnPage) - numberOfdataOnPage
    const endPoint = startPoint + (numberOfdataOnPage - 1)

    
    for(let i = startPoint; i <= endPoint; i++) {
        if(!currentData[i]) break
        localPageData[i] = currentData[i]
       
    }

    function renderTableTemplate() {

        return (
            <div className="table_template">
                {localPageData.map(data => <TableRow props={data} key={data.id}/>)}
            </div>
        )
    }

    return renderTableTemplate()
    
}