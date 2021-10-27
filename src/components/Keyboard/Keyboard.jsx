import { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./Keyboard.module.css";
import data from "../../data/buttons";
import formulas from "../../data/operations";

const Keyboard = () => {
  const symbols = data();
  const operations = formulas();

  const [resultado, setResultado] = useState(0);
  const [operando, setOperando] = useState(0);
  const [operator, setOperator] = useState("");
  const [storedoperator, setStoreoperator] = useState("");
  const [operation, setOperation] = useState("");
  const [float, setFloat] = useState("")


  useEffect(() => {
    if (operator === "plus_minus") {
      if (operando !== 0) {
        setOperando(operando * -1);
        setOperator("");
      }

      if (operando === 0 && resultado !== 0) {
        setResultado(resultado * -1);
        setOperator("");
      }
    } else if (operator === "percentage") {
      if (operando !== 0) {
        setOperando(operando / 100);
        setResultado(operando / 100);
        setOperator("");
      }

      if (operando === 0 && resultado !== 0) {
        setResultado(resultado / 100);
        setOperator("");
      }
    } else if (operator === "divide_itself") {
      if (operando !== 0) {
        setOperando(1 / operando);
        setResultado(operando / 100);
        setOperator("");
      }

      if (operando === 0 && resultado !== 0) {
        setResultado(1 / resultado);
        setOperator("");
      }
    } else if (operator === "power_squared") {
      if (operando !== 0) {
        setOperando(operando * operando);
        setResultado(operando * operando);
        setOperator("");
      }

      if (operando === 0 && resultado !== 0) {
        setResultado(resultado * resultado);
        setOperator("");
      }
    } else if (operator === "square_root") {
      if (operando !== 0) {
        setOperando(Math.sqrt(operando));
        setResultado(Math.sqrt(operando));
        setOperator("");
      }

      if (operando === 0 && resultado !== 0) {
        setResultado(Math.sqrt(resultado));
        setOperator("");
      }
    } else {
      if (operator && operator.includes("delete")) {
        console.log("incluye");
        setResultado(0);
        setOperando(0);
        setOperator(0);
        setStoreoperator(0);
        setOperation("");
        setFloat("")
      } else {
        if (operator === "equal") {
          let new_result = resultado + operando;
          setOperation(
            `${resultado} ${storedoperator} ${operando} ${operator} ${new_result}`
          );
          setResultado(new_result);
          setOperando(0);
          setStoreoperator("");
          setOperator("");
          setFloat("")
        }

        if (operator !== "") {
          if (resultado === 0) {
            setResultado(operando);
            setOperando(0);
            setStoreoperator(operator);
            setOperator("");
            setFloat("")

          } else {
            if (storedoperator) {
              let new_result = operations[storedoperator](resultado, operando);
              setResultado(new_result);
              setOperando(0);
              setStoreoperator(operator);
              setOperator("");
              setFloat("")

            }
            setStoreoperator(operator);
            setOperator("");
            setFloat("")

          }
        }
      }
    }
  }, [operator]);

  useEffect(() => {
    if (storedoperator === "equal") {
      setStoreoperator("");
    }
  }, [storedoperator]);


  return (
    <div className={styles.gridContainer}>
      <button className={styles.operation}>
        {operation ? operation : resultado > 0 ? resultado : ""}
      </button>
      <button className={styles.result}>
        {operando ? operando : resultado}
      </button>
      {symbols.map((symbol) => (
        <Button
          key={symbol.operation}
          setOperando={setOperando}
          setOperator={setOperator}
          symbol={symbol.symbol}
          operation={symbol.operation}
          color={
            Number.isInteger(symbol.symbol) ||
            symbol.symbol === "±" ||
            symbol.symbol === "."
              ? "light"
              : "dark"
          }
          setFloat={setFloat}
          float={float}
        />
      ))}
    </div>
  );
};

export default Keyboard;
