import React,{useContext} from 'react'
import {FcFolder} from 'react-icons/fc';
// import Folder from '../Folder/Folder';
import axios from 'axios';
import { FolderDataContext } from '../Dashboard/Dashboard';
function FolderContainer() {
    const {folders,setFolder,id,setId,subFolder,setSubFolder}=useContext(FolderDataContext);
    //============Get content of parent controller==================
    const getFolderContentController=async(id)=>{
        console.log('Id of Folder: ',id);
        setId(id);
        setSubFolder(true);
        try {
          const folder = await axios.get(`http://localhost:8080/${id}`);
          setFolder(folder.data);
          console.log('Folder__Clicked: ',folder);
        }
        catch (err) {
          console.log('Error : ', err);
        }
    }

   
    return (
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
  )
}

export default FolderContainer