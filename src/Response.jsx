import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./data.css";
//import data from "./data.js";



function Response() {
const [data, setdata] = useState([])
useEffect(() => {
    async function fetchData(){
        // const api = "https://weconnect-com.herokuapp.com/api/v1/businesses";
        const api = "http://api.github.com/users";
       const response = await axios.get(api);
       setdata(response.data);
       console.log(response);
       return response;
   }
  
fetchData();
}, [])
console.log("");
   
return (
            <div className="all"> 
                <div className="cover"><h1>Custom Git-Hub Users</h1></div>
        <div className="data_container" >
            {data.map((data)=>(
            <div class="person">
                <img src={data.avatar_url} alt="person photo"/>
                
                <div class="info">
            <p> {data.login}</p>
            
            <a href={data.html_url} target="_blank"><button >See Repo</button></a>
            
                    
            </div>
            </div>))}
            
        </div>
        </div>
            )
}

export default Response;
