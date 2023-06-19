import React from 'react';
import './Dashboard.css';
// import File from '../File/File';
import Folder from '../Folder/Folder';
// import axios from  'axios';
function Dashboard() {
  return (
    <div>
        <div className='header'>
            <h1 className='heading'>Data Management System</h1>
        </div>
        {/* <File/> */}
        <Folder/>
    </div>
    
  )
}

export default Dashboard