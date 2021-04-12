import {Component} from 'react'
import './App.css';
import Input from './InPut/input';
import Output from './OutPut/output';

class App extends Component{
  state={
    name:'from state111 ',
    name:'from state222',
    status:false
  }
  handler=(event)=>{
    this.setState({
      name: event.target.value
    })
  }
    togglehandler=()=>{
      const does=this.state.status;
      this.setState({status:!does})
    }  
     
  
  render(){
    let t=null;
    if(this.state.status){
      t=(
        <div>
        <Input changed={this.handler} current={this.state.name}/>
  
        </div>)
    } 
    
    return (
     <div className="App">
      <h1>Muhammad Ahsan</h1>
      <button onClick={this.togglehandler}>Toggle</button>
        {t}

     
        <Output name={this.state.name}  />
      <Output name='simple Name 1'  />
      <Output name='simple Name 2'  />
     </div>
    );
  }
}
export default App;
