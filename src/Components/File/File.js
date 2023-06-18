import React,{useEffect, useState} from 'react'
import axios from 'axios'
function File() {

  const [data,setData]=useState('');
  const [items,setItem]=useState([]);
  const submitData=async(data)=>{
    const response=await axios.post('http://localhost:8080/saveData',{"text":data});
    console.log('Response added: ',response, 'for data: ',data);
    fetchData();
    console.log('Data added on submit button: ',data)
  }
  const fetchData=async()=>{
    const data=await axios.get('http://localhost:8080/');
    console.log('Data: ',data);
    setItem(data.data);
  }
  const uploadFile=async(file)=>{
    const response=await axios.post('http://localhost:8080/upload',file);
    console.log('Response added: ',response);
  }

  useEffect(()=>{
    fetchData();
    // console.log(data)
  },[])
  return (
    <div className='container border border-success'>
        {/* <div style={{border:'1px solid black'}}>
            <label>Text: </label>
            <input type='text' onChange={(e)=>{setData(e.target.value)}}/><br/><br/>
            <button type='submit' onClick={()=>{submitData(data)}}>Submit</button>
        </div> */}
        <form class="mt-4"
            action="/upload"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                class="form-control-file border"
              />
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
          </form>
    </div>
  )
}

export default File