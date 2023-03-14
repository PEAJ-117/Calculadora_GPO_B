// Insertar variables inmodificables
import { useState } from "react"

function App() {
  // Insertar variables  modificables
  const [screen, setScreen] = useState("0");
  // Funcion de los botones
  const handleButtonClcik = (value) => {
    if (screen === '0') {
      setScreen(value);
    } else {
      setScreen(`${screen}${value}`);
    }
  }

  return (
     <div align="center">
      <h3>. . . CALCULATOR . . .</h3>
      <br />
      {/* START TABLE */}
      <table style={{ border: '4px solid black', width: '200px' }}>
        {/* FIRST ROW */}
        <tr style={{ border: '4px solid black', height:'60px'}}>
          <td colSpan={4} align="right" style={{ border: '2px solid black' }}>
            <h5>{screen}</h5> {/* Sustitui rpor variable */}
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
          <td align="center"><button type="button" className="btn btn-outline-primary" onClick={() => handleButtonClcik('7')}><b>7</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary" onClick={() => handleButtonClcik('8')}><b>8</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-primary" onClick={() => handleButtonClcik('9')}><b>9</b></button></td>
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
          <td align="center"><button type="button" className="btn btn-warning"><b>C</b></button></td>
          <td align="center"><button type="button" className="btn btn-outline-dark"><b>0</b></button></td>
          <td colSpan={2} align="center"><button style={{width:"100px"}} type="button" className="btn btn-danger"><b>DELETE</b></button></td>
        </tr>

      </table>
      {/* END TABLE */}
     </div>
  )
}

export default App
