import { useContext } from 'react'
import arrowExpand from '../assets/svg/arrow-expand.svg'
import { PageContext, SortedBy } from '../context/PageContext'
import { SearchBar } from './SearchBar'

export function TableHeader() {
    const { sortDataBy, pageState: { sortedBy } } = useContext(PageContext)



    const arrowClass = (expected: SortedBy) =>
        sortedBy === expected ? "active" : ""

    return (
        <div className="table_header">
            <div className="data_id" onClick={() =>sortDataBy(SortedBy.Id)}>
                <h2>ID</h2>
                <img src={arrowExpand} alt="arrow-expand" className={arrowClass(SortedBy.Id)} />
            </div>
            <div className="data_title" onClick={() => sortDataBy(SortedBy.Title)}>
                <h2>Заголовок</h2>
                <img src={arrowExpand} alt="arrow-expand" className={arrowClass(SortedBy.Title)} />
            </div>
            <div className="data_body" onClick={() => sortDataBy(SortedBy.Body)}>
                <h2>Описание</h2>
                <img src={arrowExpand} alt="arrow-expand" className={arrowClass(SortedBy.Body)} />
            </div>
            <SearchBar />
        </div>
    )
}