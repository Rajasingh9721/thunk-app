import React,{ Component } from "react";
import * as actions from "./actions/actions";
import { connect } from "react-redux";
import "./App.css";
class App extends React.Component{
    render(){
      return(
        <div className="App">
           <h1>Balance:<span style={{color:"red"}}>{this.props.bal}</span></h1>
           <button onClick={this.props.deposit}>DEPOSIT</button>
           <button onClick={this.props.withdraw}>WITHDRAW</button>
        </div>
      )
    }
};
const receive = (state)=>{
    return{
        bal : state.bal
    }
};
const send = (dispatch)=>{
    return{
      deposit : ()=>{ dispatch(actions.onDeposit(5000)) },
      withdraw: ()=>{ dispatch(actions.onWithdraw(1000)) }
    }
};
export default connect(receive,send)(App);