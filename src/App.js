//1. Import Area

import { useReducer } from "react";

export const CLEAR = 'CLEAR';
export const DIVISION = 'DIVISION';
export const MULTIPLICATION = 'MULTIPLICATION';
export const SUBSTRACTION = 'SUBSTRACTION';
export const ADDITION = 'ADDITION';
export const RESULT = 'RESULT';
export const NUMBER = 'NUMBER';
let oldState={
  result:0,
  leftValue:"",
  operator:"",
  rightValue:""
}

let reducerFunction = (oldState,action)=>{
  let newState = oldState;
  console.log('oldState----->',oldState);
  console.log('action----->',action);
  switch(action.type){
    case 'NUMBER':
      if(newState.operator === ""){
        return{
          ...newState,
          leftValue:newState.leftValue + action.payload
        }
      }else{
        return{
          ...newState,
          rightValue:newState.rightValue + action.payload
        }
      }

    case"CLEAR":
      //alert('CLEAR')
      return{
        result:0,
        leftValue:"",
        operator:"",
        rightValue:"",
      }
    case "DIVISION":
      return{
        ...newState,
        operator:"/"
      }
    case "MULTIPLICATION":
      return{
        ...newState,
        operator:"*"
      }
    case "SUBSTRACTION":
      return{
        ...newState,
        operator:"-"
      }  
    case "ADDITION":
      return{
        ...newState,
        operator:"+"
      }
    case "RESULT":
      switch(newState.operator){
        case "+":
          return{
            ...newState,
            result:parseFloat(newState.leftValue) + parseFloat(newState.rightValue)
          }
        case "-":
          return{
            ...newState,
            result:parseFloat(newState.leftValue) - parseFloat(newState.rightValue)
          }
          case "*":
            return{
              ...newState,
              result:parseFloat(newState.leftValue) * parseFloat(newState.rightValue)
            }
          case "/":
            return{
              ...newState,
              result:parseFloat(newState.leftValue) / parseFloat(newState.rightValue)
            }
          default:
            break
          }
        break
    default:
      return newState; 
  }
  

}
//2. Definition Area
function App() {
  //2.1 Hooks Area
  const [newState,dispatch] = useReducer(reducerFunction,oldState)

  //2.2 Function Definition Area

  //2.3 Return Statement
  return (
    <>
      <div className="container">
        <form action name="calc" className="calculator">
          <input type="text" className="value" value={ newState.result !== 0 ? newState.result : newState.leftValue + newState.operator + newState.rightValue } readOnly name="txt" />
          <span className="num clear" onClick={()=>{ dispatch({type:CLEAR}) }}><i>C</i></span>
          <span className="num" onClick={()=>{ dispatch({type:DIVISION}) }}><i>/</i></span>
          <span className="num" onClick={()=>{ dispatch({type:MULTIPLICATION}) }}><i>x</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:7}) }}><i>7</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:8}) }}><i>8</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:9}) }}><i>9</i></span>
          <span className="num" onClick={()=>{ dispatch({type:SUBSTRACTION}) }}><i>-</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:4}) }}><i>4</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:5}) }}><i>5</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:6}) }}><i>6</i></span>
          <span className="num plus" onClick={()=>{ dispatch({type:ADDITION}) }}><i>+</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:1}) }}><i>1</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:2}) }}><i>2</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:3}) }}><i>3</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:0}) }}><i>0</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:'00'}) }}><i>00</i></span>
          <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:'.'}) }}><i>.</i></span>
          <span className="num equal" onClick={()=>{ dispatch({type:RESULT}) }}><i>=</i></span>
        </form>
      </div>
    </>
  );
}
//3. Export Area
export default App;