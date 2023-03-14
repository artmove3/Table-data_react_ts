import { createContext, useState, useEffect, useCallback } from "react";
import { IData } from "../models";
import { dataArray } from "../assets/data/data";

export enum SortedBy {
    None,
    Id,
    Title,
    Body,
}

interface IPageState {
    index: number
    data: IData[]
    filtered: IData[]
    sortedBy: SortedBy
}

interface IPageContext {
    pageState: IPageState
    pageCount: number
    pageCapacity: number
    changePage: (value:number) => void
    nextPage: () => void
    prevPage: () => void
    filterData: (filter: ((item: IData) => boolean) | null) => void
    sortDataBy: (field: SortedBy) => void
    searchBarValue: string
    changeSearchBarValue: (value:string) => void
}

export const PageContext = createContext<IPageContext>({
    pageState: {
        index: 0,
        data: [],
        filtered: [],
        sortedBy: SortedBy.None,
    },
    pageCount: 0,
    pageCapacity: 0,
    filterData: () => {},
    changePage: () => {},
    nextPage: () => {},
    prevPage: () => {},
    sortDataBy: () => {},
    searchBarValue: '',
    changeSearchBarValue: () => {},
})

export const PageState = ({children}:{children:React.ReactNode}) => {
    const [pageCapacity] = useState(10)
    const [pageState, setPageState] = useState(() => {
        const split =  window.location.pathname.split('/')
        
        let index = 0
        // get page from url bar in browser and set as current index
        if (split.length >= 4 && split[split.length - 2] === 'page') {
            index = Math.max(+split[split.length - 1] - 1, 0)
        }
        const start = index * pageCapacity
        const data = dataArray.slice(start, start + pageCapacity)

        window.history.pushState({ index }, '', `/Table-data_react_ts/page/${index + 1}`)

        return {
            index,
            data,
            filtered: dataArray,
            sortedBy: SortedBy.None,
        }
    })
    const [searchBarValue, setSearchBarValue] = useState('')

    const pageCount = Math.ceil(pageState.filtered.length / pageCapacity)

    const changePageFn = useCallback((prev:IPageState, index:number, pushState: boolean) => {
        let data = prev.data
        if (index !== prev.index) {
            const start = index * pageCapacity
            data = prev.filtered.slice(start, start + pageCapacity)
            
            if (pushState) {
                window.history.pushState({ index }, '', `/Table-data_react_ts/page/${index + 1}`)
            }

        }

        

        return {
            ...prev,
            index,
            data,
        }
    }, [pageCapacity])

    const changePage = (index:number) => setPageState(prev => {
        return changePageFn(prev, index, true)
    })

    const nextPage = () => setPageState(prev => {
        const index = prev.index === pageCount - 1 ? prev.index : prev.index + 1
        return changePageFn(prev, index, true)
    })

    const prevPage = () => setPageState(prev => {
        const index = prev.index === 0 ? prev.index : prev.index - 1
        return changePageFn(prev, index, true)
    })

    const filterData = (filter: ((item: IData) => boolean) | null) => setPageState(prev => {
        let filtered = prev.filtered
        if (filter === null) {
            filtered = dataArray
        } else {
            filtered = dataArray.filter(item => filter(item))
        }

        const index = 0
        const data = filtered.slice(0, pageCapacity)

        return {
            ...prev,
            index,
            data,
            filtered,
        }
    })

    const sortData = (prev:IPageState, sorter: (a: IData, b: IData) => number) => { 
        const filtered = [...prev.filtered]
        filtered.sort(sorter)

        const start = prev.index * pageCapacity
        const data = filtered.slice(start, start + pageCapacity)

        return {
            data,
            filtered,
        }
    }

    const sortDataBy = (field: SortedBy) => setPageState(prev => {
        switch (field) {
            // sorting by id num
            case SortedBy.Id: {
               if(prev.sortedBy === SortedBy.Id) {
                    return {
                        ...prev,
                        ...sortData(prev, (a, b) => a.id - b.id),
                        sortedBy: SortedBy.None,
                    } 
               }
               return {
                    ...prev,
                    ...sortData(prev, (a, b) => b.id - a.id),
                    sortedBy: SortedBy.Id
               }
            }
            // sorting by alphabet
            case SortedBy.Title: {
                if(prev.sortedBy === SortedBy.Title) {
                    return {
                        ...prev,
                        ...sortData(prev, (a, b) => b.title.localeCompare(a.title)),
                        sortedBy: SortedBy.None,
                    } 
               }
               return {
                    ...prev,
                    ...sortData(prev, (a, b) => a.title.localeCompare(b.title)),
                    sortedBy: SortedBy.Title
               }
                
            
            }
            case SortedBy.Body: {
                if(prev.sortedBy === SortedBy.Body) {
                    return {
                        ...prev,
                        ...sortData(prev, (a, b) => b.body.localeCompare(a.body)),
                        sortedBy: SortedBy.None,
                    } 
               }
               return {
                    ...prev,
                    ...sortData(prev, (a, b) => a.body.localeCompare(b.body)),
                    sortedBy: SortedBy.Body
               }
            }
            case SortedBy.None: {
                return prev
            }
        }
    })

    const changeSearchBarValue = (value:string) => setSearchBarValue(value)

    useEffect(() => {
        const listener = (event: PopStateEvent) => {
            event.preventDefault()
            // return on previous page in history
            if (event.state && event.state.index !== undefined) {
                setPageState(prev => changePageFn(prev, event.state.index, false))
                
            }
        }

        window.addEventListener('popstate', listener)
        //remove listener on rerender
        return () => {
            window.removeEventListener('popstate', listener)
        }
    }, [changePageFn]) 

    return (
        <PageContext.Provider
            value={{
                pageState,
                pageCount,
                pageCapacity,
                changePage,
                nextPage,
                prevPage,
                filterData,
                sortDataBy,
                searchBarValue,
                changeSearchBarValue,
            }}
        >
            { children }
        </PageContext.Provider>
    )
}