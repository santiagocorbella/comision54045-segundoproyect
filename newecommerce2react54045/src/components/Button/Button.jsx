const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} 
    style={{background:'yellow', color:props.colorLetra}}
    >{props.elemento}</button>
}

export default Button