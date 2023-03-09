import { useContext } from 'react'
import arrowExpand from '../assets/svg/arrow-expand.svg'
import { PageContext } from '../context/PageContext'
import { SearchBar } from './SearchBar'


export function TableHeader() {

    const {data, changeDataArray} = useContext(PageContext)

    const sortDataById = () => {
        const sortedData = [...data]
        changeDataArray(sortedData.sort((a, b) => b.id - a.id)) 
    }

    const sortDataByTitle = () => {
        const sortedData = [...data]
        changeDataArray(sortedData.sort((a, b) => b.title.length - a.title.length))
    }

    const sortDataByBody = () => {
        const sortedData = [...data]
        changeDataArray(sortedData.sort((a, b) => b.body.length - a.body.length))
    }

    return (
        <div className="table_header">
            <div className="data_id" onClick={sortDataById}>
                <h2>ID</h2>
                <img src={arrowExpand} alt="arrow-expand" />
            </div>
            <div className="data_title"  onClick={sortDataByTitle}>
                <h2>Заголовок</h2>
                <img src={arrowExpand} alt="arrow-expand" />
            </div>
            <div className="data_body" onClick={sortDataByBody}>
                <h2>Описание</h2>
                <img src={arrowExpand} alt="arrow-expand" />
            </div>
            <SearchBar />
        </div>
    )
}