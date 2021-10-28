import styles from "./Visor.module.css";
import formulas from "../../helpers/operations";

const Visor = ({
  symbol,
  color,
  setOperando,
  setOperator,
  operation,
  setFloat,
  float,
  operando,
  resultado,
}) => {
  const operations = formulas();

  const handlePress = (e) => {
    console.log(e);
    console.log(e.key);
    console.log(operations[e.key]);
    if (operations[e.key]) {
      operations[e.key] === "=" ? setOperator("=") : setOperator(e.key);
    }
  };

  const handleClick = (e) => {
    console.log(e);
    let valor = parseFloat(e.target.value);
    if (!isNaN(valor)) {
      setOperando(valor);
    }
    if (isNaN(valor)) {
      setOperator(e.nativeEvent.data);
    }
  };

  return (
    <>
      <input
        type="number"
        id={styles.visor}
        onChange={handleClick}
        onKeyDown={handlePress}
        value={operando === 0 ? "" : operando}
        autoFocus
      ></input>
    </>
  );
};

export default Visor;
