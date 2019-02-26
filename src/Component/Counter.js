import React,{Component} from 'react'


const buttonStyle = {
    margin: "20px"
}

function Counter({caption,Increment,Decrement,value}) {
    return (
        <div>
            <button style={buttonStyle} onClick={Increment}>+</button>
            <button style={buttonStyle} onClick={Decrement}>-</button>
            <span>{caption} count :{value}</span>
        </div>
    )
}


export default Counter