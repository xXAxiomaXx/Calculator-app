import { useState } from 'react';
import './App.css';

export default function App() {
  const options = document.getElementsByClassName("option");
  const arr = [...options];
  
  arr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1";
      if (index == 0) {
        let r = document.querySelector(':root');
        r.style.setProperty('--acent-color-one', '#d13f30');
        r.style.setProperty('--acent-color-one-shadow', 'rgba(151, 36, 22)');
        r.style.setProperty('--acent-color-one-hover', '#f96c5b');
        r.style.setProperty('--acent-color-one-hover-shadow', 'rgba(146, 35, 21)');
        r.style.setProperty('--acent-color-two', '#647197');
        r.style.setProperty('--acent-color-two-shadow', 'rgba(65, 77, 116)');
        r.style.setProperty('--acent-color-two-hover', '#a2b3e1');
        r.style.setProperty('--acent-color-two-hover-shadow', 'rgba(63, 75, 107');
        r.style.setProperty('--text-color', '#ffffff');
        r.style.setProperty('--number-color', '#32312c');
        r.style.setProperty('--button-color', '#eae3db');
        r.style.setProperty('--button-color-shadow', 'rgba(177, 164, 152)');
        r.style.setProperty('--button-hover-color', '#ffffff');
        r.style.setProperty('--background-color', '#3b4664');
        r.style.setProperty('--display-color', '#181f32');
        r.style.setProperty('--calc-color', '#252d44');
        r.style.setProperty('--calc-number-color', '#ffffff');
        r.style.setProperty('--toggle-color', '#232c43');
  
  
      } else if (index == 1) {
  
        let r = document.querySelector(':root');
        r.style.setProperty('--acent-color-one', '#ca5502');
        r.style.setProperty('--acent-color-one-shadow', '#893901');
        r.style.setProperty('--acent-color-one-hover', '#ff8b38');
        r.style.setProperty('--acent-color-one-hover-shadow', '#7f441a');
        r.style.setProperty('--acent-color-two', '#377f86');
        r.style.setProperty('--acent-color-two-shadow', '#61b5bb');
        r.style.setProperty('--acent-color-two-hover', '#61b5bb');
        r.style.setProperty('--acent-color-two-hover-shadow', '#1c6068');
        r.style.setProperty('--text-color', '#35352c');
        r.style.setProperty('--number-color', '#32312c');
        r.style.setProperty('--button-color', '#e5e4e1');
        r.style.setProperty('--button-color-shadow', '#a69d91');
        r.style.setProperty('--button-hover-color', '#ffffff');
        r.style.setProperty('--background-color', '#e6e6e6');
        r.style.setProperty('--display-color', '#ededed');
        r.style.setProperty('--calc-color', '#d1cccc');
        r.style.setProperty('--calc-number-color', '#61b5bb');
        r.style.setProperty('--toggle-color', '#d1cccc');
  
  
  
      } else {
        let r = document.querySelector(':root');
        r.style.setProperty('--acent-color-one', '#00decf');
        r.style.setProperty('--acent-color-one-shadow', '#66fcf2');
        r.style.setProperty('--acent-color-one-hover', '#94fff9');
        r.style.setProperty('--acent-color-one-hover-shadow', '#7fdde4');
        r.style.setProperty('--acent-color-two', '#56077c');
        r.style.setProperty('--acent-color-two-shadow', '#b819ee');
        r.style.setProperty('--acent-color-two-hover', '#8730af');
        r.style.setProperty('--acent-color-two-hover-shadow', '#bf15f4');
        r.style.setProperty('--text-color', '#ffe537');
        r.style.setProperty('--number-color', '#ffe537');
        r.style.setProperty('--button-color', '#331b4d');
        r.style.setProperty('--button-color-shadow', '#851f9e');
        r.style.setProperty('--button-hover-color', '#6b34ac');
        r.style.setProperty('--background-color', '#17062a');
        r.style.setProperty('--display-color', '#1e0836');
        r.style.setProperty('--calc-color', '#1e0836');
        r.style.setProperty('--calc-number-color', '#61b5bb');
        r.style.setProperty('--toggle-color', '#1e0836');
      }
      arr
        .filter(function(item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = "0";
        });
    });
  });


    const [num,setNum]=useState(0)
    const [oldNum,setOldNum]=useState(0)
    const [operator,setOperator]=useState()

    function inputNum(e){
      if(num===0){      
        setNum(e.target.value)
      }else{    
          setNum(num + e.target.value)}
    }

    function clear(){
      setNum(0)
    }

    function del(){
      var newNum = num.slice(0, num.length - 1);
      setNum(newNum);

    }

    function calculate(e){
      var operatorInput = e.target.value
      setOperator(operatorInput)
      setOldNum(num)
      setNum(0)
    }

    function equal(){
      if(operator==="/"){
        setNum(parseFloat(oldNum)/ parseFloat(num))
      } else if(operator==="*"){
        setNum(parseFloat(oldNum) * parseFloat(num))
      } else if(operator==="+"){
        setNum(parseFloat(oldNum) + parseFloat(num))
      } else if(operator==="-"){
        setNum(parseFloat(oldNum) - parseFloat(num))
      }
    }

  return (
    <div className="App">
      <body>
      <div className="main">
      <div className="calc-header">
        <h3 className="text-color">calc</h3>
        <div className="theme-selector">
          <h6 className="theme-label text-color">THEME</h6>
          <div className="selector">
            <div className="labels text-color">
              <h3>1</h3>
              <h3>2</h3>
              <h3>3</h3>
            </div>
            <div className="tri-state-toggle">
              <input className="option accent-color-one" type="radio" name="toggle" id="one" />
              <input className="option accent-color-one" type="radio" name="toggle" id="two" />
              <input className="option accent-color-one" type="radio" name="toggle" id="three" />
            </div>
          </div>
        </div>
      </div>
  
  
      <div className="container">
        <div className="display text-color">
          <div className="text">
            {num}
          </div>
        </div>
        <div className="buttons">
          <div className="grid">
            <button className="button number" onClick={inputNum} value={7}>7</button>
            <button className="button number" onClick={inputNum} value={8}>8</button>
            <button className="button number" onClick={inputNum} value={9}>9</button>
            <button className="button function accent-color-two" id="del" onClick={del}>DEL</button>
            <button className="button number" onClick={inputNum} value={4}>4</button>
            <button className="button number" onClick={inputNum} value={5}>5</button>
            <button className="button number" onClick={inputNum} value={6}>6</button>
            <button className="button operator" onClick={calculate} value="+">+</button>
            <button className="button number" onClick={inputNum} value={1}>1</button>
            <button className="button number" onClick={inputNum} value={2}>2</button>
            <button className="button number" onClick={inputNum} value={3}>3</button>
            <button className="button operator" onClick={calculate} value="-">-</button>
            <button className="button number" onClick={inputNum} value=".">.</button>
            <button className="button number" onClick={inputNum} value={0}>0</button>
            <button className="button operator" onClick={calculate} value="/">/</button>
            <button className="button operator" onClick={calculate} value="*">x</button>
          </div>
          <div className="flex">
            <div className="button function accent-color-two" id="clear" onClick={clear}>Reset</div>
            <div className="button operator equal accent-color-one " onClick={equal}>=</div>
          </div>
  
  
        </div>
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/xXAxiomaXx" target='_blank'>EM DEV</a>.
        </div>
    </div>
      </body>
    </div>
  );
}