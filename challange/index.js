const Element = (
    <div>
        <img src="./react-logo.png"></img>
    </div>
)
const Funfact = (
    <div>
        <h1>Fun Fact About React</h1>
    </div>
)
const Detail = (
    <div>
        <ul>
            <li>this is thought 1</li>
            <li>this is thought 2</li>
            <li>this is thought 3</li>
            <li>this is thought 4</li>
        </ul>
    </div>
)
const conclude = (
    <div>
        <Element />
        <Funfact /> 
        <detail />
    </div>
)
ReactDOM.render(conclude , document.getElementById('root'))