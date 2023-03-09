import magnifier from "../assets/svg/magnifier.svg"
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";


export function SearchBar() {
    const {data, changeDataArray, searchBarValue, changeSearchBarValue} = useContext(PageContext)

    const inputHandler =(event:React.ChangeEvent<HTMLInputElement>) => {
        changeSearchBarValue(event.target.value)
        filterData()
    }

    const filterData = () => {
        if(searchBarValue.length >= 3) {
            const filteredData = [...data].filter(data => {
              return data.body.includes(searchBarValue) || data.title.includes(searchBarValue)
            })
            changeDataArray(filteredData)
        }
    }

    return(
        <div className="table_search-bar"> 
            <input id="search" type="text" placeholder="Поиск" value={searchBarValue} onChange={inputHandler}/>
            <label htmlFor="search">
                <img src={magnifier} alt="magnifier" />
            </label>
        </div>
    )
}