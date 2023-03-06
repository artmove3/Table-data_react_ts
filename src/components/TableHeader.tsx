import arrowExpand from '../assets/svg/arrow-expand.svg'

export function TableHeader() {
    return (
        <div className="table_header">
            <div className="data_id">
                <h2>ID</h2>
                <img src={arrowExpand} alt="arrow-expand" />
            </div>
            <div className="data_title">
                <h2>Заголовок</h2>
                <img src={arrowExpand} alt="arrow-expand" />
            </div>
            <div className="data_body">
                <h2>Описание</h2>
                <img src={arrowExpand} alt="arrow-expand" />
            </div>
        </div>
    )
}