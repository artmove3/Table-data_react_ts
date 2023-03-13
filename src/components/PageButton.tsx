import { useContext } from 'react'
import { PageContext } from "../context/PageContext";

interface IPageButton {
    index: number
}

export function PageButton({ index }: IPageButton) {
    const { pageState: { index: page }, changePage } = useContext(PageContext)

    let buttonClass = ["paginator-page"]
    if (index === page) {
        buttonClass.push("clicked")
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        changePage(+event.currentTarget.value)
    }

    return (
        <button
                type="button"
                className={buttonClass.join(" ")}
                value={index} 
                key={index}
                onClick={clickHandler}
        >
            {index+1}
        </button>
    )
}

