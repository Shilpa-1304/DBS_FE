import React,{useState} from 'react'
import axios from 'axios';
function Folder() {
    const [folder,setFolder]=useState('');
    const createFolder=async(folder)=>{
        console.log('Folder: ',folder);
        const response=await axios.post('http://localhost:8080/createFolder',{'folderName':folder});
        console.log('Response added: ',response);
    }
  return (
    <div>
        <input type='text'  placeholder='Enter folder name :' onChange={(e)=>{setFolder(e.target.value)}}/>
        <button type='submit' onClick={()=>{createFolder(folder)}}>Create</button>
    </div>
  )
}

export default Folder