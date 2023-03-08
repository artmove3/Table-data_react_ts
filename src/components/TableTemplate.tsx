import { dataArray } from "../assets/data/data";
import { IData } from "../models";
import { TableRow } from "./TableRow";
import { IProps } from "../models";
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";



export function TableTemplate(props:IProps) {

    const {page} = useContext(PageContext)

    let localPageData:IData[] = []
    const startPoint = (page * props.numberOfdataOnPage) - props.numberOfdataOnPage
    const endPoint = startPoint + (props.numberOfdataOnPage - 1)


    for(let i = startPoint; i <= endPoint; i++) {
        if(!dataArray[i]) break
        localPageData[i] = dataArray[i]
       
    //    if(((i + 1) % props.numberOfdataOnPage === 0) && i !== 0) break
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