import { TableHeader } from "./components/TableHeader";
import { TableTemplate } from "./components/TableTemplate";
import { TablePaginator } from "./components/TablePaginator";
import { useContext } from 'react'
import { PageContext } from "./context/PageContext";


function App() {

  const {data, searchedData} = useContext(PageContext)

  const currentData = searchedData[0].id > 0 ? searchedData : data

  const numberOfdataOnPage = 10

  return (
    <div className="table-app">
      <TableHeader />
      <TableTemplate numberOfdataOnPage={numberOfdataOnPage} currentData={currentData}/>
      <TablePaginator numberOfdataOnPage={numberOfdataOnPage} currentData={currentData}/>
    </div>
  );
}

export default App;
