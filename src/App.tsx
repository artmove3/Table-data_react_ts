import { TableHeader } from "./components/TableHeader";
import { TableTemplate } from "./components/TableTemplate";
import { TablePaginator } from "./components/TablePaginator";


function App() {
  const numberOfdataOnPage = 10

  return (
    <div className="table-app">
      <TableHeader />
      <TableTemplate props={numberOfdataOnPage}/>
      <TablePaginator props={numberOfdataOnPage}/>
    </div>
  );
}

export default App;
