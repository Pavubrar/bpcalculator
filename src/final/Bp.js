
import React,{useState,useEffect} from 'react'


import View from './View';
// get data from local storage
const getData=()=>{
    const bpData = localStorage.getItem('bpArrays');
    if(bpData){
        return JSON.parse(bpData);
    }
    else{
        return []
    }

}

const Data = () => {

    //array of objects
    const [bpArrays, setBpArrays] = useState(getData());
    //input field states
    const[sysbp, setSysbp]= useState('');
    const[diabp, setDiabp]= useState('');
    const[atDate, setAtDate]= useState('');
    const[status, setStatus]= useState('');
    
    
    //form submit event
    const handleClick=(e) => {
        e.preventDefault();
        let bpArray={  
            sysbp,
            diabp,
            atDate,
            status
        }
        setBpArrays([...bpArrays, bpArray]);
        setSysbp("");
        setDiabp("");
        setAtDate("");
    }
    useEffect(()=>{
        if(sysbp>= 180 && diabp >=120){
            setStatus(" Stage 3")
                }else if((sysbp>=160 && sysbp < 180) &&
                     (diabp >=100 && diabp < 110) ) 
                    { setStatus("Stage 2")
                     }
                    else if((sysbp>=140 && sysbp < 160) &&(diabp >=90 && diabp < 100)) {setStatus("Stage 1") }
                         else{
                             setStatus("Normal Stage")
                         }

    },[sysbp, diabp,atDate]);

    
    //saving data ti local storage
    useEffect(() =>{
    localStorage.setItem('bpArrays', JSON.stringify(bpArrays));
    }, [bpArrays]
    )
    

    return (
        <div >
            <h1>Disease Classifier</h1>

<div className="form-container">
<form className="form" autoComplete="off"
onSubmit={handleClick}>
            <h3> Hypertension Calculator</h3>
<label>Enter Date</label> <span>   </span>
<input type="date"  placeholder="Pick a date " required className="date-input"onChange={(e)=> setAtDate(e.target.value)} value={atDate}/> <br/>
<label>Systolic Pressure</label><span>   </span>
    <input type="number" min="115" max="180" className="sysbp-input" required  placeholder=" mmHg" onChange={(e) => setSysbp(e.target.value)} value={sysbp}></input>
    <br/>
    <label>Diastolic Pressure</label><span>   </span>
    <input type="number" min="60" max="120"  placeholder="mmHg "  className="diabp-input" required 
    onChange={(e) => setDiabp(e.target.value)} value={diabp}></input>
    <br/>
    <button type="submit" className="btn-calc">Calculate</button>
</form>
<div className="view-container">
    {bpArrays.length>0&& 
    <>
    <div className="results">
    <View bpArrays={bpArrays}  />
    </div>
    </>}
</div>
</div> 
 </div>

    )
}

export default Data;
