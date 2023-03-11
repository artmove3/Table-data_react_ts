import { useContext } from 'react'
import arrowExpand from '../assets/svg/arrow-expand.svg'
import { PageContext } from '../context/PageContext'
import { SearchBar } from './SearchBar'


export function TableHeader() {

    const {data, changeDataArray, searchedData, changeSearchedData} = useContext(PageContext)
    const currentData = searchedData[0].id > 0 ? [...searchedData] : [...data]
    const sortDataById = () => {
        const sortedData = [...currentData]
        sortedData === searchedData ? changeDataArray(sortedData.sort((a, b) => b.id - a.id)) : changeSearchedData(sortedData.sort((a, b) => b.id - a.id))

    }

    const sortDataByTitle = () => {
        const sortedData = [...currentData]
        sortedData === searchedData ? 
        changeDataArray(sortedData.sort((a, b) => b.title.length - a.title.length)) 
        : 
        changeSearchedData(sortedData.sort((a, b) => b.title.length - a.title.length))

    }

    const sortDataByBody = () => {
        const sortedData = [...currentData]
        sortedData === searchedData ? 
        changeDataArray(sortedData.sort((a, b) => b.body.length - a.body.length)) 
        : 
        changeSearchedData(sortedData.sort((a, b) => b.body.length - a.body.length))

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