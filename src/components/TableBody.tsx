import { TableRow } from "./TableRow";
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";

export function TableBody() {
    const {pageState: { data }} = useContext(PageContext)

    return (
        <div className="table_body">
            {data.length !== 0 ?(data.map(data => <TableRow props={data} key={data.id}/>)) : <h1>No data found</h1>}
        </div>
    )
}