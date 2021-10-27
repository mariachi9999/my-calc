import styles from "./Button.module.css"

const Button = ({symbol, color, setOperando, setOperator, operation, setFloat, float}) => {

  
  const handleClick= (e)=>{
    
    console.log(e.target.id)

    Number.isInteger(parseInt(e.target.name)) && setOperando((operando)=>parseFloat(operando.toString().concat(float,e.target.name)))

    !Number.isInteger(parseInt(e.target.name)) && e.target.id !=="to_float" && setOperator(e.target.id)

    !Number.isInteger(parseInt(e.target.name)) && e.target.id ==="to_float" && float==="" && setFloat(".") 


  }

  return (
    <>
      <button className={styles[`${color}`]} onClick={handleClick} name={symbol} id={operation}>{symbol}</button>
    </>
  )
}

export default Button
