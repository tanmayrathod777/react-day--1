function Page(){
    return (
        <div>
            <header>
                <nav>
                    <img src ="img.png"></img>
                </nav>
            </header>
            <h1>Prov</h1>
        <ol>
            <li>this is page 1</li>
        </ol>
        <footer>this is copyright by % copy</footer>
        </div>
    )
}
ReactDOM.render(<Page /> , document.getElementById('root'))