import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import FolderContainer from './Components/FolderContainer/FolderContainer';
function App() {
  return (
    <Dashboard/>
    // <HashRouter>
    // <Routes>
    //     <Route path='/' element={<Dashboard/>}/>
    //     {/* <Route path='/folders' element={<FolderContainer/>}/> */}
    // </Routes>
    // </HashRouter>
  );
}

export default App;
