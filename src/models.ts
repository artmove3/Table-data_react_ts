export interface IData {
   "userId": number,
    "id": number,
    "title": string,
    "body": string
}

export interface IProps {
    numberOfdataOnPage: number,
    currentData: IData[]
    
    
}