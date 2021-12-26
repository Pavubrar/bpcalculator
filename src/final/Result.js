import React from "react";
const Result=({kdArrays})=>{
   return kdArrays.slice([-1]).map((kdArray, index)=>( 
       <div
           key={index}>
           <p>eGFR : {kdArray.egfr}</p><br/>
           <p>Date: {kdArray.atDate}</p><br/>
           <p>Result: {kdArray.result}</p><br/>
           <p className="display-inline">Status:{kdArray.status}</p>
          
       </div>
   ))
   
}
export default Result;