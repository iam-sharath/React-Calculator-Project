import React from 'react'
import { useState } from 'react';
import './cal.css'


const Calculator = () => {

const [digit,setDigit] = useState('');
const [result, setResult] = useState(0);

const handleOnchange = e =>{
    setDigit(e.target.value)
}


const handleEval =()=>{
  
    let check = digit.charAt(digit.length-1)

    if(check == "/" || check =="*" || check =="+" || check =="-" || check =="."){
        
           setResult(eval(digit.slice(0, -1)))

    }else{
      setResult(eval(digit))
    }
}




const remove =()=>{
    if(digit.length > 0){
        setDigit(digit.slice(0, -1))}

    }

const allclear =()=>{
    setDigit('')
    setResult(0)
}
  
  return (
    <div>
        <center>
            
                <input type='text' onChange={handleOnchange} value={digit} className='calc'/> <br/>
                <h2> {result}</h2><br/>
                <button onClick={allclear} className='calcbutton'> AC</button>
                <button onClick={remove} className='calcbutton'> C  </button> <br/>
                <button onClick={()=>setDigit(digit+"7")} className='calcbutton'>7</button>
                <button onClick={()=>setDigit(digit+"8")} className='calcbutton'>8</button>
                <button onClick={()=>setDigit(digit+"9")} className='calcbutton'>9</button> 

                <button onClick={()=>{ let math = digit.charAt(digit.length-1)
                                       if(math == "/" || math =="*" || math =="+" || math =="-"|| math =="."){
                                        setDigit(digit.slice(0, -1)+"+")
                                        }else{
                                                 setDigit(digit+"+")
                                       }}} className='calcbutton'>+</button>
                <br/>

                <button onClick={()=>setDigit(digit+"4")}className='calcbutton'>4</button>
                <button onClick={()=>setDigit(digit+"5")}className='calcbutton'>5</button>
                <button onClick={()=>setDigit(digit+"6")}className='calcbutton'>6</button>

                <button onClick={()=>{ let math = digit.charAt(digit.length-1)
                                       if(math == "/" || math =="*" || math =="+" || math =="-"|| math =="."){
                                        setDigit(digit.slice(0, -1)+"-")
                                        }else{
                                                 setDigit(digit+"-")
                                       }}}className='calcbutton'>-</button>
                <br/>


                <button onClick={()=>setDigit(digit+"1")} className='calcbutton'> 1</button>
                <button onClick={()=>setDigit(digit+"2")} className='calcbutton'>2</button>
                <button onClick={()=>setDigit(digit+"3")} className='calcbutton'>3</button>

                <button onClick={()=>{ let math = digit.charAt(digit.length-1)
                                       if(math == "/" || math =="*" || math =="+" || math =="-"|| math =="."){
                                        setDigit(digit.slice(0, -1)+"*")
                                        }else{
                                                 setDigit(digit+"*")
                                       }}} className='calcbutton'>x</button>
                <br/>

                <button onClick={()=>setDigit(digit+"0")} className='calcbutton'>0</button>
                <button onClick={()=>{ let math = digit.charAt(digit.length-1)
                                       if(math =="."){
                                        setDigit(digit.slice(0, -1)+".")
                                        }else{
                                                 setDigit(digit+".")
                                       }}} className='calcbutton'>.</button>
                
                <button onClick={()=>{ let math = digit.charAt(digit.length-1)
                                       if(math == "/" || math =="*" || math =="+" || math =="-"|| math =="."){
                                        setDigit(digit.slice(0, -1)+"/")
                                        }else{
                                                 setDigit(digit+"/")
                                       }}} className='calcbutton'>/</button>
                <button onClick={handleEval} className='calcbutton'>=</button>





                
        </center>
    </div>
  )
}

export default Calculator;

// reusable function
// const expression = (x)=> {
//     let math = digit.charAt(digit.length-1)
//      if(math == "/" || math =="*" || math =="+" || math =="-"|| math =="."){
//       setDigit(digit.slice(0, -1)+ x)
//     }else{
//     setDigit(digit+ x)
//     }}
