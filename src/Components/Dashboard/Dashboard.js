import React, {  createContext,useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';
import FolderContainer from '../FolderContainer/FolderContainer';
import Folder from '../Folder/Folder';
import axios from 'axios';
export const FolderDataContext = createContext();
function Dashboard() {

  
  const [folders, setFolder] = useState([]);
  const [id,setId]=useState('');
  const [subFolder,setSubFolder]=useState(false);
  // const navigate = useNavigate();
  const getAllFolder = async () => {
    try {
      const folder = await axios.get('http://localhost:8080/');
      setFolder(folder.data);
      
    }
    catch (err) {
      console.log('Error : ', err);
    }
  }
  useEffect(() => {
    getAllFolder();
  }, [])
  console.log('Folders: ', folders);
  return (
    <FolderDataContext.Provider value={{folders,setFolder,id,setId,subFolder,setSubFolder}}>
      <div className='header'>
        <h1 className='heading d-flex justify-content-center'>Data Management System</h1>
      </div>
      <Folder/>
      
      {
        (folders.length>0 ) ?
        <FolderContainer/>
        :
        <div>No Folder</div>
      }
      
    </FolderDataContext.Provider>

  )
}

export default Dashboard