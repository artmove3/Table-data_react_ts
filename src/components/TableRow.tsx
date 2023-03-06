import { IData } from "../models"

interface DataProps {
    props: IData
}

export function TableRow(data: DataProps) {

    const dataProps = data.props

    return(
        <div className="data_row">
            <div className="data_id cell">
                <p>{dataProps.id}</p>
            </div>
            <div className="data_title cell">
                <p>{dataProps.title}</p>
            </div>
            <div className="data_body cell">
                <p>{dataProps.body}</p>
            </div>
        </div>
    )
}