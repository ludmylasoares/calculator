import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    //Último valor digitado
    const [num,setNum]=useState(0);

    //Primeiro valor digitado
    const [oldnum,setOldNum]=useState(0);
    
    //Operador matemático para cálculo
    const [operator,setOperator]=useState(0);
    
    //Painel de Resultado
    function inputNum(e) {
        var input=e.target.value;
        if (num===0){
            setNum(input);
        } else {
            setNum(num + input);
        }
    }
    //Botão AC - All Clean
    function clear(e) {
        setNum(0);
    }

    //Botão Porcentagem
    function percent() {
        setNum (num/100);
    }

    //Botão Mudar Valor Positivo e Negativo
    function changeSign() {
        if (num>0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    //Botão Igual
    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num));  
        } else if (operator === "X") {
            setNum(parseFloat(oldnum) * parseFloat(num));  
        } else if (operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));  
        } else if (operator === "-") {
            setNum(parseFloat(oldnum) - parseFloat(num));    
        }
    }      

    //Botões de Operação de Cálculo +-/x
    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

  return (
    <div>
        <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={10}/>
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>A/C</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={percent}>%</button>
                    <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandler} value={"X"}>X</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>             
                    <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                    <button className="gray" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={inputNum} value={"."}>,</button>
                    <button className="gray" style={{visibility:"hidden"}}>,</button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </Container>
    </div>
  )
}
 