import React, {useState, useEffect} from "react";
import Result from "./Result";

const Kidney =() =>{
    const [kdArrays, setKdArrays] = useState([]);
    const[egfr, setEgfr]= useState("");
    const[atDate, setAtDate]= useState("");
    const[result, setResult] = useState("");
    const[status, setStatus] = useState([])
    
    const handleclick =(e)=>{
        e.preventDefault();
        
        
        let kdArray ={
            egfr,
            atDate ,
            result,
            status
        }
           // const compare =(kdArrays)=>{
               
               //  }
               
               setKdArrays([ ...kdArrays, kdArray]);
               setEgfr("");
               setAtDate("");
//                kdArrays.forEach((element, index) => {
//            if(kdArrays.length > 1){
//                let a = kdArrays[0].egfr;
//                console.log("first",a);
//                let b = kdArrays.at(-1).egfr;
//                console.log("last",b);
//               let c = kdArrays.at(-2).egfr;
// console.log("second last",c);
// let d = Math.abs(((b -c)/c)*100);
// console.log(d,"%");
// if(d <= -20){
//    console.log("percentage drops by: ", d);
//    setStatus("percentage drops by: ", d);
// }
//                //setStatus(a) ;
//            }else {
//                setStatus("Not enough data to calculate") ;
//            }
          
//        })
 
 
}
useEffect(() => {
    if(kdArrays.length > 1){
        let a = kdArrays[0].egfr;
        console.log("first",a);
        let b = kdArrays.at(-1).egfr;
        console.log("last",b);
       let c = kdArrays.at(-2).egfr;
console.log("second last",c);
let d = Math.abs(((b -c)/c)*100);
console.log(d,"%");
if(d >= 20){
console.log("percentage drops by: ", d);
setStatus(`Recent readings of eGFR: ${c} & ${b} \n Your percentage drops by:  ${parseFloat(d).toFixed(1)}%`);
}
        //setStatus(a) ;
     
     else {
        setStatus(`Last recent readings of eGFR: ${c} & ${b} \n You are doing great !`) ;
        console.log("no data");
    }}
    
        if(egfr>=90){
                setResult("Normal");
            }
            else if(egfr>=60 && egfr <= 89){
                setResult("Mildly Decreased")
            }
            else if(egfr>=45 && egfr <= 59){
               setResult("Mild  to  Moderate")
            }
             else  if(egfr>=30 && egfr <= 44){
                   setResult("Moderate  to  Severe")
               }
             else  if(egfr>=15 && egfr <= 29){
                   setResult("Severely  Decreased")
               }
            else{
                setResult("Kidney Failure")
            }
        
    }
   
, [egfr,atDate,kdArrays]);

// const res =(egfr)=>{
//     let a = kdArrays[0].egfr;
//     console.log(a);
// }
    
    return(
    <>

        <div className="form-kidney">
      <form onSubmit= {handleclick}>
        <h3 className="bp-h2">Kidney Disease</h3>
        <label>Enter Date</label> <span>   </span>
<input type="date"  placeholder="Pick a date " required className="date-input"onChange={(e)=> setAtDate(e.target.value)} value={atDate}/> <br/>
        <label>GFR: </label>
         <input className="kidney" type="number" placeholder="ml/min/1.73 m2" min="15" max="90" onChange={(e) => setEgfr(e.target.value)} value={egfr} required ></input><br/>
         <button type="submit" className="btn-calc" >Report</button>
      </form><br/>
        <Result kdArrays ={kdArrays}/>
        </div>
        {/* <div> <p>{setStatus.status}</p></div> */}
    </>
    )
}

export default Kidney;