import { TableRow } from "./TableRow";
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";

export function TableBody() {
    const {pageState: { data }} = useContext(PageContext)

    return (
        <div className="table_template">
            {data.map(data => <TableRow props={data} key={data.id}/>)}
        </div>
    )
}