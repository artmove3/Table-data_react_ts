import { createContext, useState } from "react";

interface IPageContext {
    page: number
    changePage: (value:number) => void
}

export const PageContext = createContext<IPageContext>({
    page: 1,
    changePage: () => {}
})

export const PageState = ({children}:{children:React.ReactNode}) => {
    const [page, setPage] = useState(1)

    const changePage = (value:number) => setPage(value)
    
    return (
        <PageContext.Provider value={{page, changePage}}>
            { children }
        </PageContext.Provider>
    )
}