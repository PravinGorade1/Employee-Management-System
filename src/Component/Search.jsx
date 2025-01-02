import React, { useState } from "react";
import { NavLink } from "react-router-dom";

let Search=(Props)=>{
     let [ser,setser]=useState({
         Search:"",
     });

     let Unihandler = (p) => {
        setemp((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };
     let Searching=(p)=>{
        

     }
    return(<>
        <div className="container bg-info">
        <h2 className="text-center mt-4">Search Employee by Name Contact Email Address and other field</h2>
                <label className="f mt-5">Entert the Name To search</label>
                <input className="form-control" type="text" name="Search"  onClick={(p)=>Searching(p)}/> 
        </div>
    </>)
}
export default Search