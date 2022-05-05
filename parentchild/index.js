function image() {
    return(
       <img src ="download.png"></img>
    )
}

function componenet(){
    return (
        <div>
        <ul>
            <li>this is comp</li>
        </ul>
    </div>
    )
}
function footer() {
    return (
        <footer>this is footer</footer>
    )
}
function CompositionEvent(){
    <div>
        <image />
        <componenet />
        <footer />
    </div>
}
ReactDom.render(<CompositionEvent /> , document.getElementById('root'))