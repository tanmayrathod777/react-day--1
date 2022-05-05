const element = (
    <div><center>
        <table border= "60px" >
            <tr>
                <td>name</td>
                <td>filename</td>
                <td>world dir</td>
            </tr>
            <tr>
                <td>name</td>
                <td>filename</td>
                <td>world dir</td>
            </tr>       
        </table>
        </center>
    </div>
    
)

ReactDOM.render(element , document.getElementById('root'))
const  obj = document.getElementById("root").append(JSON.stringify(element))
console.log(obj);