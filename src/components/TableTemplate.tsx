import { dataArray } from "../assets/data/data";
import { IData } from "../models";
import { TableRow } from "./TableRow";
import { IProps } from "../models";



export function TableTemplate(numberOfdataOnPage:IProps) {

    
    let localPageData:IData[] = []

    for(let i = 0; i <= dataArray.length; i++) {
       localPageData[i] = dataArray[i]
       
       if(((i + 1) % numberOfdataOnPage.props === 0) && i !== 0) break
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