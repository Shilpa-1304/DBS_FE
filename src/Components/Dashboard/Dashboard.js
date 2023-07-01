import React, { useEffect, useState } from 'react';
import './Dashboard.css';
// import File from '../File/File';
import {FcFolder} from 'react-icons/fc';
import Folder from '../Folder/Folder';
import axios from 'axios';
function Dashboard() {

  const [folders, setFolder] = useState([]);
  const getFolderContentController=async(id)=>{
    console.log('Id of Folder: ',id);
    try {
      const folder = await axios.get(`http://localhost:8080/${id}`);

      console.log('Folder__Clicked: ',folder);
    }
    catch (err) {
      console.log('Error : ', err);
    }
  }
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
    <div>
      <div className='header'>
        <h1 className='heading'>Data Management System</h1>
      </div>
      {/* <File/> */}
      <Folder/>
      <div className='container'>
      <div className="row">
      {
        folders.map((folder) => {
          return (
            <div className="col-sm-2" key={folder._id}>
            <div className="card">
              
              <div className="card-body"><FcFolder size={30} style={{cursor:'pointer'} } onClick={()=>{getFolderContentController(folder._id)}}/><br/>
                <h5 className="card-title">{folder.folderName}</h5>
                <p className="card-text">Creation Date</p>
              </div>
            </div>
            </div>
          )
        })
      }
      </div></div>
    </div>

  )
}

export default Dashboard