import React,{Component} from 'react';
import './App.css';

// import CheckBp from './final/CheckBp';
// import DatePickers from './final/DatePicker';
// import Kidney from './components/Kidney';
// import Report from './components/Report';
import Data from './final/Bp';
import Kidney from './final/Kidney';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      selectedDate: "",
      message:""
    }
  }
  
render(){

  
  return (
    <div className="wrapper">
    <Data /><br/>
    <Kidney></Kidney>
    </div>
  );
}
}

export default App;
