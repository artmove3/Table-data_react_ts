import magnifier from "../assets/svg/magnifier.svg"
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";


export function SearchBar() {
    const {data, searchBarValue, changeSearchBarValue, changeSearchedData} = useContext(PageContext)

    const inputHandler =(event:React.ChangeEvent<HTMLInputElement>) => {
        changeSearchBarValue(event.target.value)
        filterData(event.target.value)
    }


    const filterData = (value:string) => {
        
        const initialData = [{userId: 0, id: 0, title: '', body: ''}]

        if(value.length >= 3 || +value > 1) {
            const filteredData = [...data].filter(data => {
              return data.body.includes(value) || data.title.includes(value) || data.id === +value
            })
           // change searched data or set initial data, if filter return empty array
           return changeSearchedData(filteredData.length > 0 ? filteredData : initialData)

        }
        // set initial data if condition doesn't match
        changeSearchedData(initialData)
        
    }

    return(
        <div className="table_search-bar"> 
            <input id="search" type="text" placeholder="Поиск" autoComplete="off" value={searchBarValue} onChange={inputHandler}/>
            <label htmlFor="search">
                <img src={magnifier} alt="magnifier" />
            </label>
        </div>
    )
}