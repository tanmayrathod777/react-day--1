// React
// import ReactDOM from "react-dom" 
// import React from "react"
const Mainfunc = () =>{
    return (
        <h1>this is main component</h1>
    )
}

ReactDOM.render(
    <div>
        <Mainfunc />
    </div> ,
    document.querySelector('#root')
)

//vanila
const h1 = document.createElement("h1")
h1.textContent = "this is not correct"
h1.className = "header"
document.getElementById('root').append(h1)
console.log(h1);
// JSX

const element = <h1 className = "header"></h1>
console.log(element);

// cdn
const number = (
    <nav>
        <ul>
            <li>this</li>
            <li>is</li>
            <li>name</li>
        </ul>
    </nav>
)
ReactDOM.render(number , document.getElementById("root"));
