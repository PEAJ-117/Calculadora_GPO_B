// Insertar variables inmodificables
import { useState } from "react"
import './App.css'

function App() {
  const [screen, setScreen] = useState("0");      // Insertar variables  modificables
  
  const handleButtonClickNine = () => {              // Funcion de los botones
    if (screen === '0') {
      setScreen(`9`);
    } else {
      setScreen(`${screen}9`);
    }
  };

  const handleButtonClickEight = () => {
    if (screen === '0') {
      setScreen(`8`);
    } else {
      setScreen(`${screen}8`);
    }
  };

  const handleButtonClickSeven = () => {
    if (screen === '0') {
      setScreen(`7`);
    } else {
      setScreen(`${screen}7`);
    }
  }

  return (
     <div align="center">
      <h3>. . . CALCULATOR . . .</h3>
      <br />
      {/* START TABLE */}
      <table style={{ border: '4px solid black', width: '300px' }}>
        {/* FIRST ROW */}
        <tr style={{ border: '4px solid black', height:'80px' }}>
          <td colSpan={4} align="right" style={{ border: '2px solid black' }}>
            <h1>{screen}</h1> {/* Imprime una variable */}
          </td> {/* Column */}
        </tr>

        {/* SECOND ROW */}
        <tr>
          <td align="center"><button type="button" className="btn btn-success"><b>/</b></button></td>
          <td align="center"><button type="button" className="btn btn-success"><b>*</b></button></td>
          <td align="center"><button type="button" className="btn btn-success"><b>-</b></button></td>
          <td align="center"><button type="button" className="btn btn-success"><b>+</b></button></td>
        </tr>
        
        {/* THIRD ROW */}
        <tr>
          <td align="center"><button type="button" className="btn btn-outline-primary" onClick={handleButtonClickSeven}><b>7</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary" onClick={handleButtonClickEight}><b>8</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary" onClick={handleButtonClickNine}><b>9</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-secondary"><b>.</b></button></td>
        </tr>
        
        {/* FOURTH ROW */}
        <tr>
          <td align="center"><button type="button" className="btn btn-outline-primary"><b>4</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary"><b>5</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary"><b>6</b></button></td>
          <td rowSpan={2} align="center"><button style={{height:"85px"}} type="button" className="btn btn-info"><b>=</b></button></td>
        </tr>
        
        {/* FIFTH ROW */}
        <tr>
          <td align="center"><button type="button" className="btn btn-outline-primary"><b>1</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary"><b>2</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary"><b>3</b></button></td>
        </tr>
        
        {/* SIXTH ROW */}
        <tr>
          <td align="center"><button type="button" className="btn btn-warning" value='C'><b>C</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-dark"><b>0</b></button></td>
          <td colSpan={2} align="center"><button style={{width:"100px"}} type="button" className="btn btn-danger"><b>DELETE</b></button></td>
        </tr>

      </table>
      {/* END TABLE */}
     </div>
  )
}

export default App
