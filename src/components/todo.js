import React,{Component} from'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {callAppState} from '../actions/index.js';

class Todo extends Component{

  constructor(props){
    super(props);
    this.state={term:"yogendra"};
    this.callOnChange = this.callOnChange.bind(this);
    this.items=[];
  }
  callOnChange(event){
    this.setState({term:event.target.value});
  }

    gettingList(){
    return this.items.map(item=>
      <div>
      <li key={item}>{item}</li>
      <button type="button" onClick={()=>this.delete(this.items.indexOf(item))}>delete</button>
      <hr/>
      </div>
    );
  }

  delete(index){
    if (index !== -1)
    this.items.splice(index, 1);
    this.forceUpdate();
   }

  reset(){
    this.items=[];
    this.setState();
  }
  addMe(){
    console.log("inside AddMe");
    this.items.push(this.state.term);
    //this.items.push(this.props.appState.name);
    this.setState({term:"yogendra"});
    console.log(this.items);
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.term} onChange={this.callOnChange}/>
        <button type="button" onClick={()=>this.addMe()}>Add</button>
        <button type="button" onClick={()=>this.reset()}>Reset</button>
        <button type="button" onClick={()=>this.props.callAppState()}>Call App State</button>{this.props.appState.name}
        <ul>{this.gettingList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {appState:state.appState};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({callAppState:callAppState},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
