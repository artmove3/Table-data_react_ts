import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TablePaginator } from "./components/TablePaginator";

export function App() { 
  return (
    <div className="table-app">
      <TableHeader />
      <TableBody />
      <TablePaginator />
    </div>
  )
}