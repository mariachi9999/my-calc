import styles from "./Visor.module.css"

const Visor = ({symbol, color, setOperando, setOperator, operation, setFloat, float,operando, resultado}) => {

  
  const handleClick= (e)=>{
    
    console.log(e.target.id)

    Number.isInteger(parseInt(e.target.name)) && setOperando((operando)=>parseFloat(operando.toString().concat(float,e.target.name)))

    !Number.isInteger(parseInt(e.target.name)) && e.target.id !=="to_float" && setOperator(e.target.id)

    !Number.isInteger(parseInt(e.target.name)) && e.target.id ==="to_float" && float==="" && setFloat(".") 


  }

  return (
    <>
      <input type="number" id={styles.visor} onClick={handleClick} value={operando ? operando : resultado}></input>
    </>
  )
}

export default Visor
