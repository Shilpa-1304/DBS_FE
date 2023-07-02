import React,{useState,useContext, useEffect} from 'react'
import axios from 'axios';
import { FolderDataContext } from '../Dashboard/Dashboard';
function Folder() {
    const [folder,setFolder]=useState('');
    const [path,setPath]=useState('');
    const {folders,setFolders,id,setId,subFolder,setSubFolder}=useContext(FolderDataContext);

    const createSubFolder=async()=>{
      try {
        if(id){
          setPath(`${id}/`)
          console.log('Sub-Folder: ',folder);
          const response=await axios.post(`http://localhost:8080/createSubFolder/${path}`,{'folderName':folder,'path':path});
          console.log('Response added: ',response);
        }
        
      } catch (error) {
        console.log('At the time of creating folder: ',error) 
      }
      console.log('path is ',path);
    }

    const createFolder=async()=>{
      try {
        if(id){
          console.log('Folder: ',folder);
          const response=await axios.post(`http://localhost:8080/createFolder/${id}`,{'folderName':folder});
          console.log('Response added: ',response);
        }
        
      } catch (error) {
        console.log('At the time of creating folder: ',error) 
      }
    }
    
  return (
    <div className="d-flex justify-content-center">
        <input type='text'  placeholder='Enter folder name :' onChange={(e)=>{setFolder(e.target.value)}}/>
        <button type='submit' onClick={()=>{subFolder?createSubFolder() :createFolder()}}>Create</button>
    </div>
  )
}

export default Folder