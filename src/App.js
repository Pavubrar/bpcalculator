import React,{Component} from 'react';
import './App.css';

// import CheckBp from './final/CheckBp';
// import DatePickers from './final/DatePicker';
// import Kidney from './components/Kidney';
// import Report from './components/Report';
import Data from './final/data';


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
    <div className="App">
    <Data />
    </div>
  );
}
}

export default App;
