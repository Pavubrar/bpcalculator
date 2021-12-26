import React from 'react'
const View = ({bpArrays}) => {
    return bpArrays.slice([-1]).map((bpArray, index) =>(
        
        <div key={index} >
            <p>Systolic Pressure: {bpArray.sysbp}</p><br/>
            <p>Diastolic Pressure: {bpArray.diabp}</p><br/>
        <p>Date: {bpArray.atDate}</p><br/>
            <p>Blood Pressure Status is on:  {bpArray.status}</p>
        </div>
    ))   
}
export default View;