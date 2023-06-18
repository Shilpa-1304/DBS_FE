import React from 'react';
import './Dashboard.css';
import File from '../File/File';
function Dashboard() {
  return (
    <div>
        <div className='header'>
            <h1 className='heading'>Data Management System</h1>
        </div>
        <File/>
    </div>
    
  )
}

export default Dashboard