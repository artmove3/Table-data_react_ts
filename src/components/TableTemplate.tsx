import { dataArray } from "../assets/data/data";
import { TableRow } from "./TableRow";



export function TableTemplate() {

    

    return(
        <TableRow props={dataArray[5]}/>
    )
}