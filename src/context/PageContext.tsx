import { createContext, useState } from "react";
import { IData } from "../models";
import { dataArray } from "../assets/data/data";

interface IPageContext {
    page: number
    changePage: (value:number) => void
    data: IData[]
    changeDataArray: (arr:Array<IData>) => void
    searchBarValue: string
    changeSearchBarValue: (value:string) => void
    searchedData: IData[]
    changeSearchedData: (arr:Array<IData>) => void
}

export const PageContext = createContext<IPageContext>({
    page: 1,
    changePage: () => {},
    data: dataArray,
    changeDataArray: () => {},
    searchBarValue: '',
    changeSearchBarValue: () => {},
    searchedData: [{userId: 0, id: 0, title: '', body: ''}],
    changeSearchedData: () => {}

})

export const PageState = ({children}:{children:React.ReactNode}) => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState(dataArray)
    const [searchBarValue, setSearchBarValue] = useState('')
    const [searchedData, setSearchedData] = useState([{userId: 0, id: 0, title: '', body: ''}])

    const changePage = (value:number) => setPage(value)
    const changeDataArray = (arr:Array<IData>) => setData(arr)
    const changeSearchBarValue = (value:string) => setSearchBarValue(value)
    const changeSearchedData = (arr:Array<IData>) => setSearchedData(arr)
    
    return (
        <PageContext.Provider value={{page, changePage, data, changeDataArray, searchBarValue, changeSearchBarValue, searchedData, changeSearchedData}}>
            { children }
        </PageContext.Provider>
    )
}