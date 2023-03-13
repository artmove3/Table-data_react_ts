import magnifier from "../assets/svg/magnifier.svg"
import { useContext } from 'react'
import { PageContext } from "../context/PageContext";


export function SearchBar() {
    const {searchBarValue, changeSearchBarValue, filterData} = useContext(PageContext)

    const search = (value:string) => {
        if(value.length >= 3 || +value >= 1) {
            return filterData(item => {
                return item.body.includes(value) || item.title.includes(value) || item.id === +value
            })
        } 
        filterData(null)
        
    }

    const inputHandler =(event:React.ChangeEvent<HTMLInputElement>) => {
        changeSearchBarValue(event.target.value)
        search(event.target.value.toLowerCase())
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