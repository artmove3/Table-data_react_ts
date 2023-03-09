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
}

export const PageContext = createContext<IPageContext>({
    page: 1,
    changePage: () => {},
    data: dataArray,
    changeDataArray: () => {},
    searchBarValue: '',
    changeSearchBarValue: () => {}

})

export const PageState = ({children}:{children:React.ReactNode}) => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState(dataArray)
    const [searchBarValue, setSearchBarValue] = useState('')

    const changePage = (value:number) => setPage(value)
    const changeDataArray = (arr:Array<IData>) => setData(arr)
    const changeSearchBarValue = (value:string) => setSearchBarValue(value)
    
    return (
        <PageContext.Provider value={{page, changePage, data, changeDataArray, searchBarValue, changeSearchBarValue}}>
            { children }
        </PageContext.Provider>
    )
}